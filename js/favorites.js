// ============================================================
// favorites.js
// お気に入りページ専用のJavaScriptファイル
// ※ サイトのデータ（sites）は sites-data.js、
//    お気に入り・モーダルなど共通の処理は common.js にある
// ============================================================

// ============================================================
// お気に入りページのメイン処理
// ============================================================

// カードのHTML文字列を作る関数（favorites専用）
// ★ハートを押すと画面からカードを消す処理も追加している
function createFavCard(site) {
  return `
    <div class="card" id="card-${site.id}">
      <div class="card-title">
        ${site.name}
        <div class="card-btns">
          <button class="detail-btn" onclick="openModal(event,this)"
            data-name="${escapeAttr(site.name)}"
            data-img="${escapeAttr(site.img)}"
            data-desc="${escapeAttr(site.desc)}"
            data-url="${escapeAttr(site.url)}">
            <img src="img/detail.svg" alt="">
          </button>
          <!-- お気に入りページでは最初からハートが塗りつぶされた状態 -->
          <button class="favorite-btn active" onclick="removeFavorite(event, this, '${site.id}')">
            <img src="img/fav-fill.svg" alt="">
          </button>
        </div>
      </div>
      <a href="${site.url}" target="_blank">
        <div class="card-thumb">
          <img src="${site.img}" alt="${site.name}">
        </div>
      </a>
    </div>
  `;
}

// ★お気に入りページでハートを押したとき: 削除してカードも消す
function removeFavorite(event, btn, id) {
  event.preventDefault();
  saveFavorite(id); // localStorageから削除

  // カードをDOMから削除
  const card = document.getElementById('card-' + id);
  if (card) card.remove();

  // カードが全部なくなったら「お気に入りなし」メッセージを表示
  const list = document.getElementById('favoriteList');
  if (list.children.length === 0) {
    document.getElementById('emptyMessage').style.display = 'block';
  }
}

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
      list.innerHTML += createFavCard(site);
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