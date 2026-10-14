// ============================================================
// script.js
// トップページ（index.html）のJavaScriptファイル
// ※ サイトのデータ（sites）は sites-data.js にある
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

// カードを生成する関数
// ★変更点: data-id="${site.id}" を追加した（どのサイトかを識別するため）
// ★変更点: isFavorited(site.id) でお気に入り済みなら最初からハートを塗りつぶす
function createCard(site) {
  const favActive = isFavorited(site.id) ? 'active' : '';
  return `
    <div class="card">
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

// カードをセクションに追加する
const websiteList = document.getElementById('websiteList');
const colorList = document.getElementById('colorList');
const iconList = document.getElementById('iconList');
const uiList = document.getElementById('uiList');
const otherList = document.getElementById('otherList');

sites.forEach(site => {
  if (site.category === 'website') {
    websiteList.innerHTML += createCard(site);
  } else if (site.category === 'color') {
    colorList.innerHTML += createCard(site);
  } else if (site.category === 'icon') {
    iconList.innerHTML += createCard(site);
  } else if (site.category === 'ui') {              // ★追加
    uiList.innerHTML += createCard(site);
  } else if (site.category === 'other') {
    otherList.innerHTML += createCard(site);
  }
});


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

// 変更後：backToTopの処理を追記
const stickyNav = document.querySelector('.sticky-nav');
const header = document.querySelector('.header');
const backToTop = document.getElementById('backToTop'); // ★追加

window.addEventListener('scroll', () => {
  if (window.scrollY > header.offsetHeight) {
    stickyNav.classList.add('visible');
    backToTop.classList.add('visible');    // ★追加
  } else {
    stickyNav.classList.remove('visible');
    backToTop.classList.remove('visible'); // ★追加
  }
});

// ★追加：クリックでTOPにスクロール
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    if (title.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});



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


const loading = document.getElementById('loading');
const skipLoading = document.documentElement.classList.contains('skip-loading');

if (skipLoading) {
  // favorites.html から戻った場合はローディングなし
  loading.style.display = 'none';
} else {
  // 画面描画後にタイピングアニメーションを開始する
  requestAnimationFrame(() => {
    loading.classList.add('is-active');
  });

  // タイピング完了後、ローディング画面を消す
  setTimeout(() => {
    loading.classList.add('is-hidden');

    // フェードアウト終了後にHTML上から取り除く
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);
  }, 1500);
}


// 新着チェック関数
function checkNewSites() {
  const lastVisit = localStorage.getItem('lastVisit');
  const now = new Date().toISOString().slice(0, 10);

  let sitesToShow = [];

  if (!lastVisit) {
    // 初回訪問: 2026-08-03 のサイトだけを表示
    sitesToShow = sites.filter(site => site.addedAt === '2026-08-03');
  } else {
    // 2回目以降: 前回訪問日より新しいサイトを表示
    sitesToShow = sites.filter(site => {
      if (!site.addedAt) return false;
      return site.addedAt > lastVisit;
    });
  }

  localStorage.setItem('lastVisit', now);

  if (sitesToShow.length === 0) return;

  const list = document.getElementById('noticeList');
    sitesToShow.forEach(site => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = site.name;
      a.href = site.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      li.appendChild(a);
      list.appendChild(li);
    });

  setTimeout(() => {
    document.getElementById('noticeOverlay').style.display = 'flex';
  }, 1700);
}

// 閉じるボタンの処理
const noticeOverlay = document.getElementById('noticeOverlay');
const noticeClose = document.getElementById('noticeClose');
const noticeBtn = document.getElementById('noticeBtn');

function closeNotice() {
  noticeOverlay.style.display = 'none';
}

noticeClose.addEventListener('click', closeNotice);
noticeBtn.addEventListener('click', closeNotice);

// ページ読み込み後に新着サイトを確認する（★これが今まで不足していた1行）
window.addEventListener('DOMContentLoaded', () => {
  checkNewSites();
});