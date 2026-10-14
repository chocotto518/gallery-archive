// ============================================================
// favorites.js
// お気に入りページ専用のJavaScriptファイル
// ============================================================

// ★ sites のデータはscript.jsと同じものをここにも書く必要がある。
//    なぜなら、このページはscript.jsを読み込まないから。
//    将来的にデータが増えたらsites-data.jsとして分離するとスッキリする。

const sites = [
  { id: 'sankou', category: 'website', name: 'SANKOU!', img: 'img/sankou.webp', desc: '国内のWebサイトを幅広く集めた、定番のデザインギャラリーサイトです。\n業種・カラー・テイスト・レイアウトなど分類が細かく、「こういう雰囲気のサイトを作りたい」というイメージから探しやすいのが特徴です。\n実務的なサイト例も多く、デザインの方向性を考える際の参考にしやすいサイトです。', url: 'https://sankoudesign.com/' },
  { id: 'muuuuu', category: 'website', name: 'MUUUUU.ORG', img: 'img/muuuug.webp', desc: '洗練されたWebデザインを中心に掲載しているギャラリーサイトです。\n余白の使い方やタイポグラフィ、写真表現など、完成度の高いサイトが多く、特にブランディング性の高い企業サイトや採用サイトの参考として向いています。\n全体的にスタイリッシュで落ち着いた雰囲気の作品が多い印象です。', url: 'https://muuuuu.org/' },
  { id: 'chodoii', category: 'website', name: 'ちょうどいい', img: 'img/chodoii.webp', desc: '名前の通り、「派手すぎず、実際に使いやすい」デザインを集めたギャラリーサイトです。\n奇抜な演出よりも、見やすさや親しみやすさを重視したサイトが多く、実務でそのまま参考にしやすいのが特徴です。\n中小企業サイトやサービスサイトの雰囲気づくりを学びたいときにも役立ちます。', url: 'https://choooodoii.com/' },
  { id: 'webdesigngarden', category: 'website', name: 'Web Design Garden', img: 'img/webde.webp', desc: 'デザインを「探す」だけでなく、「分析する」ことにも向いているギャラリーサイトです。\nフォント、UIパーツ、レイアウト、業種など検索軸が豊富で、特定の表現や構成を研究したいときに便利です。\nビジュアル面だけでなく、情報設計やUI設計の観点からも学びやすいサイトになっています。', url: 'https://webdesigngarden.com/' },
  { id: 'thebestdesigns', category: 'website', name: 'The Best Designs', img: 'img/awwwards.webp', desc: '世界的なWebアワードサイト「Awwwards」がまとめている、海外のハイクオリティなWebデザイン集です。\nインタラクションやアニメーション、演出表現に優れたサイトが多く、「最新のWeb表現」や「海外トレンド」を知りたいときに参考になります。\n実験的で没入感の強いデザインも多く、インスピレーション寄りのギャラリーという印象です。', url: 'https://www.awwwards.com/inspiration/the-best-designs-web-design-inspiration-7' },
  { id: 'io3000', category: 'website', name: 'I/O 3000', img: 'img/io3000.webp', desc: '国内外の洗練されたWebサイトを厳選して掲載している、Webデザインギャラリーサイトです。\nシンプルで静かなトーンのデザインが多く、アート・建築・ファッション系など、世界観を大切にしたサイトを探したいときに向いています。\n全体的に「ビジュアルの空気感」を重視したセレクトになっている印象です。', url: 'https://io3000.com/' },
  { id: '81web', category: 'website', name: '81-web.com', img: 'img/81-web.webp', desc: '日本国内のWebサイトに特化した、老舗のWebデザインギャラリーサイトです。\n検索機能が非常に充実しており、業種・色・フォント・サイトタイプなど細かい条件で絞り込みができます。\nお気に入り保存やコレクション機能もあり、「参考サイトを探す・整理する・共有する」まで含めて使いやすいのが特徴です。実務でリファレンスを管理したい人に特に向いています。', url: 'https://81-web.com/' },
  { id: 'uragawa', category: 'website', name: 'URAGAWA', img: 'img/mirai.webp', desc: 'Webデザインの見た目だけでなく、「誰が、どう作ったか」という制作背景まで知ることができるメディア型ギャラリーサイトです。\n制作会社情報、制作の裏側インタビュー、チームづくりやキャリアの話なども掲載されており、単なる参考サイト集というより"クリエイティブ業界のデータベース"に近い構成になっています。\nデザイン研究だけでなく、制作会社研究や業界理解にも役立つサイトです。', url: 'https://mirai-works.co.jp/uragawa/' },
  { id: 'parts', category: 'website', name: 'Parts.', img: 'img/parts.webp', desc: 'Webサイト全体ではなく、「ヘッダー」「CTA」「FAQ」「フッター」などパーツ単位でデザインを探せるギャラリーサイトです。\nSaaSやコーポレートサイト、LP系の実務的なデザインが多く、特定のセクションだけ参考にしたいときに非常に使いやすい構成になっています。\n「この部分どう作ればいい？」をピンポイントで調べられるため、UI設計や情報整理、構成研究にも向いているサイトです。', url: 'https://partsdesign.net/' },
  { id: 'goodportfolio', category: 'website', name: 'グッドポートフォリオ', img: 'img/good.webp', desc: 'クリエイターのポートフォリオサイトに特化した、国内向けのギャラリーサイトです。\n職種・雰囲気・カラー・表現方法などで細かく絞り込みができ、「自分に近い方向性のポートフォリオ」を探しやすいのが特徴です。\n単なる参考サイト集ではなく、"作り手の個性や物語を見る場所"という空気感があり、ポートフォリオ制作のインスピレーション収集にも向いています。', url: 'https://goodportfol.io/' },
  { id: 'musicwebclips', category: 'website', name: 'MUSIC WEB CLIPS', img: 'img/musicwebclips.webp', desc: '音楽アーティスト、バンド、フェス、レーベルなど"音楽業界のWebデザイン"に特化したギャラリーサイトです。\n色・テイスト・ジャンル・レイアウト・使用技術などで細かく検索でき、音楽系サイト特有の世界観やビジュアル表現を研究しやすいのが特徴です。\nアーティストサイトやアルバム特設サイト、ライブイベントページなどが豊富に掲載されており、カルチャー性の強いWebデザインの参考として人気があります。', url: 'https://musicwebclips.net/' },
  { id: 'happyhues', category: 'color', name: 'Happy Hues', img: 'img/happyhues.webp', desc: '実際のUIデザイン例と一緒に配色を見られる、配色学習向けのサイトです。\n単にカラーパレットを並べるだけでなく、「この色をUIに使うとどう見えるか」まで確認できるのが特徴です。\n柔らかく親しみやすい配色が多く、Webサイトやアプリのトーンづくりを考える際に参考になります。', url: 'https://www.happyhues.co/palettes/3' },
  { id: 'huemint', category: 'color', name: 'Huemint', img: 'img/huemint.webp', desc: 'AIを活用してブランド向けの配色を提案してくれるカラーツールです。\nロゴやUI、イラストなどの組み合わせをリアルタイムで試しながら、「ブランドらしさ」のある色設計を探せます。\n感覚だけではなく、配色のバランスをロジカルに調整したい人にも向いています。', url: 'https://huemint.com/brand-intersection/' },
  { id: 'colorspace', category: 'color', name: 'ColorSpace', img: 'img/mycolor.webp', desc: '1色入力するだけで、多数のカラーパレットやグラデーション案を自動生成してくれるサイトです。\n「このメインカラーを軸に広げたい」という用途に強く、グラデーションの参考探しにも向いています。\n鮮やかでデジタル感のある配色が多い印象です。', url: 'https://mycolor.space/' },
  { id: 'coolors', category: 'color', name: 'Coolors', img: 'img/coolors.webp', desc: 'Webデザイナーやクリエイターの定番とも言える配色生成ツールです。\nスペースキーを押すだけで次々にカラーパレットを生成でき、直感的に色探しができます。\n操作が非常に軽快で、「まず大量に色案を見たい」というときに便利です。配色保存や書き出し機能も充実しています。', url: 'https://coolors.co/?home' },
  { id: 'colordic', category: 'color', name: '原色大辞典', img: 'img/colordic.webp', desc: '日本語の色名を豊富に掲載している、色辞典サイトです。\n「浅葱色」「蘇芳色」など和色も含めて調べられ、RGB・HEX値も確認できます。\n配色ツールというより、"色そのものを知るための辞典"に近く、世界観づくりやネーミングの参考にもなります。', url: 'https://www.colordic.org/' },
  { id: 'adobecolor', category: 'color', name: 'Adobe Color', img: 'img/adobe.webp', desc: 'Adobe公式の高機能なカラーツールです。\nカラーホイールを使った配色設計ができるほか、他ユーザーの人気テーマやトレンド配色も閲覧できます。\n補色・類似色・トライアドなど理論ベースで色を考えやすく、デザイン初心者から実務レベルまで幅広く使われています。', url: 'https://color.adobe.com/ja/create/color-wheel' },
  { id: 'colorsupply', category: 'color', name: 'Color Supply', img: 'img/colorsupply.webp', desc: 'ポップで視覚的に分かりやすい配色提案サイトです。\n「レトロ」「ネオン」「サイバー」など雰囲気ベースでパレットを探しやすく、インスピレーション用途に向いています。\nデザイン初心者でも感覚的に配色を選びやすい構成です。', url: 'https://colorsupplyyy.com/palettes' },
  { id: 'paletton', category: 'color', name: 'Paletton', img: 'img/paletton.webp', desc: '色相環ベースで細かく配色を調整できる、本格派のカラーツールです。\n配色ルールを視覚的に確認しながら調整できるため、「なぜこの組み合わせになるのか」を理解しやすいのが特徴です。\nUIは少し専門的ですが、色彩設計を深く学びたい人に向いています。', url: 'https://paletton.com/#uid=15A0u0k9tbh6Sni8FhSg09flJ7R' },
  { id: 'realtimecolors', category: 'color', name: 'Realtime Colors', img: 'img/realtimecolors.webp', desc: '配色とタイポグラフィを同時にリアルタイム確認できるデザインツールです。\n実際のUIサンプル上で色やフォントを切り替えながら確認できるため、「サイト全体としてどう見えるか」をイメージしやすいのが特徴です。\nデザインシステムの検討にも向いています。', url: 'https://www.realtimecolors.com/' },
  { id: 'multicolr', category: 'color', name: 'Tineye Multicolr', img: 'img/multicolr.webp', desc: '色を使って画像検索ができるユニークなビジュアル検索ツールです。\n指定した色の割合に近い画像を探せるため、「この配色の雰囲気に近い写真やデザインを見たい」というときに役立ちます。\n配色そのものというより、"色から世界観を探す"ためのツールという印象です。', url: 'https://tineye.com/labs/multicolr' },
  { id: 'randoma11y', category: 'color', name: 'RandomA11y', img: 'img/randoma11y.webp', desc: 'アクセシビリティ基準を満たした配色をランダム生成してくれる、アクセシブルデザイン向けのカラーツールです。\nテキストと背景色のコントラスト比を自動でチェックしながら表示してくれるため、「見た目の良さ」と「読みやすさ」を両立した配色を探しやすいのが特徴です。', url: 'https://randoma11y.com/' },
  { id: 'iconpit', category: 'icon', name: 'icon-pit', img: 'img/icon-pit.webp', desc: '日本語で検索できる、国内向けのアイコン検索サイトです。\nUIアイコンやピクトグラムをカテゴリ別に探しやすく、日本語ベースで直感的に検索できるのが特徴です。\nデザイン初心者でも扱いやすく、プレゼン資料やWeb制作の素材探しにも便利です。', url: 'https://icon-pit.com/' },
  { id: 'nounproject', category: 'icon', name: 'Noun Project', img: 'img/noun.webp', desc: '世界中のデザイナーが制作したアイコンを集めた、巨大なアイコンプラットフォームです。\n一般的なUIアイコンだけでなく、抽象概念や専門的なモチーフまで非常に幅広く揃っているのが特徴です。\n「この概念を視覚化したい」というときの検索性が高く、アイデア探しにも向いています。', url: 'https://thenounproject.com/' },
  { id: 'streamline', category: 'icon', name: 'streamline', img: 'img/streamline.webp', desc: '非常に大量のアイコン・イラストを収録した、プロ向けデザイン素材サービスです。\nシンプル系から個性的なスタイルまで幅広く、統一感のあるデザイン素材をまとめて探せるのが特徴です。\nUIデザインだけでなく、プレゼン資料やブランディング用途にも使いやすい構成になっています。', url: 'https://www.streamlinehq.com/' },
  { id: 'materialsymbols', category: 'icon', name: 'Material Symbols & Icons', img: 'img/google.webp', desc: 'Googleが提供する「Material Symbols / Material Icons」を閲覧・取得できるサイトです。\nAndroidやGoogle系サービスで使われる思想をベースにしており、機能的で視認性の高いアイコンが豊富です。\nバリエーションやカスタマイズ性も高く、UI設計向けに非常に実用的です。', url: 'https://fonts.google.com/icons' },
  { id: 'feather', category: 'icon', name: 'Feather', img: 'img/feather.webp', desc: '軽やかでミニマルな線画アイコンを中心としたライブラリです。\n情報量を増やしすぎず、UIに自然に馴染むデザインが特徴で、現在のシンプル系Webデザインの定番の一つとも言えます。\nLucideなど後続ライブラリにも大きな影響を与えています。', url: 'https://feathericons.com/' },
  { id: 'nucleo', category: 'icon', name: 'Nucleo UI Icons', img: 'img/nucleo.webp', desc: 'UIデザイン向けに整理された、高品質なアイコンライブラリです。\n線・塗り・太さなどスタイルの統一感が強く、プロダクトデザインやアプリUI制作で使いやすい構成になっています。\n全体的に洗練された印象があり、デザインシステムとの相性も良いです。', url: 'https://nucleoapp.com/ui-icons' },
  { id: 'iconmonstr', category: 'icon', name: 'iconmonstr', img: 'img/iconmonstr.webp', desc: 'シンプルで汎用性の高いモノクロアイコンを大量に配布しているサイトです。\n装飾を抑えた実務向けのデザインが多く、資料制作やWebサイト、UIデザインなど幅広く使いやすいのが特徴です。\n検索性も高く、「必要なアイコンをすぐ探したい」ときに便利です。', url: 'https://iconmonstr.com/' },
  { id: 'lucide', category: 'icon', name: 'Lucide', img: 'img/lucide.webp', desc: 'Feather Iconsをベースに発展した、オープンソースのアイコンライブラリです。\nミニマルで軽量なデザインが特徴で、現在のUIデザインに馴染みやすいアイコンが豊富に揃っています。\nReact・Vueなど各種フレームワーク対応も充実しており、開発との相性が良いライブラリです。', url: 'https://lucide.dev/icons/' },
  { id: 'heroicons', category: 'icon', name: 'heroicons', img: 'img/hero.webp', desc: 'Tailwind CSSの開発元が提供している、シンプルで実用性の高いSVGアイコンライブラリです。\n線の太さや形状が統一されており、モダンなWebサービスや管理画面との相性が非常に良いのが特徴です。\n特にReactやTailwind環境で使いやすく、実装向けのアイコンとして人気があります。', url: 'https://heroicons.com/' },
  { id: 'behance', category: 'other', name: 'Behance', img: 'img/behance.webp', desc: 'Adobeが運営する、世界最大級のクリエイター向けポートフォリオプラットフォームです。\nWebデザイン、グラフィック、UI/UX、イラスト、映像など幅広い分野の作品が掲載されており、世界中のクリエイティブ事例を探すことができます。\n完成作品だけでなく、制作プロセスや見せ方まで含めて学べるため、デザイン研究やポートフォリオ制作の参考としても非常に人気があります。', url: 'https://www.behance.net/' },
  { id: 'bannerlibrary', category: 'other', name: 'BANNER LIBRARY', img: 'img/banner.webp', desc: 'バナー広告やSNSクリエイティブを中心に掲載している、国内向けのデザインギャラリーサイトです。\n「かわいい」「高級感」「ポップ」などテイスト別の分類が細かく、目的に合ったデザインを探しやすいのが特徴です。\n特に実務寄りの広告デザインが豊富で、バナー制作やキャンペーンビジュアルの参考探しに向いています。', url: 'https://design-library.jp/page/2' },
  { id: 'dribbble', category: 'other', name: 'Dribbble', img: 'img/dribbble.webp', desc: '世界中のデザイナーが作品を投稿している、代表的なデザインコミュニティ兼ポートフォリオサイトです。\nUIデザイン、イラスト、ロゴ、アニメーションなど幅広い作品が掲載されており、特に"見せ方の強いビジュアル表現"を探したいときに参考になります。\nインスピレーション収集やトレンド観察に向いているサイトとしてよく使われています。', url: 'https://dribbble.com/' },
  { id: 'flyerarchive', category: 'other', name: 'FLYER ARCHIVE JP', img: 'img/flyer.webp', desc: 'フライヤーやチラシに特化した、国内でも珍しいグラフィックデザインのアーカイブサイトです。\n映画、音楽、演劇、美術展などの印刷物を年代・色・テイスト別に整理して閲覧でき、紙媒体ならではの表現を研究するのに向いています。\n特に1990〜2000年代のカルチャー色の強いデザインも多く、Webデザインとは違った"紙の熱量"を感じられる参考サイトです。', url: 'https://flyer-jp.com/' },
  { id: 'kyonoflyer', category: 'other', name: '今日のフライヤー', img: 'img/abstract.webp', desc: '日々制作されるフライヤーデザインを記録・紹介している、フライヤー専門のギャラリーサイトです。\n単なる広告物ではなく、「文化や時代を映すデザイン」としてフライヤーを扱っているのが特徴で、アート性の高い作品が多く掲載されています。\nタイポグラフィやレイアウト、印刷物ならではの空気感を学びたいときに参考になるサイトです。', url: 'https://abstract.jp/flyer/' },
  { id: 'brandarchive', category: 'other', name: 'Brand Archive', img: 'img/brandarchive.webp', desc: '世界中のブランドデザインやロゴ、ビジュアルアイデンティティをアーカイブしているリサーチ向けサイトです。\nロゴだけでなく、カラー・タイポグラフィ・パッケージ・ガイドラインなども整理されており、ブランド全体の設計思想を分析しやすいのが特徴です。\nPinterestより整理性が高く、デザインブログより検索しやすい構成を目指して作られており、ブランディング研究やリファレンス収集に向いています。', url: 'https://brandarchive.xyz/' },
  { id: 'uidesigndict', category: 'ui', name: 'UI Design Dictinary', img: 'img/ui-design.webp', desc: 'UIコンポーネントやデザインパターンを、実例付きで体系的に整理しているUIリファレンスサイトです。\nナビゲーション、フォーム、モーダル、オンボーディング、EC機能などをカテゴリ別に閲覧でき、「このUIの名前は何だろう？」を調べながら学べるのが特徴です。\nデザインギャラリーというより"UIパターン辞典"に近く、UI設計やインタラクションデザインの基礎を整理したいときに役立つサイトです。', url: 'https://ui-design-dictionary.pages.dev/' },
  { id: 'cssstock', category: 'ui', name: 'CSS Stock', img: 'img/css-stock.webp', desc: 'CSSで実装できるアニメーションやUI表現を、実際の動き付きでまとめているフロントエンド向けのリファレンスサイトです。\nhover、button、loading、background演出などをカテゴリ別に閲覧でき、「この動きどう作るんだろう？」をコード付きで確認できるのが特徴です。\nデザイン参考というより実装寄りの資料集に近く、インタラクションデザインやCSS表現の引き出しを増やしたいときに役立つサイトです。', url: 'https://pote-chil.com/css-stock/ja' },
  { id: 'collectui', category: 'ui', name: 'Collect UI', img: 'img/collectui.webp', desc: 'UIコンポーネントや画面デザインを毎日収集・掲載している、UIデザイン特化のギャラリーサイトです。\nログイン画面、ダッシュボード、カードUI、フォーム、ナビゲーションなどをカテゴリ別に探すことができ、実践的なUIパターンの参考を集めやすいのが特徴です。\nDribbbleよりもUIに特化した構成になっており、アプリやWebサービスの画面設計、コンポーネント研究のインスピレーション収集に向いています。', url: 'https://collectui.com/' },
  { id: 'uiverse', category: 'ui', name: 'UNIVERSE', img: 'img/uiverse.webp', desc: 'ボタン、チェックボックス、ローディング、トグルなど、CSSとHTMLで実装されたUIコンポーネントを投稿・共有できるコミュニティサイトです。\n実際に動くサンプルとコードをそのまま確認できるため、「この表現を自分のサイトに取り入れたい」というときにすぐ参考にできるのが特徴です。\n実務向けのシンプルなUIから遊び心のあるアニメーション表現まで幅広く揃っており、フロントエンド実装やインタラクションデザインのアイデア収集に役立ちます。', url: 'https://uiverse.io/elements' },
  { id: 'benry', category: 'ui', name: 'ベンリーUI', img: 'img/benry.webp', desc: 'Webサイトやアプリで使われるUIコンポーネントを、実例ベースで整理・紹介しているリファレンスサイトです。\nボタン、フォーム、ナビゲーション、モーダルなどをカテゴリ別に閲覧でき、「このUIは他社サービスでどう表現されているか」を比較しながら学べるのが特徴です。\nデザインのアイデア収集だけでなく、実務でのUI設計やコンポーネント研究にも役立つサイトです。', url: 'https://benry.me/ui/' },
  { id: 'hover', category: 'ui', name: 'Hover.css', img: 'img/hover.webp', desc: 'ボタンやリンク、画像などに適用できるホバーアニメーションを100種類以上収録した、CSSアニメーションライブラリです。\n実際の動きを一覧で確認しながらコードを利用できるため、「ホバー時にどんな反応をさせるか」のアイデア集として活用しやすいのが特徴です。\nシンプルな拡大縮小から下線アニメーション、背景変化、アイコン演出まで幅広く揃っており、インタラクションデザインやCSS表現の学習にも役立ちます。', url: 'https://ianlunn.github.io/Hover/' },
  { id: 'shadow', category: 'ui', name: 'CSS Box Shadow Examples', img: 'img/shadow.webp', desc: 'ボックスシャドウのデザイン例を100種類以上掲載している、CSS表現のリファレンスサイトです。\n実際の見た目を確認しながらCSSコードをそのままコピーできるため、「この影どう作るの？」をすぐに解決できるのが特徴です。\nカードUIやボタン、モーダルなどの立体感や奥行き表現を研究したいときに役立ち、UIデザインの質感づくりの参考にもなります。', url: 'https://getcssscan.com/css-box-shadow-examples' },
  { id: 'lpadvance', category: 'website', name: 'LP advance', img: 'img/advance.webp', desc: 'ランディングページ（LP）やWeb広告のデザインをまとめて紹介している、LPデザインギャラリーへのリンク集です。\n業種やテイストごとにさまざまな参考サイトへアクセスできるため、目的に合ったLPデザインを効率よく探せるのが特徴です。\nLPの構成や情報設計、CTAの配置、広告クリエイティブなどを研究したいときの入り口として役立ちます。', url: 'https://site-advance.info/tag/%E3%82%A2%E3%83%97%E3%83%AA/' },
  { id: 'mekikiki', category: 'website', name: 'me ki ki ki', img: 'img/mekiki.webp', desc: '国内外のWebサイトを厳選して掲載している、Webデザインギャラリーサイトです。\nパララックスやWebGL、アニメーションなどの使用技術や、配色・業種・テイストなど細かなタグで検索できるため、目的に合ったデザインを効率よく探せるのが特徴です。\n各サイトにはデザインの見どころやポイントも紹介されており、単に閲覧するだけでなく、UIやインタラクションの研究にも役立つサイトです。', url: 'https://mekikiki.com/' },
  { id: 'gradient', category: 'color', name: 'カラーグラデーション生成', img: 'img/color-gradient.webp', desc: '2つのカラーコード（HEX）から、滑らかなグラデーションカラーを自動生成できるカラーツールです。\nRGB・HSV・HSLの3つの色モデルに対応しており、色空間の違いによるグラデーションの変化を比較しながら確認できるのが特徴です。\n中間色の作成やUIデザイン、背景デザインの配色検討など、グラデーション設計の参考として役立つサイトです。', url: 'https://tools.tolog.info/tools/color-gradient-generator' },
  { id: 'uicolor', category: 'color', name: 'UI Color', img: 'img/tailwind.webp', desc: 'メインカラーをもとに、Tailwind CSS向けのカラーパレットを自動生成できるカラーツールです。\n明度ごとのカラースケールをリアルタイムで作成できるほか、UIプレビューで実際の見え方を確認しながら調整できるのが特徴です。\nデザインシステムの構築やブランドカラーの展開、Webサイトやアプリの配色設計を効率的に行いたいときに役立つサイトです。', url: 'https://uicolors.app/generate/444441' },
  { id: 'untitled', category: 'icon', name: 'Untitled UI', img: 'img/untitled.webp', desc: '1,100種類以上の無料SVGアイコンをダウンロードできる、クリーンで一貫性のあるニュートラルなアイコンライブラリです。\nラインスタイルのアイコンを無制限の個人・商用プロジェクトでクレジット表記なしに利用でき、サイト上でSVGを直接コピーするか、Figma用の無料ライブラリとしてもダウンロード可能です。\nより多くのスタイルやアイコン数（PRO版では4色スタイル・4,600種類以上）を求める場合は有料プランも用意されています。', url: 'https://www.untitledui.com/free-icons' },
{ id: 'webbento', category: 'ui', name: 'Web BENTO css', img: 'img/webbento.webp', desc: 'ボタン・見出し・グラデーション・ローディングなどコピペで使えるHTML/CSSパーツを192種類以上、全16カテゴリ収録したWebパーツギャラリーで、商用利用OK・登録不要・すべて無料で提供されています。\nパーツはすべて画像を使わないピュアCSSで実装されており、クラス名にbnto-のプレフィックスが付くため既存サイトのスタイルと衝突しにくい設計で、Claude CodeやCursorのようなAIコーディングツールと組み合わせても使いやすくなっています。', url: 'https://amix-design.com/tl/web-bento/' },
 { id: 's5', category: 'website', name: 'S5-Style', img: 'img/s5.webp', desc: 'ハイクオリティなWebサイトを業界・テーマ・配色など細かなフィルターで探索できるWebデザインギャラリーサイトです。\n完成度の高いブランディングサイトやコーポレートサイトが豊富に掲載されており、洗練されたWebデザインの参考として最適です。\nデザイナーインタビューなど制作背景も学べるため、デザイン研究とクリエイティブ業界の理解を同時に深められます。', url: 'https://www.s5-style.com/' },
 { id: 'maxibestof.one', category: 'website', name: 'maxibestof.one', img: 'img/maxibestof.webp', desc: '世界中の優れたWebデザイナーとエージェンシーが制作した高品質なWebサイトを、業界・業種・デザインスタイル・使用フォントなど多角的なフィルターで探索できるグローバルなデザインギャラリーサイトです。\n実装レベルで参考になる完成度の高い事例が豊富に掲載されており、制作思想やタイポグラフィ、配色、UI表現を同時に学べるのが特徴です。\n毎週厳選されたWebサイトがメール配信される購読機能があり、継続的に最新のデザイントレンドを追跡できます。', url: 'https://maxibestof.one/websites' },
 { id: 'gallereee', category: 'website', name: 'Best Inspirational Portfolio Websites.', img: 'img/gallereee.webp', desc: 'クリエイティブプロフェッショナルの高品質なポートフォリオサイトを、職種やデザインスタイルで細かく分類・検索できるギャラリーサイトです。\nエージェンシーからフリーランスデザイナー、フォトグラファーまで、多様なクリエイター向けの参考資料が豊富に揃っており、自分の分野や目指すデザイン表現を効率よく研究できます。\n毎週新しいポートフォリオが追加されるため、最新のクリエイティブトレンドや表現技法を継続的に追跡できるのが特徴です。', url: 'https://www.gallereee.com/' },
 { id: 'uigallery', category: 'ui', name: 'UIデザインギャラリー', img: 'img/uigallery.webp', desc: '洗練されたUIデザインを中心に掲載しているギャラリーサイトです。\n余白の使い方やタイポグラフィ、ビジュアル表現など、完成度の高いアプリUIが多く、特にモダンで落ち着いた雰囲気のデザイン参考として向いています。\n国内最大手を目指して更新中で、iOSやAndroid、Webなど複数プラットフォームのUIを体系的に閲覧・研究できるのが特徴です。', url: 'https://ui-zukan.com/gallery' },
 { id: 'uipocket', category: 'ui', name: 'UI Pocket', img: 'img/uipocket.webp', desc: 'モバイルアプリのUIデザインを中心に掲載しているギャラリーサイトです。\niOSやAndroidの実際のアプリUIを、スクリーンショット単位で参考にできるのが特徴で、ナビゲーション・ボタン・モーダルなど各種パターンを実装レベルで研究しやすいのが特徴です。\nログイン後により多くのスクリーンショットが閲覧でき、実装向けのUIリファレンスとして活用できます。', url: 'https://www.ui-pocket.com/mobile' },
 { id: 'deck', category: 'other', name: 'Deck.gallery', img: 'img/deck.webp', desc: 'プレゼンテーション資料のデザインに特化したキュレーションギャラリーサイトです。\nKeynote、PowerPoint、Google Slides など、実装レベルで参考になる美しくデザインされたデッキが週ごとに更新されており、スライド構成やビジュアル表現を研究するのに向いています。\n企業プレゼンやピッチデック、カンファレンス資料など、実務的で完成度の高い事例が豊富に揃っているのが特徴です。', url: 'https://www.deck.gallery/' },
 { id: 'unblast', category: 'other', name: 'Unblast', img: 'img/unblast.webp', desc: '高品質なデザイン素材を厳選して配布しているアセットライブラリです。\nモックアップ、フォント、テンプレート、テクスチャ、アイコンなど、デザイン実務で日常的に必要となる素材が揃っており、すぐに使える状態で提供されているのが特徴です。\nトレンドを反映した新しい素材が定期的に追加されるため、最新のデザイン表現を参考にしたいときにも重宝します。', url: 'https://unblast.com/' },
 { id: 'logggos', category: 'other', name: 'Logggos.club', img: 'img/logggos.webp', desc: '世界中のよく設計されたロゴを業種・テーマ・タイポグラフィ・ブランドカラーで分類して掲載しているロゴギャラリーサイトです。\nケーススタディなど設計背景も含めて学べるため、ロゴ制作やブランディングの参考として活用できます。\n週ごとのメール購読機能があり、定期的にデザインインスピレーションを受け取ることも可能です。', url: 'https://www.logggos.club/' },
 { id: 'anothergraphic', category: 'other', name: 'Another Graphic', img: 'img/anothergraphic.webp', desc: 'タイポグラフィを中心としたグラフィックデザイン作品のアーカイブサイトです。\n世界中のデザイナーやスタジオによる、ポスター・エディトリアルデザイン・アイデンティティなど、文字表現に焦点を当てた高品質なデザイン事例を掲載しており、年代・国・色・表現形式で検索・閲覧できるのが特徴です。\n日々更新される最新のデザイン作品を通じて、グラフィックデザインのトレンドと表現技法を研究できます。', url: 'https://anothergraphic.org/' },
];


// ============================================================
// お気に入りページのメイン処理
// ============================================================

// localStorageからお気に入りIDの配列を取得する
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

// お気に入りを追加・削除する
function saveFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favs));
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


// モーダル関連（index.htmlと同じ）
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(event, btn) {
  event.preventDefault();
  document.getElementById('modalTitle').textContent = btn.dataset.name;
  document.getElementById('modalImg').src = btn.dataset.img;
  document.getElementById('modalDesc').textContent = btn.dataset.desc;
  document.getElementById('modalLink').href = btn.dataset.url;
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