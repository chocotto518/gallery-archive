// ============================================================
// favorites.js
// お気に入りページ専用のJavaScriptファイル
// ※ サイトのデータ（sites）は sites-data.js、
//    カード・お気に入り・モーダルなど共通の処理は common.js にある
// ============================================================

// ============================================================
// お気に入りページのメイン処理
// ============================================================

// ★お気に入りページでハートを押して解除したら、そのカードを画面から消す
// （ハートの見た目・保存の処理は common.js の toggleFavorite が先に行う）
document.getElementById('favoriteList').addEventListener('click', (event) => {
  const btn = event.target.closest('.favorite-btn');
  if (!btn || btn.classList.contains('active')) return; // 解除したときだけ

  const card = document.getElementById('card-' + btn.dataset.id);
  if (card) card.remove();

  // カードが全部なくなったら「お気に入りなし」メッセージを表示
  if (document.getElementById('favoriteList').children.length === 0) {
    document.getElementById('emptyMessage').style.display = 'block';
  }
});

// ページが読み込まれたときに実行される処理
window.addEventListener('DOMContentLoaded', () => {
  const favIds = getFavorites();           // 保存されているIDの一覧
  const list = document.getElementById('favoriteList');
  const emptyMessage = document.getElementById('emptyMessage');

  if (favIds.length === 0) {
    // お気に入りが1件もない場合はメッセージを表示
    emptyMessage.style.display = 'block';
    return; // 以降の処理をスキップ
  }

  // お気に入りIDに一致するサイトだけカードを生成して追加
  favIds.forEach(id => {
    const site = sites.find(s => s.id === id); // IDで検索
    if (site) {
      list.innerHTML += createCard(site);
    }
  });
});

// favorites.html を離れる際に、戻るリンククリック以外の遷移を判定
let isLinkClick = false;

// すべての戻るリンクに click イベントを付与
document.querySelectorAll('a[href*="index.html"]').forEach(link => {
  link.addEventListener('click', () => {
    isLinkClick = true;
  });
});

window.addEventListener('pagehide', () => {
  // リンククリック経由の場合のみフラグを設定
  if (isLinkClick) {
    sessionStorage.setItem('fromFavorites', 'true');
  }
});