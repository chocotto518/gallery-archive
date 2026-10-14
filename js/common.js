// ============================================================
// common.js
// index.html と favorites.html の両方で使う処理
//   ・お気に入りの保存・読み込み
//   ・カードの生成とハートの動き（createCard / toggleFavorite）
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


// ============================================================
// カード（両ページとも同じ見た目・同じハートの動き）
// ============================================================

// カードを生成する関数
// ★変更点: data-id="${site.id}" を追加した（どのサイトかを識別するため）
// ★変更点: isFavorited(site.id) でお気に入り済みなら最初からハートを塗りつぶす
function createCard(site) {
  const favActive = isFavorited(site.id) ? 'active' : '';
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
          <button class="favorite-btn ${favActive}" onclick="toggleFavorite(event,this)"
            data-id="${site.id}">
            <span class="fav-icon"></span>  <!-- ★imgからspanに変更 -->
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

// ★変更点: toggleFavorite に localStorageへの保存処理を追加
function toggleFavorite(event, btn) {
  event.preventDefault();

  const id = btn.dataset.id;
  const isActive = btn.classList.contains('active');
  const iconEl = btn.querySelector('.fav-icon');

  const easeOutQuart = "cubic-bezier(0.25, 1, 0.5, 1)";
  const easeInQuart  = "cubic-bezier(0.5, 0, 0.75, 0)";

  // ★transformに統一（translateの代わりにtransformYで表現）
  const keyframes = [
  { transform: "scale(0.9, 0.6) translateY(0)" },          // ← 最初からつぶれた状態に
  { transform: "scale(1.2) translateY(-50%)", offset: 0.3, easing: easeOutQuart },
  { transform: "scale(1) translateY(0)",      easing: easeInQuart },
];

  if (isActive) {
    btn.classList.remove('active'); // 解除はアニメーションなし
  } else {
    btn.classList.add('active');
    iconEl.animate(keyframes, { duration: 500 }); // 塗りありになった瞬間にジャンプ
  }

  saveFavorite(id);
}
