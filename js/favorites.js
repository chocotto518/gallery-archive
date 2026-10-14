// ============================================================
// favorites.js
// お気に入りページ専用のJavaScriptファイル
// ※ サイトのデータ（sites）は sites-data.js、
//    カード・お気に入り・モーダルなど共通の処理は common.js にある
// ============================================================

// ============================================================
// お気に入りページのメイン処理
// ============================================================

// ★ハートを押して解除しても、カードは画面に残す（もう一度押せば登録し直せる）
//   ハートの見た目・保存の処理は common.js の toggleFavorite が行う。
//   解除したカードは、次にこのページを開いたときに表示されなくなる。

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