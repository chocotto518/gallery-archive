// ============================================================
// script.js
// トップページ（index.html）のJavaScriptファイル
// ※ サイトのデータ（sites）は sites-data.js、
//    カード・お気に入り・モーダルなど共通の処理は common.js にある
// ============================================================

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

const searchEmpty = document.getElementById('searchEmpty');
const searchEmptyKeyword = document.getElementById('searchEmptyKeyword');

// ★変更: セクションごとに一致した数を数えて、0件のセクションは見出しごと隠す。
//         全部0件なら「見つかりませんでした」を出す
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.trim().toLowerCase();
  let total = 0; // ページ全体で一致したカードの数

  document.querySelectorAll('main .section').forEach(section => {
    let count = 0; // このセクションで一致したカードの数

    section.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(keyword)) {
        card.style.display = 'block';
        count++;
      } else {
        card.style.display = 'none';
      }
    });

    section.style.display = count === 0 ? 'none' : ''; // '' は「CSSの指定どおりに戻す」
    total += count;
  });

  if (total === 0) {
    searchEmptyKeyword.textContent = '「' + searchInput.value.trim() + '」';
    searchEmpty.style.display = 'block';
  } else {
    searchEmpty.style.display = 'none';
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
    // ★変更: 初回訪問: いちばん新しい追加日のサイトだけを表示
    //         （日付を決め打ちしないので、サイトを追加すると自動で切り替わる）
    const latest = sites.reduce((max, site) => (site.addedAt > max ? site.addedAt : max), '');
    sitesToShow = sites.filter(site => site.addedAt === latest);
  } else {
    // 2回目以降: 前回訪問日より新しいサイトを表示
    sitesToShow = sites.filter(site => {
      if (!site.addedAt) return false;
      return site.addedAt > lastVisit;
    });
  }

  localStorage.setItem('lastVisit', now);

  if (sitesToShow.length === 0) return;

  // ★変更: セクションごとにまとめて、見出し（アイコン＋セクション名）の下にサイトを並べる
  //         並び順はページのセクションと同じ
  const sections = [
    { category: 'website', label: 'Web',   icon: 'img/web.svg' },
    { category: 'color',   label: 'Color', icon: 'img/color.svg' },
    { category: 'icon',    label: 'Icon',  icon: 'img/icon.svg' },
    { category: 'ui',      label: 'UI',    icon: 'img/ui.svg' },
    { category: 'other',   label: 'Other', icon: 'img/other.svg' },
  ];

  const list = document.getElementById('noticeList');
  sections.forEach(section => {
    const sectionSites = sitesToShow.filter(site => site.category === section.category);
    if (sectionSites.length === 0) return; // 新着がないセクションは出さない

    const group = document.createElement('li');
    group.className = 'notice-group';

    const heading = document.createElement('p');
    heading.className = 'notice-section';
    const icon = document.createElement('img');
    icon.src = section.icon;
    icon.alt = '';
    heading.appendChild(icon);
    heading.appendChild(document.createTextNode(section.label));
    group.appendChild(heading);

    const siteList = document.createElement('ul');
    siteList.className = 'notice-sites';
    sectionSites.forEach(site => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = site.name;
      a.href = site.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      li.appendChild(a);
      siteList.appendChild(li);
    });
    group.appendChild(siteList);

    list.appendChild(group);
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

// ★追加: 新着お知らせも Esc キーで閉じる
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeNotice();
  }
});

// ページ読み込み後に新着サイトを確認する（★これが今まで不足していた1行）
window.addEventListener('DOMContentLoaded', () => {
  checkNewSites();
});