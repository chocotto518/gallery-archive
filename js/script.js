const sites = [
  // Webサイト
  {
    id: 'sankou',           // ★追加: このサイトを識別するための固有のID
    category: 'website',
    name: 'SANKOU!',
    addedAt: '2026-08-01',
    img: 'img/sankou.webp',
    desc: '国内のWebサイトを幅広く集めた、定番のデザインギャラリーサイトです。\n業種・カラー・テイスト・レイアウトなど分類が細かく、「こういう雰囲気のサイトを作りたい」というイメージから探しやすいのが特徴です。\n実務的なサイト例も多く、デザインの方向性を考える際の参考にしやすいサイトです。',
    url: 'https://sankoudesign.com/'
  },
  {
    id: 'muuuuu',           // ★追加
    category: 'website',
    name: 'MUUUUU.ORG',
    addedAt: '2026-08-01',
    img: 'img/muuuug.webp',
    desc: '洗練されたWebデザインを中心に掲載しているギャラリーサイトです。\n余白の使い方やタイポグラフィ、写真表現など、完成度の高いサイトが多く、特にブランディング性の高い企業サイトや採用サイトの参考として向いています。\n全体的にスタイリッシュで落ち着いた雰囲気の作品が多い印象です。',
    url: 'https://muuuuu.org/'
  },
  {
    id: 'chodoii',          // ★追加
    category: 'website',
    addedAt: '2026-08-01',
    name: 'ちょうどいい',
    img: 'img/chodoii.webp',
    desc: '名前の通り、「派手すぎず、実際に使いやすい」デザインを集めたギャラリーサイトです。\n奇抜な演出よりも、見やすさや親しみやすさを重視したサイトが多く、実務でそのまま参考にしやすいのが特徴です。\n中小企業サイトやサービスサイトの雰囲気づくりを学びたいときにも役立ちます。',
    url: 'https://choooodoii.com/'
  },
  {
    id: 'webdesigngarden',  // ★追加
    category: 'website',
    name: 'Web Design Garden',
    addedAt: '2026-08-01',
    img: 'img/webde.webp',
    desc: 'デザインを「探す」だけでなく、「分析する」ことにも向いているギャラリーサイトです。\nフォント、UIパーツ、レイアウト、業種など検索軸が豊富で、特定の表現や構成を研究したいときに便利です。\n;ビジュアル面だけでなく、情報設計やUI設計の観点からも学びやすいサイトになっています。',
    url: 'https://webdesigngarden.com/'
  },
  {
    id: 'thebestdesigns',   // ★追加
    category: 'website',
    name: 'The Best Designs',
    addedAt: '2026-08-01',
    img: 'img/awwwards.webp',
    desc: '世界的なWebアワードサイト「Awwwards」がまとめている、海外のハイクオリティなWebデザイン集です。\nインタラクションやアニメーション、演出表現に優れたサイトが多く、「最新のWeb表現」や「海外トレンド」を知りたいときに参考になります。\n実験的で没入感の強いデザインも多く、インスピレーション寄りのギャラリーという印象です。',
    url: 'https://www.awwwards.com/inspiration/the-best-designs-web-design-inspiration-7'
  },
  {
    id: 'io3000',           // ★追加
    category: 'website',
    name: 'I/O 3000',
    addedAt: '2026-08-01',
    img: 'img/io3000.webp',
    desc: '国内外の洗練されたWebサイトを厳選して掲載している、Webデザインギャラリーサイトです。\nシンプルで静かなトーンのデザインが多く、アート・建築・ファッション系など、世界観を大切にしたサイトを探したいときに向いています。\n全体的に「ビジュアルの空気感」を重視したセレクトになっている印象です。',
    url: 'https://io3000.com/'
  },
  {
    id: '81web',            // ★追加
    category: 'website',
    name: '81-web.com',
    addedAt: '2026-08-01',
    img: 'img/81-web.webp',
    desc: '日本国内のWebサイトに特化した、老舗のWebデザインギャラリーサイトです。\n検索機能が非常に充実しており、業種・色・フォント・サイトタイプなど細かい条件で絞り込みができます。\nお気に入り保存やコレクション機能もあり、「参考サイトを探す・整理する・共有する」まで含めて使いやすいのが特徴です。実務でリファレンスを管理したい人に特に向いています。',
    url: 'https://81-web.com/'
  },
  {
    id: 'uragawa',          // ★追加
    category: 'website',
    name: 'URAGAWA',
    addedAt: '2026-08-01',
    img: 'img/mirai.webp',
    desc: 'Webデザインの見た目だけでなく、「誰が、どう作ったか」という制作背景まで知ることができるメディア型ギャラリーサイトです。\n制作会社情報、制作の裏側インタビュー、チームづくりやキャリアの話なども掲載されており、単なる参考サイト集というよりクリエイティブ業界のデータベースに近い構成になっています。\nデザイン研究だけでなく、制作会社研究や業界理解にも役立つサイトです。',
    url: 'https://mirai-works.co.jp/uragawa/'
  },
  {
    id: 'parts',            // ★追加
    category: 'website',
    name: 'Parts.',
    addedAt: '2026-08-01',
    img: 'img/parts.webp',
    desc: 'Webサイト全体ではなく、「ヘッダー」「CTA」「FAQ」「フッター」などパーツ単位でデザインを探せるギャラリーサイトです。\nSaaSやコーポレートサイト、LP系の実務的なデザインが多く、特定のセクションだけ参考にしたいときに非常に使いやすい構成になっています。\n「この部分どう作ればいい？」をピンポイントで調べられるため、UI設計や情報整理、構成研究にも向いているサイトです。',
    url: 'https://partsdesign.net/'
  },
  {
    id: 'goodportfolio',    // ★追加
    category: 'website',
    name: 'グッドポートフォリオ',
    addedAt: '2026-08-01',
    img: 'img/good.webp',
    desc: 'クリエイターのポートフォリオサイトに特化した、国内向けのギャラリーサイトです。\n職種・雰囲気・カラー・表現方法などで細かく絞り込みができ、「自分に近い方向性のポートフォリオ」を探しやすいのが特徴です。\n単なる参考サイト集ではなく、作り手の個性や物語を見る場所という空気感があり、ポートフォリオ制作のインスピレーション収集にも向いています。',
    url: 'https://goodportfol.io/'
  },
  {
    id: 'musicwebclips',    // ★追加
    category: 'website',
    name: 'MUSIC WEB CLIPS',
    addedAt: '2026-08-01',
    img: 'img/musicwebclips.webp',
    desc: '音楽アーティスト、バンド、フェス、レーベルなど音楽業界のWebデザインに特化したギャラリーサイトです。\n色・テイスト・ジャンル・レイアウト・使用技術などで細かく検索でき、音楽系サイト特有の世界観やビジュアル表現を研究しやすいのが特徴です。\nアーティストサイトやアルバム特設サイト、ライブイベントページなどが豊富に掲載されており、カルチャー性の強いWebデザインの参考として人気があります。',
    url: 'https://musicwebclips.net/'
  },
  {
    id: 'lpadvance',    // ★追加
    category: 'website',
    name: 'LP advance',
    addedAt: '2026-08-01',
    img: 'img/advance.webp',
    desc: 'ランディングページ（LP）やWeb広告のデザインをまとめて紹介している、LPデザインギャラリーへのリンク集です。\n業種やテイストごとにさまざまな参考サイトへアクセスできるため、目的に合ったLPデザインを効率よく探せるのが特徴です。\nLPの構成や情報設計、CTAの配置、広告クリエイティブなどを研究したいときの入り口として役立ちます。',
    url: 'https://site-advance.info/tag/%E3%82%A2%E3%83%97%E3%83%AA/'
  },
  {
    id: 'mekikiki',    // ★追加
    category: 'website',
    name: 'me ki ki ki',
    addedAt: '2026-08-01',
    img: 'img/mekiki.webp',
    desc: '国内外のWebサイトを厳選して掲載している、Webデザインギャラリーサイトです。\nパララックスやWebGL、アニメーションなどの使用技術や、配色・業種・テイストなど細かなタグで検索できるため、目的に合ったデザインを効率よく探せるのが特徴です。\n各サイトにはデザインの見どころやポイントも紹介されており、単に閲覧するだけでなく、UIやインタラクションの研究にも役立つサイトです。',
    url: 'https://mekikiki.com/'
  },
  {
    id: 's5',
    category: 'website',
    name: 'S5-Style',
    addedAt: '2026-08-03',
    img: 'img/s5.webp',
    desc: 'ハイクオリティなWebサイトを業界・テーマ・配色など細かなフィルターで探索できるWebデザインギャラリーサイトです。\n完成度の高いブランディングサイトやコーポレートサイトが豊富に掲載されており、洗練されたWebデザインの参考として最適です。\nデザイナーインタビューなど制作背景も学べるため、デザイン研究とクリエイティブ業界の理解を同時に深められます。',
    url: 'https://www.s5-style.com/'
  },
  {
    id: 'maxibestof.one',
    category: 'website',
    name: 'maxibestof.one',
    addedAt: '2026-08-03',
    img: 'img/maxibestof.webp',
    desc: '世界中の優れたWebデザイナーとエージェンシーが制作した高品質なWebサイトを、業界・業種・デザインスタイル・使用フォントなど多角的なフィルターで探索できるグローバルなデザインギャラリーサイトです。\n実装レベルで参考になる完成度の高い事例が豊富に掲載されており、制作思想やタイポグラフィ、配色、UI表現を同時に学べるのが特徴です。\n毎週厳選されたWebサイトがメール配信される購読機能があり、継続的に最新のデザイントレンドを追跡できます。',
    url: 'https://maxibestof.one/websites'
  },
  {
    id: 'gallereee',
    category: 'website',
    name: 'Best Inspirational Portfolio Websites.',
    addedAt: '2026-08-03',
    img: 'img/gallereee.webp',
    desc: 'クリエイティブプロフェッショナルの高品質なポートフォリオサイトを、職種やデザインスタイルで細かく分類・検索できるギャラリーサイトです。\nエージェンシーからフリーランスデザイナー、フォトグラファーまで、多様なクリエイター向けの参考資料が豊富に揃っており、自分の分野や目指すデザイン表現を効率よく研究できます。\n毎週新しいポートフォリオが追加されるため、最新のクリエイティブトレンドや表現技法を継続的に追跡できるのが特徴です。',
    url: 'https://www.gallereee.com/'
  },

  // Color
  {
    id: 'happyhues',        // ★追加
    category: 'color',
    name: 'Happy Hues',
    addedAt: '2026-08-01',
    img: 'img/happyhues.webp',
    desc: '実際のUIデザイン例と一緒に配色を見られる、配色学習向けのサイトです。\n単にカラーパレットを並べるだけでなく、「この色をUIに使うとどう見えるか」まで確認できるのが特徴です。\n柔らかく親しみやすい配色が多く、Webサイトやアプリのトーンづくりを考える際に参考になります。',
    url: 'https://www.happyhues.co/palettes/3'
  },
  {
    id: 'huemint',          // ★追加
    category: 'color',
    name: 'Huemint',
    addedAt: '2026-08-01',
    img: 'img/huemint.webp',
    desc: 'AIを活用してブランド向けの配色を提案してくれるカラーツールです。\nロゴやUI、イラストなどの組み合わせをリアルタイムで試しながら、「ブランドらしさ」のある色設計を探せます。\n感覚だけではなく、配色のバランスをロジカルに調整したい人にも向いています。',
    url: 'https://huemint.com/brand-intersection/'
  },
  {
    id: 'colorspace',       // ★追加
    category: 'color',
    name: 'ColorSpace',
    addedAt: '2026-08-01',
    img: 'img/mycolor.webp',
    desc: '1色入力するだけで、多数のカラーパレットやグラデーション案を自動生成してくれるサイトです。\n「このメインカラーを軸に広げたい」という用途に強く、グラデーションの参考探しにも向いています。\n鮮やかでデジタル感のある配色が多い印象です。',
    url: 'https://mycolor.space/'
  },
  {
    id: 'coolors',          // ★追加
    category: 'color',
    name: 'Coolors',
    addedAt: '2026-08-01',
    img: 'img/coolors.webp',
    desc: 'Webデザイナーやクリエイターの定番とも言える配色生成ツールです。\nスペースキーを押すだけで次々にカラーパレットを生成でき、直感的に色探しができます。\n操作が非常に軽快で、「まず大量に色案を見たい」というときに便利です。配色保存や書き出し機能も充実しています。',
    url: 'https://coolors.co/?home'
  },
  {
    id: 'colordic',         // ★追加
    category: 'color',
    name: '原色大辞典',
    addedAt: '2026-08-01',
    img: 'img/colordic.webp',
    desc: '日本語の色名を豊富に掲載している、色辞典サイトです。\n「浅葱色」「蘇芳色」など和色も含めて調べられ、RGB・HEX値も確認できます。\n配色ツールというより、色そのものを知るための辞典に近く、世界観づくりやネーミングの参考にもなります。',
    url: 'https://www.colordic.org/'
  },
  {
    id: 'adobecolor',       // ★追加
    category: 'color',
    name: 'Adobe Color',
    addedAt: '2026-08-01',
    img: 'img/adobe.webp',
    desc: 'Adobe公式の高機能なカラーツールです。\nカラーホイールを使った配色設計ができるほか、他ユーザーの人気テーマやトレンド配色も閲覧できます。\n補色・類似色・トライアドなど理論ベースで色を考えやすく、デザイン初心者から実務レベルまで幅広く使われています。',
    url: 'https://color.adobe.com/ja/create/color-wheel'
  },
  {
    id: 'colorsupply',      // ★追加
    category: 'color',
    name: 'Color Supply',
    addedAt: '2026-08-01',
    img: 'img/colorsupply.webp',
    desc: 'ポップで視覚的に分かりやすい配色提案サイトです。\n「レトロ」「ネオン」「サイバー」など雰囲気ベースでパレットを探しやすく、インスピレーション用途に向いています。\nデザイン初心者でも感覚的に配色を選びやすい構成です。',
    url: 'https://colorsupplyyy.com/palettes'
  },
  {
    id: 'paletton',         // ★追加
    category: 'color',
    name: 'Paletton',
    addedAt: '2026-08-01',
    img: 'img/paletton.webp',
    desc: '色相環ベースで細かく配色を調整できる、本格派のカラーツールです。\n配色ルールを視覚的に確認しながら調整できるため、「なぜこの組み合わせになるのか」を理解しやすいのが特徴です。\nUIは少し専門的ですが、色彩設計を深く学びたい人に向いています。',
    url: 'https://paletton.com/#uid=15A0u0k9tbh6Sni8FhSg09flJ7R'
  },
  {
    id: 'realtimecolors',   // ★追加
    category: 'color',
    name: 'Realtime Colors',
    addedAt: '2026-08-01',
    img: 'img/realtimecolors.webp',
    desc: '配色とタイポグラフィを同時にリアルタイム確認できるデザインツールです。\n実際のUIサンプル上で色やフォントを切り替えながら確認できるため、「サイト全体としてどう見えるか」をイメージしやすいのが特徴です。\nデザインシステムの検討にも向いています。',
    url: 'https://www.realtimecolors.com/?colors=050315-fbfbfe-27ceaf-dcfff2-433bff&fonts=Inter-Interhttps://paletton.com/#uid=15A0u0k9tbh6Sni8FhSg09flJ7R'
  },
  {
    id: 'multicolr',        // ★追加
    category: 'color',
    name: 'Tineye Multicolr',
    addedAt: '2026-08-01',
    img: 'img/multicolr.webp',
    desc: '色を使って画像検索ができるユニークなビジュアル検索ツールです。\n指定した色の割合に近い画像を探せるため、「この配色の雰囲気に近い写真やデザインを見たい」というときに役立ちます。\n配色そのものというより、色から世界観を探すためのツールという印象です。',
    url: 'https://tineye.com/labs/multicolr#colors=1E87DB,E93227,EFF431;weights=65,20,15'
  },
  {
    id: 'randoma11y',       // ★追加
    category: 'color',
    name: 'RandomA11y',
    addedAt: '2026-08-01',
    img: 'img/randoma11y.webp',
    desc: 'アクセシビリティ基準を満たした配色をランダム生成してくれる、アクセシブルデザイン向けのカラーツールです。\nテキストと背景色のコントラスト比を自動でチェックしながら表示してくれるため、「見た目の良さ」と「読みやすさ」を両立した配色を探しやすいのが特徴です。\nシンプルなUIで直感的に使いやすく、Webアクセシビリティを意識したUIデザインやデザインシステム設計の参考にも向いています。',
    url: 'https://randoma11y.com/'
  },
  {
    id: 'gradient',       // ★追加
    category: 'color',
    name: 'カラーグラデーション生成',
    addedAt: '2026-08-01',
    img: 'img/color-gradient.webp',
    desc: '2つのカラーコード（HEX）から、滑らかなグラデーションカラーを自動生成できるカラーツールです。\nRGB・HSV・HSLの3つの色モデルに対応しており、色空間の違いによるグラデーションの変化を比較しながら確認できるのが特徴です。\n中間色の作成やUIデザイン、背景デザインの配色検討など、グラデーション設計の参考として役立つサイトです。',
    url: 'https://tools.tolog.info/tools/color-gradient-generator'
  },
  {
    id: 'uicolor',       // ★追加
    category: 'color',
    name: 'UI Color',
    addedAt: '2026-08-01',
    img: 'img/tailwind.webp',
    desc: 'メインカラーをもとに、Tailwind CSS向けのカラーパレットを自動生成できるカラーツールです。\n明度ごとのカラースケールをリアルタイムで作成できるほか、UIプレビューで実際の見え方を確認しながら調整できるのが特徴です。\nデザインシステムの構築やブランドカラーの展開、Webサイトやアプリの配色設計を効率的に行いたいときに役立つサイトです。',
    url: 'https://uicolors.app/generate/444441'
  },


// Icon
  {
    id: 'iconpit',          // ★追加
    category: 'icon',
    name: 'icon-pit',
    addedAt: '2026-08-01',
    img: 'img/icon-pit.webp',
    desc: '日本語で検索できる、国内向けのアイコン検索サイトです。\nUIアイコンやピクトグラムをカテゴリ別に探しやすく、日本語ベースで直感的に検索できるのが特徴です。\nデザイン初心者でも扱いやすく、プレゼン資料やWeb制作の素材探しにも便利です。',
    url: 'https://icon-pit.com/'
  },
  {
    id: 'nounproject',      // ★追加
    category: 'icon',
    name: 'Noun Project',
    addedAt: '2026-08-01',
    img: 'img/noun.webp',
    desc: '世界中のデザイナーが制作したアイコンを集めた、巨大なアイコンプラットフォームです。\n一般的なUIアイコンだけでなく、抽象概念や専門的なモチーフまで非常に幅広く揃っているのが特徴です。\n「この概念を視覚化したい」というときの検索性が高く、アイデア探しにも向いています。',
    url: 'https://thenounproject.com/'
  },
  {
    id: 'streamline',       // ★追加
    category: 'icon',
    name: 'streamline',
    addedAt: '2026-08-01',
    img: 'img/streamline.webp',
    desc: '非常に大量のアイコン・イラストを収録した、プロ向けデザイン素材サービスです。\nシンプル系から個性的なスタイルまで幅広く、統一感のあるデザイン素材をまとめて探せるのが特徴です。\nUIデザインだけでなく、プレゼン資料やブランディング用途にも使いやすい構成になっています。',
    url: 'https://www.streamlinehq.com/'
  },
  {
    id: 'materialsymbols',  // ★追加
    category: 'icon',
    name: 'Material Symbols & Icons',
    addedAt: '2026-08-01',
    img: 'img/google.webp',
    desc: 'Googleが提供する「Material Symbols / Material Icons」を閲覧・取得できるサイトです。\nAndroidやGoogle系サービスで使われる思想をベースにしており、機能的で視認性の高いアイコンが豊富です。\nバリエーションやカスタマイズ性も高く、UI設計向けに非常に実用的です。',
    url: 'https://fonts.google.com/icons'
  },
  {
    id: 'feather',
    category: 'icon',
    name: 'Feather',
    addedAt: '2026-08-01',
    img: 'img/feather.webp',
    desc: '軽やかでミニマルな線画アイコンを中心としたライブラリです。\n情報量を増やしすぎず、UIに自然に馴染むデザインが特徴で、現在のシンプル系Webデザインの定番の一つとも言えます。\nLucideなど後続ライブラリにも大きな影響を与えています。',
    url: 'https://feathericons.com/'
  },
  {
    id: 'nucleo', 
    category: 'icon',
    name: 'Nucleo UI Icons',
    addedAt: '2026-08-01',
    img: 'img/nucleo.webp',
    desc: 'UIデザイン向けに整理された、高品質なアイコンライブラリです。\n線・塗り・太さなどスタイルの統一感が強く、プロダクトデザインやアプリUI制作で使いやすい構成になっています。\n全体的に洗練された印象があり、デザインシステムとの相性も良いです。',
    url: 'https://nucleoapp.com/ui-icons'
  },
  {
    id: 'iconmonstr',
    category: 'icon',
    name: 'iconmonstr',
    addedAt: '2026-08-01',
    img: 'img/iconmonstr.webp',
    desc: 'シンプルで汎用性の高いモノクロアイコンを大量に配布しているサイトです。\n装飾を抑えた実務向けのデザインが多く、資料制作やWebサイト、UIデザインなど幅広く使いやすいのが特徴です。\n検索性も高く、「必要なアイコンをすぐ探したい」ときに便利です。',
    url: 'https://iconmonstr.com/'
  },
  {
    id: 'lucide',
    category: 'icon',
    name: 'Lucide',
    addedAt: '2026-08-01',
    img: 'img/lucide.webp',
    desc: 'Feather Iconsをベースに発展した、オープンソースのアイコンライブラリです。\nミニマルで軽量なデザインが特徴で、現在のUIデザインに馴染みやすいアイコンが豊富に揃っています。\nReact・Vueなど各種フレームワーク対応も充実しており、開発との相性が良いライブラリです。',
    url: 'https://lucide.dev/icons/'
  },
  {
    id: 'heroicons',
    category: 'icon',
    name: 'heroicons',
    addedAt: '2026-08-01',
    img: 'img/hero.webp',
    desc: 'Tailwind CSSの開発元が提供している、シンプルで実用性の高いSVGアイコンライブラリです。\n線の太さや形状が統一されており、モダンなWebサービスや管理画面との相性が非常に良いのが特徴です。\n特にReactやTailwind環境で使いやすく、実装向けのアイコンとして人気があります。',
    url: 'https://heroicons.com/'
  },
  {
    id: 'untitled',
    category: 'icon',
    name: 'Untitled UI',
    addedAt: '2026-08-01',
    img: 'img/untitled.webp',
    desc: '1,100種類以上の無料SVGアイコンをダウンロードできる、クリーンで一貫性のあるニュートラルなアイコンライブラリです。\nラインスタイルのアイコンを無制限の個人・商用プロジェクトでクレジット表記なしに利用でき、サイト上でSVGを直接コピーするか、Figma用の無料ライブラリとしてもダウンロード可能です。\nより多くのスタイルやアイコン数（PRO版では4色スタイル・4,600種類以上）を求める場合は有料プランも用意されています。',
    url: 'https://www.untitledui.com/free-icons'
  },


// UI
  {
    id: 'uidesigndict',     // ★追加
    category: 'ui',
    name: 'UI Design Dictinary',
    addedAt: '2026-08-01',
    img: 'img/ui-design.webp',
    desc: 'UIコンポーネントやデザインパターンを、実例付きで体系的に整理しているUIリファレンスサイトです。\nナビゲーション、フォーム、モーダル、オンボーディング、EC機能などをカテゴリ別に閲覧でき、「このUIの名前は何だろう？」を調べながら学べるのが特徴です。\nデザインギャラリーというよりUIパターン辞典に近く、UI設計やインタラクションデザインの基礎を整理したいときに役立つサイトです。',
    url: 'https://ui-design-dictionary.pages.dev/'
  },
  {
    id: 'cssstock',         // ★追加
    category: 'ui',
    name: 'CSS Stock',
    addedAt: '2026-08-01',
    img: 'img/css-stock.webp',
    desc: 'CSSで実装できるアニメーションやUI表現を、実際の動き付きでまとめているフロントエンド向けのリファレンスサイトです。\nhover、button、loading、background演出などをカテゴリ別に閲覧でき、「この動きどう作るんだろう？」をコード付きで確認できるのが特徴です。\nデザイン参考というより実装寄りの資料集に近く、インタラクションデザインやCSS表現の引き出しを増やしたいときに役立つサイトです。',
    url: 'https://pote-chil.com/css-stock/ja'
  },
  {
    id: 'collectui',         // ★追加
    category: 'ui',
    name: 'Collect UI',
    addedAt: '2026-08-01',
    img: 'img/collectui.webp',
    desc: 'UIコンポーネントや画面デザインを毎日収集・掲載している、UIデザイン特化のギャラリーサイトです。\nログイン画面、ダッシュボード、カードUI、フォーム、ナビゲーションなどをカテゴリ別に探すことができ、実践的なUIパターンの参考を集めやすいのが特徴です。\nDribbbleよりもUIに特化した構成になっており、アプリやWebサービスの画面設計、コンポーネント研究のインスピレーション収集に向いています。',
    url: 'https://collectui.com/'
  },
  {
    id: 'uiverse',         // ★追加
    category: 'ui',
    name: 'UNIVERSE',
    addedAt: '2026-08-01',
    img: 'img/uiverse.webp',
    desc: 'ボタン、チェックボックス、ローディング、トグルなど、CSSとHTMLで実装されたUIコンポーネントを投稿・共有できるコミュニティサイトです。\n実際に動くサンプルとコードをそのまま確認できるため、「この表現を自分のサイトに取り入れたい」というときにすぐ参考にできるのが特徴です。\n実務向けのシンプルなUIから遊び心のあるアニメーション表現まで幅広く揃っており、フロントエンド実装やインタラクションデザインのアイデア収集に役立ちます。',
    url: 'https://uiverse.io/elements'
  },
  {
    id: 'benry',         // ★追加
    category: 'ui',
    name: 'ベンリーUI',
    addedAt: '2026-08-01',
    img: 'img/benry.webp',
    desc: 'Webサイトやアプリで使われるUIコンポーネントを、実例ベースで整理・紹介しているリファレンスサイトです。\nボタン、フォーム、ナビゲーション、モーダルなどをカテゴリ別に閲覧でき、「このUIは他社サービスでどう表現されているか」を比較しながら学べるのが特徴です。\nデザインのアイデア収集だけでなく、実務でのUI設計やコンポーネント研究にも役立つサイトです。',
    url: 'https://benry.me/ui/'
  },
  {
    id: 'hover',         // ★追加
    category: 'ui',
    name: 'Hover.css',
    addedAt: '2026-08-01',
    img: 'img/hover.webp',
    desc: 'ボタンやリンク、画像などに適用できるホバーアニメーションを100種類以上収録した、CSSアニメーションライブラリです。\n実際の動きを一覧で確認しながらコードを利用できるため、「ホバー時にどんな反応をさせるか」のアイデア集として活用しやすいのが特徴です。\nシンプルな拡大縮小から下線アニメーション、背景変化、アイコン演出まで幅広く揃っており、インタラクションデザインやCSS表現の学習にも役立ちます。',
    url: 'https://ianlunn.github.io/Hover/'
  },
  {
    id: 'shadow',
    category: 'ui',
    name: 'CSS Box Shadow Examples',
    addedAt: '2026-08-01',
    img: 'img/shadow.webp',
    desc: 'ボックスシャドウのデザイン例を100種類以上掲載している、CSS表現のリファレンスサイトです。\n実際の見た目を確認しながらCSSコードをそのままコピーできるため、「この影どう作るの？」をすぐに解決できるのが特徴です。\nカードUIやボタン、モーダルなどの立体感や奥行き表現を研究したいときに役立ち、UIデザインの質感づくりの参考にもなります。',
    url: 'https://getcssscan.com/css-box-shadow-examples'
  },
    {
    id: 'webbento',
    category: 'ui',
    name: 'Web BENTO css',
    addedAt: '2026-08-01',
    img: 'img/webbento.webp',
    desc: 'ボタン・見出し・グラデーション・ローディングなどコピペで使えるHTML/CSSパーツを192種類以上、全16カテゴリ収録したWebパーツギャラリーで、商用利用OK・登録不要・すべて無料で提供されています。\nパーツはすべて画像を使わないピュアCSSで実装されており、クラス名にbnto-のプレフィックスが付くため既存サイトのスタイルと衝突しにくい設計で、Claude CodeやCursorのようなAIコーディングツールと組み合わせても使いやすくなっています。',
    url: 'https://amix-design.com/tl/web-bento/'
  },
    {
    id: 'uigallery',
    category: 'ui',
    name: 'UIデザインギャラリー',
    addedAt: '2026-08-03',
    img: 'img/uigallery.webp',
    desc: '洗練されたUIデザインを中心に掲載しているギャラリーサイトです。\n余白の使い方やタイポグラフィ、ビジュアル表現など、完成度の高いアプリUIが多く、特にモダンで落ち着いた雰囲気のデザイン参考として向いています。\n国内最大手を目指して更新中で、iOSやAndroid、Webなど複数プラットフォームのUIを体系的に閲覧・研究できるのが特徴です。',
    url: 'https://ui-zukan.com/gallery'
  },
    {
    id: 'uipocket',
    category: 'ui',
    name: 'UI Pocket',
    addedAt: '2026-08-03',
    img: 'img/uipocket.webp',
    desc: 'モバイルアプリのUIデザインを中心に掲載しているギャラリーサイトです。\niOSやAndroidの実際のアプリUIを、スクリーンショット単位で参考にできるのが特徴で、ナビゲーション・ボタン・モーダルなど各種パターンを実装レベルで研究しやすいのが特徴です。\nログイン後により多くのスクリーンショットが閲覧でき、実装向けのUIリファレンスとして活用できます。',
    url: 'https://www.ui-pocket.com/mobile'
  },




// Other
  {
    id: 'behance',          // ★追加
    category: 'other',
    name: 'Behance',
    addedAt: '2026-08-01',
    img: 'img/behance.webp',
    desc: 'Adobeが運営する、世界最大級のクリエイター向けポートフォリオプラットフォームです。\nWebデザイン、グラフィック、UI/UX、イラスト、映像など幅広い分野の作品が掲載されており、世界中のクリエイティブ事例を探すことができます。\n完成作品だけでなく、制作プロセスや見せ方まで含めて学べるため、デザイン研究やポートフォリオ制作の参考としても非常に人気があります。',
    url: 'https://www.behance.net/'
  },
  {
    id: 'bannerlibrary',    // ★追加
    category: 'other',
    name: 'BANNER LIBRARY',
    addedAt: '2026-08-01',
    img: 'img/banner.webp',
    desc: 'バナー広告やSNSクリエイティブを中心に掲載している、国内向けのデザインギャラリーサイトです。\n「かわいい」「高級感」「ポップ」などテイスト別の分類が細かく、目的に合ったデザインを探しやすいのが特徴です。\n特に実務寄りの広告デザインが豊富で、バナー制作やキャンペーンビジュアルの参考探しに向いています。',
    url: 'https://design-library.jp/page/2'
  },
  {
    id: 'dribbble',         // ★追加
    category: 'other',
    name: 'Dribbble',
    addedAt: '2026-08-01',
    img: 'img/dribbble.webp',
    desc: '世界中のデザイナーが作品を投稿している、代表的なデザインコミュニティ兼ポートフォリオサイトです。\nUIデザイン、イラスト、ロゴ、アニメーションなど幅広い作品が掲載されており、特に見せ方の強いビジュアル表現を探したいときに参考になります。\n一方で、実装や情報設計よりも「第一印象の強さ」やビジュアル重視の作品も多く、インスピレーション収集やトレンド観察に向いているサイトとしてよく使われています。',
    url: 'https://dribbble.com/'
  },
  {
    id: 'flyerarchive',     // ★追加
    category: 'other',
    name: 'FLYER ARCHIVE JP',
    addedAt: '2026-08-01',
    img: 'img/flyer.webp',
    desc: 'フライヤーやチラシに特化した、国内でも珍しいグラフィックデザインのアーカイブサイトです。\n映画、音楽、演劇、美術展などの印刷物を年代・色・テイスト別に整理して閲覧でき、紙媒体ならではの表現を研究するのに向いています。\n特に1990〜2000年代のカルチャー色の強いデザインも多く、Webデザインとは違った"紙の熱量"を感じられる参考サイトです。',
    url: 'https://flyer-jp.com/'
  },
  {
    id: 'kyonoflyer',       // ★追加
    category: 'other',
    name: '今日のフライヤー',
    addedAt: '2026-08-01',
    img: 'img/abstract.webp',
    desc: '日々制作されるフライヤーデザインを記録・紹介している、フライヤー専門のギャラリーサイトです。\n単なる広告物ではなく、「文化や時代を映すデザイン」としてフライヤーを扱っているのが特徴で、アート性の高い作品が多く掲載されています。\nタイポグラフィやレイアウト、印刷物ならではの空気感を学びたいときに参考になるサイトです。',
    url: 'https://abstract.jp/flyer/'
  },
  {
    id: 'brandarchive',
    category: 'other',
    name: 'Brand Archive',
    addedAt: '2026-08-01',
    img: 'img/brandarchive.webp',
    desc: '世界中のブランドデザインやロゴ、ビジュアルアイデンティティをアーカイブしているリサーチ向けサイトです。\nロゴだけでなく、カラー・タイポグラフィ・パッケージ・ガイドラインなども整理されており、ブランド全体の設計思想を分析しやすいのが特徴です。\nPinterestより整理性が高く、デザインブログより検索しやすい構成を目指して作られており、ブランディング研究やリファレンス収集に向いています。',
    url: 'https://brandarchive.xyz/'
  },
  {
    id: 'deck',
    category: 'other',
    name: 'Deck.gallery',
    addedAt: '2026-08-03',
    img: 'img/deck.webp',
    desc: 'プレゼンテーション資料のデザインに特化したキュレーションギャラリーサイトです。\nKeynote、PowerPoint、Google Slides など、実装レベルで参考になる美しくデザインされたデッキが週ごとに更新されており、スライド構成やビジュアル表現を研究するのに向いています。\n企業プレゼンやピッチデック、カンファレンス資料など、実務的で完成度の高い事例が豊富に揃っているのが特徴です。',
    url: 'https://www.deck.gallery/'
  },
  {
    id: 'unblast',
    category: 'other',
    name: 'Unblast',
    addedAt: '2026-08-03',
    img: 'img/unblast.webp',
    desc: '高品質なデザイン素材を厳選して配布しているアセットライブラリです。\nモックアップ、フォント、テンプレート、テクスチャ、アイコンなど、デザイン実務で日常的に必要となる素材が揃っており、すぐに使える状態で提供されているのが特徴です。\nトレンドを反映した新しい素材が定期的に追加されるため、最新のデザイン表現を参考にしたいときにも重宝します。',
    url: 'https://unblast.com/'
  },
  {
    id: 'logggos',
    category: 'other',
    name: 'Logggos.club',
    addedAt: '2026-08-03',
    img: 'img/logggos.webp',
    desc: '世界中のよく設計されたロゴを業種・テーマ・タイポグラフィ・ブランドカラーで分類して掲載しているロゴギャラリーサイトです。\nケーススタディなど設計背景も含めて学べるため、ロゴ制作やブランディングの参考として活用できます。\n週ごとのメール購読機能があり、定期的にデザインインスピレーションを受け取ることも可能です。',
    url: 'https://www.logggos.club/'
  },
  {
    id: 'anothergraphic',
    category: 'other',
    name: 'Another Graphic',
    addedAt: '2026-08-03',
    img: 'img/anothergraphic.webp',
    desc: 'タイポグラフィを中心としたグラフィックデザイン作品のアーカイブサイトです。\n世界中のデザイナーやスタジオによる、ポスター・エディトリアルデザイン・アイデンティティなど、文字表現に焦点を当てた高品質なデザイン事例を掲載しており、年代・国・色・表現形式で検索・閲覧できるのが特徴です。\n日々更新される最新のデザイン作品を通じて、グラフィックデザインのトレンドと表現技法を研究できます。',
    url: 'https://anothergraphic.org/'
  },
  
]


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
            data-name="${site.name}"
            data-img="${site.img}"
            data-desc="${site.desc}"
            data-url="${site.url}">
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