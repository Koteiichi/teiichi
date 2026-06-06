import { UserProfile, Project, Experience, StrengthCard } from "./types";

export interface UITranslations {
  activeMission: string;
  localTime: string;
  works: string;
  philosophy: string;
  experience: string;
  bio: string;
  exploreCaseStudies: string;
  customizerTitle: string;
  systemModules: string;
  curatedSelectWork: string;
  curatedVentures: string;
  beliefsTitle: string;
  beliefsSubtitle: string;
  strengthTitle: string;
  aboutMeTitle: string;
  aboutMeSubtitle: string;
  milestonesTitle: string;
  milestonesSubtitle: string;
  timelineLabel: string;
  contactTitle: string;
  contactSubtitle: string;
  contactParagraph: string;
  fieldName: string;
  fieldEmail: string;
  fieldMessage: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  btnSending: string;
  btnSent: string;
  btnSend: string;
  footerRights: string;
  footerBuilt: string;
  sourceCode: string;
  close: string;
  accentColor: string;
  theme: string;
  vectorEngine: string;
  tailoredTemplate: string;
  offlinePersistence: string;
  resumeLabel: string;
  emailLabel: string;
  resetConfirm: string;
  resumeAlert: string;
  messageSuccess: string;
}

export const uiTranslations: Record<"en" | "ja" | "zh", UITranslations> = {
  en: {
    activeMission: "Active Mission",
    localTime: "Local Time:",
    works: "Works",
    philosophy: "Philosophy",
    experience: "Experience",
    bio: "Bio",
    exploreCaseStudies: "Explore Case Studies",
    customizerTitle: "Customize Content",
    systemModules: "System modules",
    curatedSelectWork: "Curated Select Work",
    curatedVentures: "01 / Curated Ventures",
    beliefsTitle: "Personal Beliefs",
    beliefsSubtitle: "02 / Design Axioms",
    strengthTitle: "Core Strengths",
    aboutMeTitle: "The Craft",
    aboutMeSubtitle: "03 / Intentional Depth",
    milestonesTitle: "Professional Path",
    milestonesSubtitle: "04 / Career Milestones",
    timelineLabel: "Timeline / Sequence",
    contactTitle: "Initiate Dialogue",
    contactSubtitle: "05 / Dispatch Center",
    contactParagraph: "Have an ambition, design system puzzle, or scalable application that needs spatial and interaction clarity? Send a transmission.",
    fieldName: "Name / Call Sign",
    fieldEmail: "Secure Email",
    fieldMessage: "Message / Transmission Description",
    placeholderName: "E.g., Captain Jean-Luc Picard",
    placeholderEmail: "your-handle@secure.domain",
    placeholderMessage: "Detail your vision, context, and structural bounds...",
    btnSending: "Broadcasting...",
    btnSent: "Transmission Received",
    btnSend: "Launch Transmission",
    footerRights: "All design & typography specifications reserved.",
    footerBuilt: "Built in high contrast. Engineered in React, TypeScript and Starfield atmosphere.",
    sourceCode: "Open-source source-code preserved with pride.",
    close: "Close",
    accentColor: "Accent Color",
    theme: "View Atmosphere",
    vectorEngine: "Vector Engine",
    tailoredTemplate: "Tailored after ramybaiche minimalist portfolio aesthetic",
    offlinePersistence: "Offline Persistence Engine Active",
    resumeLabel: "Resume PDF",
    emailLabel: "Email Channel",
    resetConfirm: "Are you sure you want to reset all modifications for the current language to defaults?",
    resumeAlert: "Template placeholder. You can modify this link via the live Customizer console.",
    messageSuccess: "Message queued! Thanks for reaching out.",
  },
  ja: {
    activeMission: "アクティブミッション",
    localTime: "ローカル時間:",
    works: "実績",
    philosophy: "フィロソフィー",
    experience: "略歴",
    bio: "詳細",
    exploreCaseStudies: "ケーススタディを探索する",
    customizerTitle: "コンテンツを編集",
    systemModules: "個のシステムモジュール",
    curatedSelectWork: "厳選された実績",
    curatedVentures: "01 / 実績コレクション",
    beliefsTitle: "デザインの指針",
    beliefsSubtitle: "02 / 制作理念と原則",
    strengthTitle: "コアバリュー",
    aboutMeTitle: "クラフトの探究",
    aboutMeSubtitle: "03 / 意図的な深みと細部",
    milestonesTitle: "プロフェッショナルな歩み",
    milestonesSubtitle: "04 / キャリアの軌跡とマイルストーン",
    timelineLabel: "時系列 / 年表",
    contactTitle: "メッセージを送信",
    contactSubtitle: "05 / 連絡フォーム",
    contactParagraph: "壮大なビジョン、デザインシステムの課題、または空間と相互作用の明快さを必要する拡張可能なアプリケーションはありますか？送信してください。",
    fieldName: "お名前 / 呼称",
    fieldEmail: "ご連絡先メールアドレス",
    fieldMessage: "メッセージ / 伝達内容",
    placeholderName: "例：ピカード船長",
    placeholderEmail: "your-handle@secure.domain",
    placeholderMessage: "プロジェクトの概要、背景、設計の限界について詳しく記載してください...",
    btnSending: "発信中...",
    btnSent: "送信完了",
    btnSend: "メッセージを送信する",
    footerRights: "すべてのデザインおよびタイポグラフィの仕様を保持します。",
    footerBuilt: "高輝度ハイコントラスト仕様。React、TypeScript、星空の宇宙背景で設計。",
    sourceCode: "ソースコードはオープンに保存されています。",
    close: "閉じる",
    accentColor: "アクセントカラー",
    theme: "ビュー背景モード",
    vectorEngine: "ベクトル描画エンジン",
    tailoredTemplate: "ramybaicheのミニマルポートフォリオの美学を継承",
    offlinePersistence: "オフラインデータ同期エンジン 起動中",
    resumeLabel: "履歴書 PDF",
    emailLabel: "メール送信",
    resetConfirm: "現在の言語におけるすべての編集内容をデフォルト値にリセットしてもよろしいですか？",
    resumeAlert: "テンプレートのプレースホルダーです。左下の編集パネルからこのリンクをカスタマイズできます。",
    messageSuccess: "送信が完了しました。ご連絡ありがとうございます。",
  },
  zh: {
    activeMission: "在线协作中",
    localTime: "本地时间：",
    works: "精选案例",
    philosophy: "设计信条",
    experience: "职业履历",
    bio: "个人自述",
    exploreCaseStudies: "探索精选方案",
    customizerTitle: "客制化内容面板",
    systemModules: "个精选系统模块",
    curatedSelectWork: "策划精选作品",
    curatedVentures: "01 / 经典案例库",
    beliefsTitle: "个人设计哲理",
    beliefsSubtitle: "02 / 设计基本法则",
    strengthTitle: "四大核心战力",
    aboutMeTitle: "手艺人的修养",
    aboutMeSubtitle: "03 / 严谨的空间与微动效",
    milestonesTitle: "职业里程碑",
    milestonesSubtitle: "04 / 岁月年表与履历",
    timelineLabel: "时间轴秩序",
    contactTitle: "发起学术或项目对话",
    contactSubtitle: "05 / 信息投递站",
    contactParagraph: "您是否有个宏大的产品愿景、亟待梳理的设计系统乱局，或是一个极其需要优雅物理交互和流畅微动画的数字化体验？欢迎随时来信。",
    fieldName: "您的称呼 / 信号源",
    fieldEmail: "您的电子邮箱",
    fieldMessage: "来信摘要 / 合作或诉求描述",
    placeholderName: "例如：让-吕克·皮卡尔 船长",
    placeholderEmail: "your-handle@secure.domain",
    placeholderMessage: "写下您的宏大构想、产品所处阶段，以及需要我突破的物理边界...",
    btnSending: "光速载入传输中...",
    btnSent: "无线信号成功投递",
    btnSend: "发射信号包",
    footerRights: "保留所有的设计细节、排版与视觉专利体系。",
    footerBuilt: "符合高对比度无障碍访问。基于 React、TypeScript 与密集星空宇宙背景引擎。",
    sourceCode: "系统开源代码仓，以此奉献给开源业界。",
    close: "关闭",
    accentColor: "品牌色调",
    theme: "物理视界背景",
    vectorEngine: "星宿矢量引擎",
    tailoredTemplate: "设计风格汲取自 ramybaiche 高雅极简数字美学",
    offlinePersistence: "本地轻量持久化引擎保持激活状态",
    resumeLabel: "履历简历 PDF",
    emailLabel: "来信信道",
    resetConfirm: "您确定要重置当前语言的所有客制化内容至默认预设吗？",
    resumeAlert: "简历链接模板。您可以在左下角的客制化面板中修改这个链接。",
    messageSuccess: "信息已成功载入队列！感谢您的联络。",
  }
};

// Localized versions of profiles
export const profileTranslations: Record<"en" | "ja" | "zh", UserProfile> = {
  en: {
    name: "GU DINGYI",
    nativeName: "Born in 2002 · Capricorn · ENFJ",
    nativeLanguage: "English",
    title: "Product Designer",
    bio: "With a strong interest in digital technology and media expression, I created diverse art projects throughout four years of university. I have developed hybrid methods that combine photography, woodworking, artificial intelligence, visual effects, and programming. Currently, I focus on the artistry hidden in “technical imperfections,” exploring new possibilities of visual expression inherent to techno-media itself.",
    location: "Algiers, Algeria",
    timezone: "Africa/Algiers",
    email: "hello@baicheramy.com",
    resumeUrl: "#",
    githubUrl: "https://github.com/baicheramy",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    accentColor: "#D4AF37",
    theme: "dark",
    aboutParagraphs: [
      "I am a digital product designer with a deep love for systems, code, and high-fidelity aesthetics. My journey started at the junction of design and engineering, where I realized layout shouldn't just look pretty — it must behave logically.",
      "Currently, I focus on building scalable design systems, shipping SaaS platforms, and crafting interactive applications that balance rigorous information hierarchy with playful motion. I believe a great experience lies in micro-details: typography tracking, spring animations, and spatial consistency.",
      "Outside of pushing pixels, you can find me reading architectural design theories, exploring minimal art, or compiling front-end micro-interactions in React and Vite."
    ]
  },
  ja: {
    name: "顧 丁一(コ テイイチ)",
    nativeName: "2002年生まれ／山羊座／ENFJ",
    nativeLanguage: "日本語版",
    title: "プロダクトデザイナー",
    bio: "デジタル技術とメディア表現に強い関心があり、大学4年間で多様なタイプのア一ト作品を制作してきた。撮影、木工、人工知能、Visual Effects、プログラミングなどを組み合わせた表現手法を習得している。現在は「技術的欠陥」に潜む芸術性に注目し、テクノロジーメディアそのものが持つ視覚表現の新たな可能性を探求している。",
    location: "アルジェリア、アルジェ",
    timezone: "Africa/Algiers",
    email: "hello@baicheramy.com",
    resumeUrl: "#",
    githubUrl: "https://github.com/baicheramy",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    accentColor: "#D4AF37",
    theme: "dark",
    aboutParagraphs: [
      "私は、一貫したシステム、構築コード、そして真に美しいビジュアルを愛してやまないデジタルプロダクトデザイナーです。私の旅はデザインとエンジニアリングの交差点から始まり、レイアウトは単に美しく見えるだけでなく、論理的に振る舞わなければならないという確信を得ました。",
      "現在は、拡張性の高いデザインシステムの構築、SaaSプラットフォームの開発、厳格な情報階層と遊び心のあるモーションを両立させたインタラクティブなアプリ制作に焦点を当てています。優れたユーザー体験は、フォント調整、スプリングアニメーション、空間の一貫性といった細部に宿ると信じています。",
      "ピクセルアート以外では、建築デザインの理論書を読み、ミニマルアートを探求し、ReactやViteでフロントエンドの細かなインタラクション（マイクロインタラクション）を構築しています。"
    ]
  },
  zh: {
    name: "顾 丁一",
    nativeName: "02年 魔羯座 ENFJ",
    nativeLanguage: "中文版",
    title: "高阶数字产品设计师 // 独立开发者",
    bio: "我对数字技术与媒体表达有着强烈兴趣，在大学四年间创作了多种类型的艺术作品，并习得将摄影、木工、人工智能、视觉特效（VFX）与编程等媒介融合的表达方法。如今我将目光投向隐藏在「技术性缺陷」中的艺术性，探索技术媒介本身所蕴含的全新视觉表达可能。",
    location: "阿尔及利亚，阿尔及尔",
    timezone: "Africa/Algiers",
    email: "hello@baicheramy.com",
    resumeUrl: "#",
    githubUrl: "https://github.com/baicheramy",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    accentColor: "#D4AF37",
    theme: "dark",
    aboutParagraphs: [
      "我是一名深爱着系统机制、代码和高保真美学的数字化产品设计师。我的设计篇章启程于设计与工程的交汇处，这让我早早意识到——布局不应只是外表光鲜，它更必须在底层逻辑上自洽并运转。",
      "当前，我主要致力于构建可扩展的设计系统、主导高品质 SaaS 平台的研发，以及打造兼具严谨信息层级与灵动交互动画的应用程序。我始终深信，极致的内容体验隐于微末：字距微调、阻尼回弹，以及空间设计的连贯一致性。",
      "日常的像素修行之外，你常能看到我品读建筑设计理论、探索极简艺术画卷，亦或是在 React 与 Vite 的沙盒中编译前端的微弱交互细节。"
    ]
  }
};

// Localized versions of projects
export const projectsTranslations: Record<"en" | "ja" | "zh", Project[]> = {
  en: [
    {
      id: "project-1",
      title: "Emplorium",
      subtitle: "Hiring Command Center",
      category: "Fintech & HRTech",
      year: "2024",
      tags: ["B2B SaaS", "Design System", "0-1 Product", "Command Bar"],
      description: "Designed an all-in-one talent acquisition command center, streamlining candidate assessment, pipeline orchestration, and real-time interviewer notes.",
      visualType: "dashboard",
      visualColor: "#8B5CF6",
      projectUrl: "#"
    },
    {
      id: "project-2",
      title: "EleeN",
      subtitle: "Data-Inspired Smart Living",
      category: "IoT & Smart Tech",
      year: "2023",
      tags: ["Consumer App", "Mobile & Web", "Data Visualization", "Telemetry"],
      description: "Structured the dashboard and interaction architecture for smart indoor sensor monitors, transforming environmental micro-telemetry into intuitive, daily home diagnostics.",
      visualType: "data-flow",
      visualColor: "#10B981",
      projectUrl: "#"
    },
    {
      id: "project-3",
      title: "iewa",
      subtitle: "Context-Aware Knowledge Base",
      category: "AI & Productivity",
      year: "2022",
      tags: ["Knowledge Graph", "Interaction Design", "Canvas UI", "Connected Nodes"],
      description: "An intuitive collaborative document hub with nested context layers, allowing researchers to visualize, cluster, and traverse rich knowledge graphs effortlessly.",
      visualType: "mesh",
      visualColor: "#F59E0B",
      projectUrl: "#"
    }
  ],
  ja: [
    {
      id: "project-1",
      title: "Emplorium",
      subtitle: "採用管理コマンドセンター",
      category: "フィンテック & 採用テック",
      year: "2024",
      tags: ["B2B SaaS", "デザインシステム", "0→1 プロダクト", "コマンドバー"],
      description: "候補者評価、パイプラインの調整、インタビュアーのリアルタイムメモ作成を合理化する、オールインワンの人材獲得コマンドセンターを設計しました。",
      visualType: "dashboard",
      visualColor: "#8B5CF6",
      projectUrl: "#"
    },
    {
      id: "project-2",
      title: "EleeN",
      subtitle: "データ駆動型スマートリビング",
      category: "IoT & スマート技術",
      year: "2023",
      tags: ["コンシューマー", "モバイル・Web", "データの可視化", "測定技術"],
      description: "スマート室内センサーモニターのダッシュボードとインタラクション構造を構築し、環境の微細な測定データを直感的で日常的な住宅の診断へと変換しました。",
      visualType: "data-flow",
      visualColor: "#10B981",
      projectUrl: "#"
    },
    {
      id: "project-3",
      title: "iewa",
      subtitle: "コンテキスト駆動型の知識ベース",
      category: "AI & 生産性",
      year: "2022",
      tags: ["ナレッジグラフ", "インタラクション設計", "キャンバスUI", "連携ノード"],
      description: "文脈を入れ子状に重ねて展開する革新的なドキュメント管理機能。研究者が膨大な知識グラフをスムーズに視覚化・クラスタリング・走査できるようにしました。",
      visualType: "mesh",
      visualColor: "#F59E0B",
      projectUrl: "#"
    }
  ],
  zh: [
    {
      id: "project-1",
      title: "Emplorium",
      subtitle: "招聘指挥控制塔",
      category: "金融与人才科技",
      year: "2024",
      tags: ["B2B SaaS", "系统架构", "0-1 核心产品", "全能命令面板"],
      description: "主笔规划了多合一的高价值招聘控制中枢，一机统筹候选人技能评级、简历漏斗编排，以及面试官之间秒级传递的实时协同笔记。",
      visualType: "dashboard",
      visualColor: "#8B5CF6",
      projectUrl: "#"
    },
    {
      id: "project-2",
      title: "EleeN",
      subtitle: "感官化智能家居诊断系统",
      category: "物联网与智慧人居",
      year: "2023",
      tags: ["移动与网页端", "智能硬件", "环境流计算", "数据遥感可视化"],
      description: "为新一代室内温湿度和甲醛感应硬件架构其交互和状态卡片面板，将环境微观遥测流数据无感重构为极为日常、轻便的多端仪表盘诊断。",
      visualType: "data-flow",
      visualColor: "#10B981",
      projectUrl: "#"
    },
    {
      id: "project-3",
      title: "iewa",
      subtitle: "情境洞悉式共读知识图谱",
      category: "人工智能与知识产能",
      year: "2022",
      tags: ["深层知识库", "自适应画布", "知识拓扑节点", "卡片反向引用"],
      description: "富有交互张力的研究文档管理网络。独家设计了层叠嵌套的折叠画布。帮助高阶科研人员跨越浩瀚文献，完成网络关系的聚合、过滤与直观穿梭。",
      visualType: "mesh",
      visualColor: "#F59E0B",
      projectUrl: "#"
    }
  ]
};

// Localized versions of experiences
export const experiencesTranslations: Record<"en" | "ja" | "zh", Experience[]> = {
  en: [
    {
      id: "exp-1",
      company: "Emplorium HQ",
      role: "Lead Product Designer",
      period: "2023 - Present",
      location: "Remote / Dubai",
      description: "Leading the end-to-end design strategy, product architecture, and drafting the modular corporate design systems from pitch decks to production-ready React layouts."
    },
    {
      id: "exp-2",
      company: "Algiers Design Bureau",
      role: "Senior Interaction Designer",
      period: "2021 - 2023",
      location: "Algiers, Algeria",
      description: "Spearheaded large-scale UI/UX overhaul of municipal and telecommunication systems, introducing fluid gesture-based animations and responsive widgets."
    },
    {
      id: "exp-3",
      company: "Freelance Consultancy",
      role: "Independent Digital Craftsman",
      period: "2019 - 2021",
      location: "Global",
      description: "Partnered with early-stage founders to map SaaS user journeys, design interactive pitch prototypes, and write clean tailwind css code for production landing pages."
    }
  ],
  ja: [
    {
      id: "exp-1",
      company: "Emplorium HQ",
      role: "リード・プロダクトデザイナー",
      period: "2023 - 現在",
      location: "リモート / ドバイ",
      description: "エンドツーエンドのデザイン戦略、プロダクトの基礎設計を指揮。企画書からすぐに開発に使えるReactコンポーネントまで、企業向けモジュールデザインシステムを構築。"
    },
    {
      id: "exp-2",
      company: "Algiers Design Bureau",
      role: "シニア・インタラクションデザイナー",
      period: "2021 - 2023",
      location: "アルジェ、アルジェリア",
      description: "地方自治体および通信キャリアの大規模なシステム刷新を統括。滑らかなジャスチャ駆動型アニメーションや高応答のウィジェット群を実装。"
    },
    {
      id: "exp-3",
      company: "Freelance Consultancy",
      role: "フリーランス・デジタルクラフトマン",
      period: "2019 - 2021",
      location: "グローバル / リモート",
      description: "創業初期のスタートアップと提携し、SaaS製品の体験マップを作成。インタラクティブなモックアップ制作から、美しいTailwind CSSによる実装コードの納品を手掛けました。"
    }
  ],
  zh: [
    {
      id: "exp-1",
      company: "Emplorium 总部",
      role: "首席产品设计师",
      period: "2023 - 至今",
      location: "远程办公 / 迪拜",
      description: "领衔开展产品体验战略，定义高阶用户体验模型与界面排布规律，并着手制定面向企业研发链的模块化 React 基础设计资产规范。"
    },
    {
      id: "exp-2",
      company: "阿尔及尔市政设计局",
      role: "高级交互设计师",
      period: "2021 - 2023",
      location: "阿尔及尔，阿尔及利亚",
      description: "挂帅升级了地方重要智慧政务以及大型移动通信终端的操作层级设计，全面推行多维手势微型流动画与卡簧般迅捷的响应式小部件。"
    },
    {
      id: "exp-3",
      company: "独立自由顾问",
      role: "独立数字手艺人",
      period: "2019 - 2021",
      location: "全球跨国协作",
      description: "携手早期 SaaS 新星定义用户流。手脑并重，不仅提供高保真交互物理模拟原型，还帮助客户一行一行雕琢精湛、易部署的前端 Tailwind 代码。"
    }
  ]
};

// Localized versions of strengths
export const strengthsTranslations: Record<"en" | "ja" | "zh", StrengthCard[]> = {
  en: [
    {
      id: "strength-1",
      title: "From zero to one",
      subtitle: "Embracing radical product ambiguity",
      description: "Structuring logical directions and workflows where none exist. I specialize in synthesising complex, loosely-defined parameters into clear roadmap flows and highly interactive UI architectures.",
      iconName: "Sparkles"
    },
    {
      id: "strength-2",
      title: "Systems over screens",
      subtitle: "Thinking in languages, not mockups",
      description: "Designing extensive typography scales, responsive layout components, and token variables. I build unified languages that scale across web, mobile, and desktop so engineering teams ship features in record time.",
      iconName: "Layers"
    },
    {
      id: "strength-3",
      title: "Strategy meets craft",
      subtitle: "Meticulous design, business-aware",
      description: "Synthesizing product performance with pure visual refinement. I align technical bounds, user acquisition objectives, and flawless aesthetic details to ensure the final product hits business goals.",
      iconName: "Target"
    },
    {
      id: "strength-4",
      title: "Design speaks code",
      subtitle: "Narrowing the handoff gap entirely",
      description: "Bridging canvas layouts with browser capabilities. My high familiarity with CSS coordinates, React render cycles, and TypeScript structures allows me to commit directly to frontend repositories.",
      iconName: "Code"
    }
  ],
  ja: [
    {
      id: "strength-1",
      title: "零から一を生み出す力",
      subtitle: "不確実性を最大の推進力に変える",
      description: "何もない状態から論理的な方向性とワークフローを構築。混沌とした未定義の変数群を集約し、緻密で動きのあるUIに落とし込みます。",
      iconName: "Sparkles"
    },
    {
      id: "strength-2",
      title: "画面ではなくシステムを考える",
      subtitle: "単なるカンプではなく、共通言語を作る",
      description: "緻密なフォントスケール、レスポンシブなコンポーネント、トークン設計を行っています。Web、モバイル、デスクトップ共通の堅牢な言語を構築。開発チームのスピードを最大化させます。",
      iconName: "Layers"
    },
    {
      id: "strength-3",
      title: "戦略と調和するクラフト",
      subtitle: "ビジネス目標へ向かう、緻密な表現",
      description: "製品のパフォーマンスと完璧なビジュアルを高次元で融合。技術的な制約、新規ユーザーの獲得条件、細部のアートワークを考慮した着地を実行。",
      iconName: "Target"
    },
    {
      id: "strength-4",
      title: "コードで語るデザインシステム",
      subtitle: "デザイナーとデベロッパーの隙間をゼロに",
      description: "キャンバス上のデザインとブラウザの制限や特性をシームレス。CSS座標、React再レンダリング、TypeScriptの実装構造に熟達しており、直接リポジトリへコード貢献できます。",
      iconName: "Code"
    }
  ],
  zh: [
    {
      id: "strength-1",
      title: "从零至一极速探索",
      subtitle: "深陷剧烈模糊度依然行重若轻",
      description: "具备在彻底绝缘的前提下搭建精密流式信息通道的能力。我格外擅长将不加修饰、随意的各路运营和商业愿望转化为逻辑闭合的像素实体及顺滑的高阶交互结构。",
      iconName: "Sparkles"
    },
    {
      id: "strength-2",
      title: "系统意识远胜纯粹画纸",
      subtitle: "用长效语言而非单点截图解决争端",
      description: "深信复用性。熟练调配多语字梯阶级、栅格弹力骨架以及底层 Token。从而构建起跨网页、Pad 与桌面端的规范系统，给程序员最强大的敏捷后盾。",
      iconName: "Layers"
    },
    {
      id: "strength-3",
      title: "让设计手艺赋能商业蓝图",
      subtitle: "细节即生命，业务即归宿",
      description: "力图在最冷冰冰的数字上镀上最震撼的心跳美学。让前端性能瓶颈与完美色彩层级交好，将交互热力学、点击转化链紧紧缝合在一起，为企业长虹保驾护航。",
      iconName: "Target"
    },
    {
      id: "strength-4",
      title: "执笔设计，通晓编程",
      subtitle: "实现与工程师完全无割裂感交割",
      description: "打破思维次元壁。对 CSS 几何变换、React 状态重构、异步数据处理轻车熟路。这让我能够随手拉取远端代码并迅速纠正前端中微弱的抖动和动画毛刺。",
      iconName: "Code"
    }
  ]
};
