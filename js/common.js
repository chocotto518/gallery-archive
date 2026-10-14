// ============================================================
// common.js
// index.html と favorites.html の両方で使う処理
//   ・お気に入りの保存・読み込み
//   ・HTMLに入れる文字の変換（escapeAttr）
//   ・詳細モーダルの開け閉め
//
// ★それぞれのページでは sites-data.js の次、
//   script.js / favorites.js より先に読み込んでいる。
// ============================================================

// ============================================================
// ★追加: お気に入りの保存・読み込み（localStorageを使う）
// localStorageとは: ブラウザにデータを保存しておける仕組みで
//                   ページを閉じても消えない
// ============================================================

// お気に入りIDの一覧を取得する（なければ空の配列を返す）
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

// お気に入りを追加・削除する（トグル）
function saveFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    // すでに存在する → 削除
    favs = favs.filter(f => f !== id);
  } else {
    // 存在しない → 追加
    favs.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
}

// あるIDがお気に入り済みかどうか調べる
function isFavorited(id) {
  return getFavorites().includes(id);
}


// ★追加: HTMLの属性値（data-desc="..." など）に入れる文字を安全な形に変換する
// 説明文に半角の " があると、そこで属性が終わってしまい文章が途中で切れるため
function escapeAttr(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}



// ============================================================
// 詳細モーダル（両ページとも同じHTML構造）
// ============================================================

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(event, btn) {
  event.preventDefault();

  const name = btn.dataset.name;
  const img = btn.dataset.img;
  const desc = btn.dataset.desc;
  const url = btn.dataset.url;

  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalImg').src = img;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalLink').href = url;

  modalOverlay.classList.add('visible');
}

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('visible');
});

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('visible');
  }
});
