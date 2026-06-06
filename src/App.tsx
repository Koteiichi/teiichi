import React, { useState, useEffect, useMemo, useRef } from "react";
import { 
  Sparkles, Layers, Target, Code,
  ChevronDown, ChevronLeft, ChevronRight,
  Play, Image as ImageIcon,
  ArrowUpRight, Sun, Moon, Briefcase, Globe
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

import { UserProfile, Project, Experience, StrengthCard } from "./types";
import { 
  initialProfile, initialProjects, initialExperiences, initialStrengths 
} from "./initialData";
import { AestheticVector } from "./components/AestheticVector";
import { Starfield } from "./components/Starfield";
import {
  uiTranslations,
  profileTranslations,
  projectsTranslations,
  experiencesTranslations,
  strengthsTranslations
} from "./translations";

export default function App() {
  // Background grid parallax (slower than page scroll)
  const gridPatternRef = useRef<HTMLDivElement | null>(null);

  const avatarSrc = useMemo(
    () => new URL("./assets/profile/avatar.jpg", import.meta.url).href,
    []
  );
  const faceSrc = useMemo(
    () => new URL("./assets/profile/face.jpg", import.meta.url).href,
    []
  );

  const rednoteLogoSrc = useMemo(
    () => new URL("./assets/social/rednote.png", import.meta.url).href,
    []
  );
  const instagramLogoSrc = useMemo(
    () => new URL("./assets/social/instagram.png", import.meta.url).href,
    []
  );

  // 作品展示（先用内置占位图，后续你给每个作品多张图片时再替换这里的 images 数组）
  const works = useMemo(() => {
    const makePlaceholder = (title: string, index: number) => {
      const hue = (index * 37) % 360;
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="hsl(${hue}, 70%, 22%)"/>
              <stop offset="1" stop-color="hsl(${(hue + 60) % 360}, 70%, 10%)"/>
            </linearGradient>
            <radialGradient id="r" cx="50%" cy="40%" r="70%">
              <stop offset="0" stop-color="rgba(255,255,255,0.12)"/>
              <stop offset="1" stop-color="rgba(255,255,255,0)"/>
            </radialGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#g)"/>
          <rect width="1600" height="900" fill="url(#r)"/>
          <g fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1">
            <path d="M0 720 C 320 560, 640 820, 960 660 S 1280 520, 1600 680" />
            <path d="M0 240 C 360 120, 640 360, 980 220 S 1320 80, 1600 260" />
          </g>
          <g font-family="Inter, system-ui, -apple-system, Segoe UI, sans-serif" fill="rgba(255,255,255,0.92)">
            <text x="80" y="120" font-size="36" opacity="0.85">${title}</text>
            <text x="80" y="170" font-size="20" opacity="0.55">IMAGE ${(index + 1).toString().padStart(2, "0")} (placeholder)</text>
          </g>
        </svg>
      `.trim();
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    };

    const makeImages = (title: string) =>
      Array.from({ length: 5 }).map((_, i) => makePlaceholder(title, i));

    return [
      {
        id: "work-1",
        name: {
          ja: "光の中に隠れる。",
          zh: "潜藏于光之中。",
          en: "Hidden in the Light",
        } as const,
        // 作品1：使用你上传的图片（按顺序）
        images: [
          new URL("./assets/works/work1/01.png", import.meta.url).href,
          new URL("./assets/works/work1/02.png", import.meta.url).href,
          new URL("./assets/works/work1/03.png", import.meta.url).href,
          new URL("./assets/works/work1/04.png", import.meta.url).href,
          new URL("./assets/works/work1/05.png", import.meta.url).href,
          new URL("./assets/works/work1/06.png", import.meta.url).href,
        ],
        // 作品1：Vimeo 视频（通过 iframe 嵌入）
        videoSrc: "https://player.vimeo.com/video/1141765830",
        transition: "raster" as const,
        intro: {
          ja: "「光の中に隠れる」という作品は肉眼では観察できず、カメラを通してしか見えない電子スクリーンのフリッカー現象を用いた作品です。私はアンドロメダ銀河や宇宙波動原理文字にした特別な光栅画像を制作し、観覧者はカメラ越しに星系の運動や、スクリーン上に散在する宇宙波動原理の文字情報を読み取ることができる，まるで望遠鏡で星空に星を探し出すのようなことです。観覧者が宇宙波動原理を捉えた瞬間、作品の美しさを観察しているその行為自体が、この原理の体験であることに気付くのはこの作品最も魅力的なところと考えています。観覧者が、電子スクリーンできらめく星辰のような文字の美しさを体験できるように、私は変容する文字のスリットアニメを製作した。文字はカメラに映した星のような点光として瞬き、やがてその光点が再び文字へと形を成(な)します。観者には、輪郭が定まらない、揺らぎ続ける境界を体験してほしいと考えている。文字の内容はド·ブロイによる物質波仮説である。万物を内包する宇宙は波動の中に存在しているということに示した。づまり惑星から電子スクリーンの内部にある電荷もまで、すべでの物は同じ波動性を有しています。画面の背景として、私は特別な「宇宙銀河図」一枚も制作しました。中心に現在肉眼で最も観測し遠いアンドロメダ銀河を中心として各星団がカメラに通してゆっくり回転運動をしています。観測者は、カメラを通して「人類観測の極め」とも言えるアンドロメダ星雲の像を目にし、その中に揺らめいて瞬く文字によって示される「人類の知的極め」としての宇宙波動論が、ここに相互に顕現する。そしてそれらのことは目の前に展開していきます。",
          zh: "《光の中に隠れる》是一件利用电子屏幕“闪烁（flicker）现象”的作品：它无法用肉眼直接观察，只能通过相机镜头显现。我制作了将“仙女座星系”与“宇宙波动原理”文字编码进画面的特殊光栅图像，观者通过相机观看时，能够读取星系的运动，以及散落在屏幕上的宇宙波动原理文字信息——仿佛用望远镜在夜空中寻找星辰。当观者捕捉到宇宙波动原理的瞬间，会意识到：自己“正在观察作品之美”的这一行为本身，正是对该原理的体验——我认为这正是作品最具魅力之处。为了让观者体验电子屏幕上如星辰般闪烁的文字之美，我制作了会不断变形的文字狭缝（slit）动画：文字在相机画面中先以星光般的点光闪烁，随后这些光点又重新聚合成文字形态。我希望观者体验一种轮廓无法被固定、边界持续摇曳的状态。文字内容取自德布罗意（de Broglie）的物质波假说，指出：包容万物的宇宙存在于波动之中——也就是说，从行星到电子屏幕内部的电荷，所有事物都具有相同的波动性。作为画面背景，我还制作了一张特殊的《宇宙银河图》：以目前人类肉眼可观测距离极限之一的仙女座星系为中心，各星团在相机镜头中缓慢旋转。观者通过相机看到可称为“人类观测之极致”的仙女座星云影像，同时在其中由闪烁文字呈现的“人类智性之极致”——宇宙波动论——相互显现，并在眼前展开。",
          en: "\"Hiding in the Light\" is a work that uses the flicker phenomenon of electronic screens—something that cannot be perceived by the naked eye and can only be seen through a camera. I created special raster images that encode the Andromeda Galaxy and texts about a “cosmic wave principle.” When viewed through a camera, the audience can read the motion of star systems and the scattered textual information on the screen—like searching for stars in the night sky through a telescope. At the moment the viewer captures the wave principle, they may realize that the very act of observing the beauty of the work is itself an experience of that principle—what I consider the most compelling aspect of the piece. To let viewers experience the beauty of text shimmering like starlight on an electronic screen, I produced a transforming slit-animation of letters: the text first twinkles as point-like lights in the camera image, and those points gradually re-form into readable characters. I want the audience to experience boundaries that never settle—outlines that continue to fluctuate. The textual content draws on Louis de Broglie’s matter-wave hypothesis, suggesting that the universe encompassing all things exists within waves; in other words, everything—from planets to charges inside a screen—shares the same wave-like nature. As the background, I also created a special “cosmic galaxy map”: centered on the Andromeda Galaxy (one of the farthest objects observable by human vision), clusters slowly rotate when seen through a camera. Through the lens, the viewer encounters an image that could be called an “extreme of human observation,” while, within it, flickering letters reveal an “extreme of human intellect”—a cosmic wave theory—manifesting together and unfolding before their eyes.",
        } as const,
      },
      {
        id: "work-2",
        name: {
          ja: "咲いているテクスチャ。",
          zh: "正在盛开的贴图。",
          en: "Blooming Textures",
        } as const,
        // 作品2：使用你上传的图片（按顺序）
        images: [
          new URL("./assets/works/work2/01.png", import.meta.url).href,
          new URL("./assets/works/work2/02.png", import.meta.url).href,
          new URL("./assets/works/work2/03.png", import.meta.url).href,
          new URL("./assets/works/work2/04.png", import.meta.url).href,
          new URL("./assets/works/work2/05.png", import.meta.url).href,
          new URL("./assets/works/work2/06.png", import.meta.url).href,
          new URL("./assets/works/work2/07.png", import.meta.url).href,
          new URL("./assets/works/work2/08.png", import.meta.url).href,
          new URL("./assets/works/work2/09.png", import.meta.url).href,
        ],
        videoSrc: "https://player.vimeo.com/video/1141764499",
        transition: "slide" as const,
        intro: {
          ja: "この作品の名は「咲いているテクスチャ」です。技術欠陥に基づいて異なる時代のゲームテクスチャの独特な美を探求したいです。万華鏡に映し出されるテクスチャの模様をそれぞれの万華鏡の形に合わせて調整し、テクスチャ自体の美しさを最大限に引き出せるインスタレーションを制作しました。何故かというと万華鏡は、微細なものの美しさを捉えるのに非常に適しているからです。例えば鈍角三角形の万華鏡は、二つの中心点から外側に向かって広がる視覚効果があります。私はゲーム内で、鈍角三角形の万華鏡を介して地面を仰視する特異な視点を用いることで、模様を保持しつつ、ポリゴンエッジの形を万華鏡が捉えることが可能となり、輪郭が明確でエッジ感のある幾何学模様が生成されました。このように制作した約５つの万華鏡インスタレーションはこの作品の主体となります。",
          zh: "本作品名为《咲いているテクスチャ》。我希望基于“技术性缺陷”去探索不同时代游戏贴图所具有的独特美感。我将万花筒中映出的贴图纹样，分别依据不同万花筒的形状进行调校，从而制作出能够最大限度呈现贴图自身之美的装置作品。之所以选择万花筒，是因为它非常适合捕捉微小事物的美。例如，钝角三角形万花筒会产生从两个中心点向外扩张的视觉效果。在游戏中，我采用“通过钝角三角形万花筒仰视地面”的独特视点，使万花筒在保留纹样的同时也能捕捉到多边形边缘的形态，从而生成轮廓清晰、具有锋利边缘感的几何图案。以此方式制作的大约五组万花筒装置，构成了本作品的主体。",
          en: "This work is titled “Blooming Textures.” Grounded in the aesthetics of “technical imperfections,” I explore the distinctive beauty of game textures from different eras. I adjusted the texture patterns reflected in a kaleidoscope to fit the geometry of each kaleidoscope form, creating an installation that maximizes the inherent beauty of the textures themselves. I chose the kaleidoscope because it is exceptionally suited to capturing the beauty of minute details. For example, an obtuse-triangle kaleidoscope produces a visual effect that expands outward from two focal points. In the game environment, I adopted an unusual viewpoint—looking upward at the ground through an obtuse-triangle kaleidoscope—so that while preserving the patterns, the kaleidoscope could also capture polygon-edge shapes. This generates geometric motifs with crisp contours and pronounced, edge-like definition. Approximately five kaleidoscope installations created through this approach form the core of the work.",
        } as const,
      },
      {
        id: "work-3",
        name: {
          ja: "ずれの中で生成される像",
          zh: "偏差成像。",
          en: "Images Generated in Displacement",
        } as const,
        images: [
          new URL("./assets/works/work3/01.png", import.meta.url).href,
          new URL("./assets/works/work3/02.png", import.meta.url).href,
          new URL("./assets/works/work3/03.jpg", import.meta.url).href,
          new URL("./assets/works/work3/04.jpg", import.meta.url).href,
          new URL("./assets/works/work3/05.png", import.meta.url).href,
          new URL("./assets/works/work3/06.png", import.meta.url).href,
        ],
        videoSrc: "https://player.vimeo.com/video/1153973649",
        transition: "rotate" as const,
        intro: {
          ja: "ずれの中で生成される像そういう作品では、視覚体験と光学現象の関係を入り口として、「見ること」や「読むこと」がどのような条件で成立するのかを考えています。特に、本作品では偏光という光学現象に注目し、肉眼では直接見ることのできない情報を可視化しています。インスタレーションでは、1枚目の透明板に異なる角度を設定した偏光板を正方形のマトリクス状に配置しています。2枚目の透明板では、偏光の原理を偏光板によって分解し、さらに投影システムの前に自動で回転する偏光板を設置しています。そのため、スクリーン上の映像は常に変化し、マトリクスの中の像は現れたり消えたりを繰り返します。観者は、見えてくる情報を観察しながら組み合わせることで、偏光の原理を理解していきます。この作品の魅力は、新しい「読む」体験を通して、今まで見えなかった情報が見えてくる点にあります。観者は、見ることと読むことを行き来する中で、視覚が光と切り離されたものではなく、光の状態や変化に強く依存していることに気づきます。こうした体験を通して、「見る」という行為がどのように生まれているのかを実感してもらうことを目指しています。",
          zh: "《偏差成像》以视觉体验与光学现象的关系为入口，思考“看”与“读”是在怎样的条件下成立的。作品聚焦于“偏振”这一光学现象，将肉眼无法直接看到的信息可视化。在装置中，第一块透明板上以正方形矩阵的方式排列了设定不同角度的偏振片；第二块透明板则通过偏振片分解偏振原理，并在投影系统前设置可自动旋转的偏振片。因此，屏幕上的影像持续变化，矩阵中的像反复出现与消失。观者在观察不断显现的信息并加以组合的过程中，逐步理解偏振的原理。本作的魅力在于：通过一种新的“阅读”体验，让原本不可见的信息得以显现。观者在“看”与“读”之间往复时，会意识到视觉并非与光相分离，而是强烈依赖光的状态与变化。作品希望通过这样的体验，让观者切身感受到“看见”这一行为是如何生成的。",
          en: "\"Images Generated in Displacement\" approaches the relationship between visual experience and optical phenomena as an entry point, asking under what conditions “seeing” and “reading” become possible. In particular, the work focuses on polarization, visualizing information that cannot be directly perceived by the naked eye. In the installation, the first transparent panel arranges polarizing films with different angles into a square matrix. On the second transparent panel, the principle of polarization is decomposed through polarizers, and an automatically rotating polarizing film is placed in front of the projection system. As a result, the image on the screen is in constant flux, and the figures within the matrix repeatedly appear and disappear. By observing and assembling the emerging information, the viewer gradually comes to understand the principle of polarization. The work’s appeal lies in enabling previously unseen information to become visible through a new experience of “reading.” As viewers move back and forth between seeing and reading, they realize that vision is not separable from light, but is strongly dependent on the state and transformation of light. Through this experience, the work aims to make viewers feel how the act of “seeing” is produced.",
        } as const,
      },
    ] as const;
  }, []);

  const [workImageIndex, setWorkImageIndex] = useState<Record<string, number>>(() => ({
    "work-1": 0,
    "work-2": 0,
    "work-3": 0,
  }));

  const [workImageDir, setWorkImageDir] = useState<Record<string, number>>(() => ({
    "work-1": 1,
    "work-2": 1,
    "work-3": 1,
  }));

  const [workMediaMode, setWorkMediaMode] = useState<Record<string, "photo" | "video">>(() => ({
    "work-1": "photo",
    "work-2": "photo",
    "work-3": "photo",
  }));

  const [workIntroOpen, setWorkIntroOpen] = useState<Record<string, boolean>>(() => ({
    "work-1": false,
    "work-2": false,
    "work-3": false,
  }));

  // 图片放大预览（从原位置放大到遮罩层）
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    src: string | null;
    layoutId: string | null;
    alt: string;
  }>({ open: false, src: null, layoutId: null, alt: "" });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox({ open: false, src: null, layoutId: null, alt: "" });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // 头像/正脸照切换
  const [isFaceMode, setIsFaceMode] = useState(false);

  // 顶部时间显示（中国/日本/格林尼治）
  const [timeCN, setTimeCN] = useState("");
  const [timeJP, setTimeJP] = useState("");
  const [timeGMT, setTimeGMT] = useState("");

  useEffect(() => {
    const fmt = (tz: string) => {
      try {
        return new Intl.DateTimeFormat("en-GB", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
      } catch {
        return new Date().toLocaleTimeString();
      }
    };

    const tick = () => {
      setTimeCN(fmt("Asia/Shanghai"));
      setTimeJP(fmt("Asia/Tokyo"));
      setTimeGMT(fmt("UTC"));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const [workTransition, setWorkTransition] = useState<
    Record<string, { prevUrl: string | null; token: number }>
  >(() => ({
    "work-1": { prevUrl: null, token: 0 },
    "work-2": { prevUrl: null, token: 0 },
    "work-3": { prevUrl: null, token: 0 },
  }));

  const RASTER_DURATION_MS = 1100;
  const SLIDE_DURATION_MS = 520;
  const ROTATE_DURATION_MS = 980;

  const changeWorkImage = (
    workId: string,
    delta: number,
    total: number,
    currentUrl: string,
    transition: "raster" | "slide" | "rotate"
  ) => {
    setWorkImageDir((prev) => ({ ...prev, [workId]: delta >= 0 ? 1 : -1 }));

    // 仅作品1使用光栅覆盖动画
    if (transition === "raster") {
      setWorkTransition((prev) => ({
        ...prev,
        [workId]: { prevUrl: currentUrl, token: (prev[workId]?.token ?? 0) + 1 },
      }));
    }

    setWorkImageIndex((prev) => {
      const curr = prev[workId] ?? 0;
      const next = (curr + delta + total) % total;
      return { ...prev, [workId]: next };
    });

    const cleanupDelay =
      transition === "raster"
        ? RASTER_DURATION_MS
        : transition === "slide"
          ? SLIDE_DURATION_MS
          : ROTATE_DURATION_MS;

    window.setTimeout(() => {
      if (transition !== "raster") return;
      setWorkTransition((prev) => ({
        ...prev,
        [workId]: { prevUrl: null, token: prev[workId]?.token ?? 0 },
      }));
    }, cleanupDelay);
  };

  const setMediaMode = (workId: string, mode: "photo" | "video") => {
    setWorkMediaMode((prev) => ({ ...prev, [workId]: mode }));
  };

  // State for language selection (defaulting to Chinese "zh")
  const [language, setLanguage] = useState<"en" | "ja" | "zh">((): "en" | "ja" | "zh" => {
    try {
      const saved = localStorage.getItem("ramy_portfolio_language");
      if (saved === "en" || saved === "ja" || saved === "zh") return saved;
    } catch {}
    return "zh";
  });

  // 语言切换：全局淡出 → 切换内容 → 淡入（避免“直接跳变”）
  const [isLanguageTransitioning, setIsLanguageTransitioning] = useState(false);
  const languageTransitionTimersRef = useRef<number[]>([]);

  // 作品展示大标题（随语言切换）
  const worksSectionTitle = useMemo(() => {
    switch (language) {
      case "ja":
        return "作品展示";
      case "zh":
        return "作品展示";
      case "en":
      default:
        return "Works";
    }
  }, [language]);

  // 语言切换：只让关键文字本身做渐变/淡入淡出，不做整页遮罩
  const requestLanguageChange = (next: "en" | "ja" | "zh") => {
    if (next === language) return;

    languageTransitionTimersRef.current.forEach((t) => window.clearTimeout(t));
    languageTransitionTimersRef.current = [];

    setIsLanguageTransitioning(true);

    // 先淡出（当前语言），再切换语言，再淡入
    const t1 = window.setTimeout(() => setLanguage(next), 180);
    const t2 = window.setTimeout(() => setIsLanguageTransitioning(false), 360);
    languageTransitionTimersRef.current.push(t1, t2);
  };

  useEffect(() => {
    return () => {
      languageTransitionTimersRef.current.forEach((t) => window.clearTimeout(t));
      languageTransitionTimersRef.current = [];
    };
  }, []);

  // State to track which language box is being hovered to apply spatial pushing effect
  const [hoveredLang, setHoveredLang] = useState<"en" | "ja" | "zh" | null>(null);

  // Active translation set for layout components
  const activeUI = useMemo(() => uiTranslations[language], [language]);

  const statementLabel = useMemo(() => {
    switch (language) {
      case "ja":
        return { title: "ステートメント", open: "開く", close: "閉じる" };
      case "zh":
        return { title: "作品说明", open: "展开", close: "收起" };
      case "en":
      default:
        return { title: "Statement", open: "Open", close: "Close" };
    }
  }, [language]);

  // 兼容旧版本 localStorage：如果用户本地缓存仍是旧 bio，则自动迁移到新的多语言文案
  const legacyBioByLang: Record<"en" | "ja" | "zh", string> = useMemo(
    () => ({
      en: "Product Designer specializing in 0→1 product design, design systems, and crafting intuitive digital experiences. Based in Algeria, working globally.",
      ja: "0→1の新規プロダクト開発、デザインシステム設計、そして直感的なデジタル体験の構築を専門とするシニアプロダクトデザイナー。アルジェリアを起点に世界中のプロジェクトに参画。",
      zh: "专研 0→1 的新业务设计、企业级通用设计系统（Design System）及高保真物理级交互微动效。身居阿尔及利亚，服务世界各处先锋团队。",
    }),
    []
  );

  const legacyNativeByLang: Record<
    "en" | "ja" | "zh",
    { nativeName: string; nativeLanguage: string }
  > = useMemo(
    () => ({
      en: { nativeName: "رامي محمد الأمين بعيش", nativeLanguage: "العربية" },
      ja: { nativeName: "ラーミ・モハメド", nativeLanguage: "日本語版" },
      zh: { nativeName: "拉米·穆罕默德", nativeLanguage: "中文版" },
    }),
    []
  );

  const normalizeProfile = (raw: unknown, lang: "en" | "ja" | "zh"): UserProfile => {
    try {
      const p = raw as Partial<UserProfile> | null;
      if (!p || typeof p !== "object") return profileTranslations[lang];

      let changed = false;
      const next = { ...p } as UserProfile;

      // 如果 bio 仍是旧版本默认文案，则视为“未自定义过”，自动更新为新的默认文案
      if (typeof next.bio === "string" && next.bio === legacyBioByLang[lang]) {
        next.bio = profileTranslations[lang].bio;
        changed = true;
      }

      // 如果 nativeName/nativeLanguage 仍是旧版本默认值，也自动迁移
      if (
        typeof next.nativeName === "string" &&
        next.nativeName === legacyNativeByLang[lang].nativeName
      ) {
        next.nativeName = profileTranslations[lang].nativeName;
        changed = true;
      }
      if (
        typeof next.nativeLanguage === "string" &&
        next.nativeLanguage === legacyNativeByLang[lang].nativeLanguage
      ) {
        next.nativeLanguage = profileTranslations[lang].nativeLanguage;
        changed = true;
      }

      if (changed) {
        try {
          localStorage.setItem(`ramy_portfolio_profile_${lang}`, JSON.stringify(next));
        } catch {}
      }

      return next as UserProfile;
    } catch {
      return profileTranslations[lang];
    }
  };

  // Load settings from localStorage if they exist, otherwise fall back to initialData
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(`ramy_portfolio_profile_${language}`) || localStorage.getItem("ramy_portfolio_profile");
      return saved ? normalizeProfile(JSON.parse(saved), language) : profileTranslations[language];
    } catch {
      return profileTranslations[language];
    }
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(`ramy_portfolio_projects_${language}`) || localStorage.getItem("ramy_portfolio_projects");
      return saved ? JSON.parse(saved) : projectsTranslations[language];
    } catch {
      return projectsTranslations[language];
    }
  });

  const [experiences, setExperiences] = useState<Experience[]>(() => {
    try {
      const saved = localStorage.getItem(`ramy_portfolio_experiences_${language}`) || localStorage.getItem("ramy_portfolio_experiences");
      return saved ? JSON.parse(saved) : experiencesTranslations[language];
    } catch {
      return experiencesTranslations[language];
    }
  });

  const [strengths, setStrengths] = useState<StrengthCard[]>(() => {
    try {
      const saved = localStorage.getItem(`ramy_portfolio_strengths_${language}`) || localStorage.getItem("ramy_portfolio_strengths");
      return saved ? JSON.parse(saved) : strengthsTranslations[language];
    } catch {
      return strengthsTranslations[language];
    }
  });

  // Sync state whenever language switches to leverage multi-language independent editing and defaults
  useEffect(() => {
    try {
      localStorage.setItem("ramy_portfolio_language", language);
    } catch {}

    const savedProfile = localStorage.getItem(`ramy_portfolio_profile_${language}`);
    setProfile(savedProfile ? normalizeProfile(JSON.parse(savedProfile), language) : profileTranslations[language]);

    const savedProjects = localStorage.getItem(`ramy_portfolio_projects_${language}`);
    setProjects(savedProjects ? JSON.parse(savedProjects) : projectsTranslations[language]);

    const savedExperiences = localStorage.getItem(`ramy_portfolio_experiences_${language}`);
    setExperiences(savedExperiences ? JSON.parse(savedExperiences) : experiencesTranslations[language]);

    const savedStrengths = localStorage.getItem(`ramy_portfolio_strengths_${language}`);
    setStrengths(savedStrengths ? JSON.parse(savedStrengths) : strengthsTranslations[language]);
  }, [language]);

  // 背景网格随滚轮缓慢移动（带缓动、循环平铺，避免位移过大导致空白）
  useEffect(() => {
    const el = gridPatternRef.current;
    if (!el) return;

    let rafId = 0;
    let target = window.scrollY * 0.08;
    let current = target;
    const factor = 0.08; // 网格移动速度：比页面更慢
    const easing = 0.07; // 越小越“慢慢追上”
    const period = 40;   // 与 bg-[size:40px_40px] 对齐，循环滚动

    const onScroll = () => {
      target = window.scrollY * factor;
    };

    const tick = () => {
      current += (target - current) * easing;
      const y = ((current % period) + period) % period;
      el.style.backgroundPosition = `0px ${y}px`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);


  // State to toggle live customizer
  // States for contact formulation
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Clock dynamic calculations
  const [currentTimeStr, setCurrentTimeStr] = useState("");

  // Persist selections to local storage
  useEffect(() => {
    try {
      localStorage.setItem("ramy_portfolio_profile", JSON.stringify(profile));
      localStorage.setItem(`ramy_portfolio_profile_${language}`, JSON.stringify(profile));

      localStorage.setItem("ramy_portfolio_projects", JSON.stringify(projects));
      localStorage.setItem(`ramy_portfolio_projects_${language}`, JSON.stringify(projects));

      localStorage.setItem("ramy_portfolio_experiences", JSON.stringify(experiences));
      localStorage.setItem(`ramy_portfolio_experiences_${language}`, JSON.stringify(experiences));

      localStorage.setItem("ramy_portfolio_strengths", JSON.stringify(strengths));
      localStorage.setItem(`ramy_portfolio_strengths_${language}`, JSON.stringify(strengths));
    } catch (e) {
      console.warn("Storage write failed:", e);
    }
  }, [profile, projects, experiences, strengths, language]);

  // Sync clock to profile timezone
  useEffect(() => {
    const renderClock = () => {
      try {
        const fmt = new Intl.DateTimeFormat([], {
          timeZone: profile.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setCurrentTimeStr(fmt.format(new Date()));
      } catch (err) {
        // Safe standard local time fallback
        const standardHour = new Date().toLocaleTimeString();
        setCurrentTimeStr(standardHour);
      }
    };

    renderClock();
    const interval = setInterval(renderClock, 1000);
    return () => clearInterval(interval);
  }, [profile.timezone]);

  // (Customizer 面板已移除)

  // Form Submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      // Reset success visual feedback after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  // Maps custom color strings directly to inline styles securely
  const brandAccentStyle = useMemo(() => {
    return { color: profile.accentColor };
  }, [profile.accentColor]);

  const brandAccentBgStyle = useMemo(() => {
    return { backgroundColor: profile.accentColor };
  }, [profile.accentColor]);

  const brandAccentBorderStyle = useMemo(() => {
    return { borderColor: profile.accentColor };
  }, [profile.accentColor]);

  // Render proper icon component for Philosophy section
  const renderPhilosophyIcon = (iconName: string) => {
    const cssClass = "w-5 h-5 transition-transform duration-500 group-hover:scale-110";
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className={cssClass} style={brandAccentStyle} />;
      case "Layers":
        return <Layers className={cssClass} style={brandAccentStyle} />;
      case "Target":
        return <Target className={cssClass} style={brandAccentStyle} />;
      case "Code":
        return <Code className={cssClass} style={brandAccentStyle} />;
      default:
        return <Sparkles className={cssClass} style={brandAccentStyle} />;
    }
  };

  return (
    <LayoutGroup>
    <div 
      className={`min-h-screen font-sans transition-colors duration-700 ease-in-out relative selection:bg-neutral-800 selection:text-white ${
        profile.theme === "dark" 
          ? "bg-[#000000] text-neutral-100" 
          : "bg-[#FAF9F6] text-neutral-900"
      }`}
      id="main-app-container"
    >
      {/* Starfield Cosmic Universe background */}
      <Starfield theme={profile.theme} parallaxFactor={0.12} />

      {/* Background elegant grid coordinates & patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]" id="bg-visual-grid">
        <div
          ref={gridPatternRef}
          className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"
        />
      </div>

      {/* UI wrapper: 语言切换时整体淡出/淡入（背景不变） */}
      <motion.div
        animate={{ opacity: isLanguageTransitioning ? 0 : 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: isLanguageTransitioning ? "none" : "auto" }}
      >

      {/* TOP HEADER NAVIGATION (Pristine layout inspired by baicheramy) */}
      <header 
        className={`sticky top-0 z-30 transition-all duration-300 backdrop-blur-md ${
          profile.theme === "dark" 
            ? "border-b border-neutral-900/50 bg-[#0A0A0C]/80" 
            : "border-b border-neutral-200/50 bg-[#FAF9F6]/80"
        }`}
        id="site-header"
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" id="header-inner">
          
          {/* Top time display */}
          <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-500" id="logo-anchor">
            <span className="inline-flex items-center gap-2">
              <span
                className={`opacity-90 ${
                  profile.theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {language === "zh" ? "中国" : language === "ja" ? "中国" : "CN"}
              </span>
              <span className={`${profile.theme === "dark" ? "text-neutral-300" : "text-neutral-800"} tabular-nums`}>
                {timeCN}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className={`opacity-90 ${
                  profile.theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {language === "zh" ? "日本" : language === "ja" ? "日本" : "JP"}
              </span>
              <span className={`${profile.theme === "dark" ? "text-neutral-300" : "text-neutral-800"} tabular-nums`}>
                {timeJP}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className={`opacity-90 ${
                  profile.theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {language === "zh" ? "格林尼治" : language === "ja" ? "グリニッジ" : "GMT"}
              </span>
              <span className={`${profile.theme === "dark" ? "text-neutral-300" : "text-neutral-800"} tabular-nums`}>
                {timeGMT}
              </span>
            </span>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex items-center gap-4 sm:gap-6" id="header-nav">
            {works.map((w) => (
              <a
                key={w.id}
                href={`#${w.id}`}
                className={`text-xs font-mono transition-colors ${
                  profile.theme === "dark" ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                {w.name[language]}
              </a>
            ))}

            {/* Quick Dark/Light state toggle */}
            <button
              onClick={() => setProfile(prev => ({ ...prev, theme: prev.theme === "light" ? "dark" : "light" }))}
              className={`p-1.5 rounded-full border transition-all ${
                profile.theme === "dark" 
                  ? "border-neutral-850 hover:bg-neutral-900 text-amber-400" 
                  : "border-neutral-200 hover:bg-neutral-100 text-purple-600"
              }`}
              title="Toggle view atmosphere"
              id="btn-header-theme-toggle"
            >
              {profile.theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </nav>

        </div>
      </header>

      {/* CORE DISPLAY CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-24 md:space-y-40" id="main-content">
        
        {/* HERO HEADER SECTION */}
        <section className="space-y-8 relative" id="hero-display">
          
          <div className="space-y-4" id="hero-titles-wrap">
            {/* Meta indicator tag row */}
            <div className="flex items-center gap-2" id="hero-tag-row">
              <span className="h-px w-8 bg-neutral-500" />
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-500">
                {profile.title} • {profile.location.split(",")[0]}
              </span>
            </div>

            {/* Huge Name Layout: Roman Script & Native Calligraphic Alignment */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl tracking-tight font-extrabold leading-[1.05] flex flex-col justify-start items-start gap-3" id="hero-heading">
              <span className="text-neutral-400 font-light select-none text-2xl sm:text-4xl md:text-5xl font-mono block mb-1">
                {language === "zh" ? "您好，我是" : language === "ja" ? "こんにちは、私は" : "Salut, I am"}
              </span>
              
              {/* Massive Bold English Name */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`name-${language}`}
                  className={`text-transparent bg-clip-text bg-gradient-to-r font-sans tracking-tighter ${
                    profile.theme === "dark"
                      ? "from-neutral-200 via-white to-neutral-400"
                      : "from-neutral-900 via-neutral-700 to-neutral-500"
                  }`}
                  id="display-name-english"
                  initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  {profile.name}
                </motion.span>
              </AnimatePresence>

              {/* Native Script Calligraphy overlay ( respectful of native characters ) */}
              {profile.nativeName && (
                <span 
                  className={`text-2xl sm:text-4xl md:text-5xl font-arabic font-normal tracking-wide flex items-center gap-3 mt-1 select-all`}
                  dir="auto"
                  style={brandAccentStyle}
                  id="display-name-native"
                >
                  {profile.nativeName}
                  <span className="text-xs font-mono text-neutral-500 font-light lowercase">({profile.nativeLanguage})</span>
                </span>
              )}
            </h1>
          </div>

          {/* Interactive Language Switcher Rows below the title */}
          <div className="pt-2 pb-4" id="language-switcher-area">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative" id="lang-flex-alignment">
              {/* Minimal labels indicating localized switcher block */}
              <div className="flex items-center gap-2 select-none" id="lang-switcher-meta-tag">
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span
                  className={`text-xs sm:text-sm font-mono uppercase tracking-widest min-w-[200px] ${
                    profile.theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {language === "zh"
                    ? "请选择你喜欢的语言ovo"
                    : language === "ja"
                      ? "好きな言語を選んでね ovo"
                      : "Pick your preferred language ovo"}
                </span>
              </div>

              {/* The three magnetic interactive language card boxes */}
              <div className="flex flex-wrap items-center gap-3" id="lang-magnetic-strip" style={{ minHeight: "50px" }}>
                {[
                  { code: "en" as const, label: "English", native: "ENG", icon: "🇬🇧", num: "01" },
                  { code: "ja" as const, label: "日本語", native: "JPN", icon: "🇯🇵", num: "02" },
                  { code: "zh" as const, label: "简体中文", native: "CHN", icon: "🇨🇳", num: "03" }
                ].map((item) => {
                  const isHovered = hoveredLang === item.code;
                  const isSelected = language === item.code;

                  // Custom displacement algorithm to "push/nudge" neighboring cards on hover
                  let xOffset = 0;
                  let scaleVal = 1.0;

                  if (hoveredLang !== null) {
                    if (hoveredLang === item.code) {
                      scaleVal = 1.15; // Enlarge on hover
                      xOffset = 0;
                    } else {
                      scaleVal = 0.92; // Slightly scale down neglected ones
                      
                      if (hoveredLang === "en") {
                        if (item.code === "ja") xOffset = 18;  // Push right
                        if (item.code === "zh") xOffset = 32;  // Push further right
                      } else if (hoveredLang === "ja") {
                        if (item.code === "en") xOffset = -18; // Push left
                        if (item.code === "zh") xOffset = 18;  // Push right
                      } else if (hoveredLang === "zh") {
                        if (item.code === "en") xOffset = -32; // Push further left
                        if (item.code === "ja") xOffset = -18; // Push left
                      }
                    }
                  }

                  return (
                    <motion.button
                      key={item.code}
                      onMouseEnter={() => setHoveredLang(item.code)}
                      onMouseLeave={() => setHoveredLang(null)}
                      onClick={() => requestLanguageChange(item.code)}
                      animate={{
                        x: xOffset,
                        scale: scaleVal,
                        borderColor: isSelected 
                          ? profile.accentColor 
                          : isHovered 
                            ? "rgba(255, 255, 255, 0.45)" 
                            : profile.theme === "dark" 
                              ? "rgba(255, 255, 255, 0.12)" 
                              : "rgba(0, 0, 0, 0.12)",
                        backgroundColor: isSelected
                          ? profile.theme === "dark" 
                            ? "rgba(255, 255, 255, 0.08)" 
                            : "rgba(0, 0, 0, 0.05)"
                          : isHovered
                            ? profile.theme === "dark"
                              ? "rgba(255, 255, 255, 0.03)"
                              : "rgba(0, 0, 0, 0.02)"
                            : "transparent",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 22,
                      }}
                      className={`cursor-pointer px-4 py-2 border text-left font-mono rounded-xl relative overflow-hidden flex items-center gap-3.5 transition-shadow duration-300 ${
                        isSelected 
                          ? `shadow-[0_0_20px_rgba(255,255,255,0.06)] font-bold ${profile.theme === "dark" ? "text-white" : "text-neutral-900"}`
                          : `${profile.theme === "dark" ? "text-neutral-500 hover:text-neutral-300" : "text-neutral-600 hover:text-neutral-900"}`
                      }`}
                      style={{
                        minWidth: "125px",
                        borderColor: isSelected ? profile.accentColor : undefined,
                      }}
                      id={`lang-switcher-btn-${item.code}`}
                    >
                      {/* Active dashboard indicator light */}
                      <span className="relative flex h-2 w-2" id={`indicator-bead-${item.code}`}>
                        {isSelected && (
                          <span 
                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ backgroundColor: profile.accentColor }} 
                          />
                        )}
                        <span 
                          className="relative inline-flex rounded-full h-2 w-2 transition-colors duration-300"
                          style={{ 
                            backgroundColor: isSelected 
                              ? profile.accentColor 
                              : profile.theme === "dark" 
                                ? "rgba(255, 255, 255, 0.2)" 
                                : "rgba(0, 0, 0, 0.2)" 
                          }}
                        />
                      </span>

                      {/* Display names */}
                      <div className="flex flex-col select-none" id={`label-wrap-${item.code}`}>
                        <div className="flex items-center gap-1.5 leading-none">
                          <span
                            className={`text-[11px] font-sans font-bold tracking-tight uppercase ${
                              profile.theme === "dark" ? "text-white" : "text-neutral-900"
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className={`text-[10px] ${profile.theme === "dark" ? "text-white" : "text-neutral-900"}`}>
                            {item.icon}
                          </span>
                        </div>
                        <span className="text-[8px] text-neutral-500 font-mono tracking-wider pt-0.5 uppercase">
                          {item.native} // {item.num}
                        </span>
                      </div>

                      {/* Active underline bar */}
                      {isSelected && (
                        <motion.div 
                          layoutId="activeLangIndicatorBar"
                          className="absolute bottom-0 left-0 right-0 h-[3px]"
                          style={{ backgroundColor: profile.accentColor }}
                          id="active-lang-glow-bar"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Description biography paired beautifully with italic serif touches */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4" id="hero-meta-grid">
            <div className="col-span-1 md:col-span-7" id="hero-bio-block">
              <p
                className={`text-lg sm:text-2xl font-light leading-relaxed font-sans ${
                  profile.theme === "dark" ? "text-neutral-400" : "text-neutral-700"
                }`}
              >
                {profile.bio}
              </p>

              {/* 学历信息（随语言切换） */}
              <div className={`pt-5 text-sm sm:text-base leading-relaxed font-sans ${
                profile.theme === "dark" ? "text-neutral-400" : "text-neutral-700"
              }`}>
                {language === "zh" ? (
                  <div className="space-y-1.5">
                    <p>本科毕业于湖北大学艺术学院数字媒体艺术。</p>
                    <p>硕士目前就读于：日本京都艺术大学大学院艺术环境科・视频媒体内容领域・数字艺术。</p>
                  </div>
                ) : language === "ja" ? (
                  <div className="space-y-1.5">
                    <p>学士：湖北大学 芸術学院 デジタルメディアアート専攻。</p>
                    <p>修士：京都芸術大学大学院 芸術環境専攻・映像メディアコンテンツ領域・デジタルアート（在学中）。</p>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <p>B.A.: Digital Media Art, School of Art, Hubei University.</p>
                    <p>M.A. (current): Kyoto University of the Arts, Graduate School — Art Environment, Moving Image & Media Contents, Digital Art.</p>
                  </div>
                )}
              </div>

              {/* 性格（随语言切换，单开一段） */}
              <div
                className={`pt-5 text-sm sm:text-base leading-relaxed font-sans ${
                  profile.theme === "dark" ? "text-neutral-400" : "text-neutral-700"
                }`}
              >
                {language === "zh" ? (
                  <p>
                    性格积极开放，乐于与不同背景的人交流和合作。对新事物保持强烈的好奇心和研究热情，善于从观察、实验与实践中发现问题并进行深入思考。对待创作认真负责，能够持续推进项目并完成既定目标。
                  </p>
                ) : language === "ja" ? (
                  <p>
                    性格は前向きでオープンであり、異なる背景を持つ人々との交流や協働を楽しみます。新しい物事に対して強い好奇心と探究心を持ち、観察・実験・実践の中から課題を見つけて深く考察することが得意です。制作に対しては誠実に責任を持ち、プロジェクトを継続的に推進して目標を達成できます。
                  </p>
                ) : (
                  <p>
                    I have an open and proactive personality, and I enjoy communicating and collaborating with people from diverse backgrounds. I maintain strong curiosity and research enthusiasm toward new things, and I am skilled at identifying problems through observation, experimentation, and practice, then thinking deeply about them. I take creation seriously and responsibly, and I can continuously drive projects forward to achieve set goals.
                  </p>
                )}
              </div>

              {/* 邮箱链接（随语言切换显示说明文案） */}
              <div className="pt-5 flex flex-col gap-2 text-sm sm:text-base font-mono text-neutral-400">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="tracking-widest text-neutral-500">
                    {language === "zh" ? "邮箱" : language === "ja" ? "メール" : "Email"}
                  </span>
                  <a
                    href="mailto:dyniig@gmail.com"
                    className={`transition-colors underline underline-offset-4 decoration-neutral-600 ${
                      profile.theme === "dark" ? "text-neutral-200 hover:text-white" : "text-neutral-900 hover:text-black"
                    }`}
                  >
                    dyniig@gmail.com
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="tracking-widest text-neutral-500">
                    {language === "zh" ? "邮箱" : language === "ja" ? "メール" : "Email"}
                  </span>
                  <a
                    href="mailto:1248202360@qq.com"
                    className={`transition-colors underline underline-offset-4 decoration-neutral-600 ${
                      profile.theme === "dark" ? "text-neutral-200 hover:text-white" : "text-neutral-900 hover:text-black"
                    }`}
                  >
                    1248202360@qq.com
                  </a>
                  <span className="text-xs sm:text-sm text-neutral-500">
                    {language === "zh"
                      ? "（中国区域限定）"
                      : language === "ja"
                        ? "（中国地域限定）"
                        : "(China only)"}
                  </span>
                </div>
              </div>

              {/* 技能（随语言切换） */}
              <div
                className={`pt-5 text-sm sm:text-base leading-relaxed font-sans ${
                  profile.theme === "dark" ? "text-neutral-400" : "text-neutral-700"
                }`}
              >
                {language === "zh" ? (
                  <p>
                    技能：After Effects、TouchDesigner、Cinema4D、Blender、Premiere、DaVinci、Processing、Stable Diffusion 等各种 AI 工具应用精通。
                  </p>
                ) : language === "ja" ? (
                  <p>
                    スキル：After Effects、TouchDesigner、Cinema4D、Blender、Premiere、DaVinci、Processing、Stable Diffusion など各種AIツールの活用に精通。
                  </p>
                ) : (
                  <p>
                    Skills: After Effects, TouchDesigner, Cinema4D, Blender, Premiere, DaVinci, Processing, Stable Diffusion, and a wide range of AI creative tools.
                  </p>
                )}
              </div>
            </div>
            {/* 头像展示：放在自我介绍右侧（更有“作品感”的展示框） */}
            <div className="col-span-1 md:col-span-5 relative flex md:justify-end items-start" id="hero-action-block">
              {/* 两张照片叠放：默认正脸照在后面露出一点角度，切换时做渐变/位移 */}
              <div className="relative w-full max-w-[340px]">
                {/* Back card (peek) */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl overflow-hidden border ${
                    profile.theme === "dark"
                      ? "bg-neutral-950/40 border-neutral-850"
                      : "bg-white/70 border-neutral-200"
                  }`}
                  style={{ zIndex: isFaceMode ? 30 : 10 }}
                  animate={{
                    opacity: isFaceMode ? 1 : 0.92,
                    x: isFaceMode ? 0 : 18,
                    y: isFaceMode ? 0 : 16,
                    rotate: isFaceMode ? 0 : 6,
                    scale: isFaceMode ? 1 : 0.96,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <img
                    src={faceSrc}
                    alt="face"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>

                {/* Front card (main) */}
                <motion.div
                  whileHover={{ y: -2, rotate: -0.35, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={`relative w-full rounded-2xl overflow-hidden border ${
                    profile.theme === "dark"
                      ? "bg-neutral-950/40 border-neutral-850"
                      : "bg-white/70 border-neutral-200"
                  }`}
                  style={{ zIndex: isFaceMode ? 10 : 30 }}
                  animate={{
                    opacity: isFaceMode ? 0.92 : 1,
                    x: isFaceMode ? 18 : 0,
                    y: isFaceMode ? 16 : 0,
                    rotate: isFaceMode ? 6 : 0,
                    scale: isFaceMode ? 0.96 : 1,
                  }}
                >
                  {/* subtle frame glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-70"
                    style={{
                      background:
                        profile.theme === "dark"
                          ? "radial-gradient(600px circle at 30% 20%, rgba(255,255,255,0.08), transparent 45%)"
                          : "radial-gradient(600px circle at 30% 20%, rgba(0,0,0,0.06), transparent 45%)",
                    }}
                  />

                  {/* accent corner */}
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ backgroundColor: profile.accentColor }}
                  />

                  <div className="aspect-square relative">
                    <div
                      className="absolute inset-0 bg-center bg-cover blur-2xl scale-110 opacity-35"
                      style={{ backgroundImage: `url(${avatarSrc})` }}
                      aria-hidden="true"
                    />
                    <img
                      src={avatarSrc}
                      alt="portrait"
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />

                    <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                          Portrait / Work
                        </span>
                        <span
                          className="text-[10px] font-mono text-white/80"
                          style={{ color: profile.accentColor }}
                        >
                          {language.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="pt-4 flex justify-end relative z-50 pointer-events-auto">
                  <button
                    type="button"
                    onClick={() => setIsFaceMode((v) => !v)}
                    className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono tracking-widest shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    {isFaceMode ? "返回原始图片吧" : "切换清晰面部0v0"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary micro-indicators */}
          <div className="pt-8 flex flex-wrap gap-4 text-xs font-mono text-neutral-500" id="hero-micro-indicators">
            {/* 移除这些“框”型提示块 */}
          </div>

          <div className="absolute -bottom-8 right-0 animate-bounce hidden md:block" id="hero-arrow-indicator">
            <ChevronDown className="w-5 h-5 text-neutral-500" />
          </div>

        </section>

        {/* WORKS OVERALL TITLE */}
        <section className="scroll-mt-24" id="works-title">
          <div className="border-b border-neutral-800/40 pb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`works-title-${language}`}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight font-sans ${
                  profile.theme === "dark" ? "text-neutral-100" : "text-neutral-900"
                }`}
              >
                {worksSectionTitle}
              </motion.h2>
            </AnimatePresence>
          </div>
        </section>

        {/* WORKS: 作品照片展示（单张展示 + 左右切换按钮） */}
        {works.map((w) => {
          const idx = workImageIndex[w.id] ?? 0;
          const total = w.images.length;
          const mode = workMediaMode[w.id] ?? "photo";
          const hasVideo = Boolean(w.videoSrc);
          const useSplitLayout = true; // 作品1/2/3 统一使用同一套展示形式
          const dir = workImageDir[w.id] ?? 1;
          // 用固定 layoutId，确保每一张图放大都从原位置“撑开”，而不是渐隐
          const currentImageLayoutId = `workimg-${w.id}`;
          return (
            <section key={w.id} className="space-y-6 scroll-mt-24" id={w.id}>
              <div className="flex items-end justify-between border-b border-neutral-800/40 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                    WORK
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight font-sans">
                    {w.name[language]}
                  </h2>
                </div>
                <div className="text-right font-mono text-xs text-neutral-500 tabular-nums">
                  {total > 0 ? `${idx + 1} / ${total}` : "0 / 0"}
                </div>
              </div>

              {/* 作品1特殊布局：左侧说明 / 右侧展示，并带轻微 3D 内凹空间感 */}
              {useSplitLayout ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* LEFT: Statement */}
                  <motion.div
                    className={`md:col-span-5 rounded-2xl ${
                      // “白底不需要框”：用更干净的底色，不加 border
                      profile.theme === "dark" ? "bg-white/5" : "bg-white/80"
                    } shadow-[0_24px_70px_rgba(0,0,0,0.55)]`}
                    style={{
                      transform:
                        mode === "photo"
                          ? "perspective(1200px) rotateY(8deg) translateZ(-22px)"
                          : "none",
                      transformStyle: "preserve-3d",
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    animate={{}}
                  >
                    {w.intro && (
                      <button
                        type="button"
                        onClick={() =>
                          setWorkIntroOpen((prev) => ({ ...prev, [w.id]: !prev[w.id] }))
                        }
                        className="w-full text-left px-5 py-5 rounded-2xl"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span
                              className="inline-flex h-2 w-2 rounded-full"
                              style={{ backgroundColor: profile.accentColor }}
                            />
                            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                              {statementLabel.title}
                            </span>
                          </div>
                          {/* 更大的展开交互键（白底、无边框） */}
                          <span className="inline-flex">
                            <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono tracking-widest shadow-sm">
                              {workIntroOpen[w.id] ? statementLabel.close : statementLabel.open}
                            </span>
                          </span>
                        </div>

                        <AnimatePresence initial={false}>
                          {workIntroOpen[w.id] && (
                            <motion.div
                              key="intro"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4">
                                <AnimatePresence mode="wait">
                                  <motion.p
                                    key={`intro-${language}`}
                                    initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                                    className={`text-sm sm:text-base leading-relaxed font-sans whitespace-pre-line ${
                                      profile.theme === "dark" ? "text-neutral-400" : "text-neutral-700"
                                    }`}
                                  >
                                    {w.intro[language]}
                                  </motion.p>
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    )}
                  </motion.div>

                  {/* RIGHT: Media */}
                  <motion.div
                    className={`md:col-span-7 relative overflow-hidden rounded-2xl ${
                      profile.theme === "dark" ? "bg-neutral-950/30" : "bg-white/60"
                    } shadow-[0_24px_70px_rgba(0,0,0,0.55)]`}
                    style={{
                      aspectRatio: "16 / 9",
                      transform:
                        mode === "photo"
                          ? "perspective(1200px) rotateY(-8deg) translateZ(-22px)"
                          : "none",
                      transformStyle: "preserve-3d",
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  >
                    {/* 主展示区域：照片 / 视频 */}
                    <AnimatePresence mode="wait">
                      {mode === "photo" && (
                        <motion.div
                          key="photo"
                          initial={{ opacity: 0, scale: 0.985 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.985 }}
                          transition={{ duration: 0.25 }}
                          className="absolute inset-0"
                        >
                          <div
                            className="absolute inset-0 bg-center bg-cover blur-xl scale-110 opacity-30"
                            style={{ backgroundImage: `url(${w.images[idx]})` }}
                            aria-hidden="true"
                          />
                          {/* 图片切换动效：作品1=光栅；作品2=滑动；作品3=左轴旋转覆盖 */}
                          {w.transition === "raster" && (
                            <AnimatePresence initial={false}>
                              <motion.img
                                key={`raster-${idx}`}
                                src={w.images[idx]}
                                alt={w.name[language]}
                                className="absolute inset-0 w-full h-full object-contain select-none"
                                draggable={false}
                                layoutId={currentImageLayoutId}
                                onClick={() =>
                                  setLightbox({
                                    open: true,
                                    src: w.images[idx],
                                    layoutId: currentImageLayoutId,
                                    alt: w.name[language],
                                  })
                                }
                                style={{ cursor: "zoom-in" }}
                              />
                              {workTransition[w.id]?.prevUrl && (
                                <div
                                  key={`raster-${workTransition[w.id]?.token ?? 0}`}
                                  className="absolute inset-0 raster-wipe"
                                  style={
                                    {
                                      ["--raster-duration" as any]: `${RASTER_DURATION_MS}ms`,
                                    } as React.CSSProperties
                                  }
                                  aria-hidden="true"
                                >
                                  <img
                                    src={workTransition[w.id]!.prevUrl}
                                    alt=""
                                    className="w-full h-full object-contain select-none"
                                    draggable={false}
                                  />
                                </div>
                              )}
                            </AnimatePresence>
                          )}

                          {w.transition === "slide" && (
                            <AnimatePresence initial={false} custom={dir}>
                              <motion.img
                                key={`slide-${idx}`}
                                src={w.images[idx]}
                                alt={w.name[language]}
                                className="absolute inset-0 w-full h-full object-contain select-none"
                                draggable={false}
                                layoutId={currentImageLayoutId}
                                custom={dir}
                                initial={(d) => ({ x: d > 0 ? 220 : -220, opacity: 1 })}
                                animate={{ x: 0, opacity: 1 }}
                                exit={(d) => ({ x: d > 0 ? -220 : 220, opacity: 1 })}
                                transition={{ duration: SLIDE_DURATION_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
                                onClick={() =>
                                  setLightbox({
                                    open: true,
                                    src: w.images[idx],
                                    layoutId: currentImageLayoutId,
                                    alt: w.name[language],
                                  })
                                }
                                style={{ cursor: "zoom-in" }}
                              />
                            </AnimatePresence>
                          )}

                          {w.transition === "rotate" && (
                            <AnimatePresence initial={false} custom={dir}>
                              <motion.img
                                key={`rot-${idx}`}
                                src={w.images[idx]}
                                alt={w.name[language]}
                                className="absolute inset-0 w-full h-full object-contain select-none"
                                draggable={false}
                                layoutId={currentImageLayoutId}
                                custom={dir}
                                style={{ transformOrigin: "0% 50%", cursor: "zoom-in" }}
                                initial={(d) => ({ rotate: d > 0 ? 90 : -90, opacity: 1 })}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: ROTATE_DURATION_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
                                onClick={() =>
                                  setLightbox({
                                    open: true,
                                    src: w.images[idx],
                                    layoutId: currentImageLayoutId,
                                    alt: w.name[language],
                                  })
                                }
                              />
                            </AnimatePresence>
                          )}
                        </motion.div>
                      )}

                      {mode === "video" && hasVideo && (
                        <motion.div
                          key="video"
                          initial={{ opacity: 0, scale: 0.985 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.985 }}
                          transition={{ duration: 0.25 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/40"
                        >
                          <iframe
                            src={w.videoSrc as string}
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={`${w.name[language]} video`}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {mode === "photo" && (
                      <>
                        <button
                          type="button"
                          onClick={() => changeWorkImage(w.id, -1, total, w.images[idx], w.transition)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/45 hover:bg-black/65 border border-white/10 text-white backdrop-blur-md transition"
                          aria-label="上一张"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => changeWorkImage(w.id, 1, total, w.images[idx], w.transition)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/45 hover:bg-black/65 border border-white/10 text-white backdrop-blur-md transition"
                          aria-label="下一张"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {mode === "photo" && (
                      <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                        <div className="text-sm sm:text-base font-mono text-white/90">
                          {w.name[language]}
                        </div>
                      </div>
                    )}
                    {mode === "video" && hasVideo && (
                      <div className="absolute left-3 top-3 text-[11px] font-mono text-white/85 bg-black/25 px-2.5 py-1.5 rounded-xl backdrop-blur-md pointer-events-none">
                        {w.name[language]}
                      </div>
                    )}

                    {hasVideo && (
                      <div
                        className={`absolute right-3 flex items-center gap-2 ${
                          mode === "video" ? "top-3" : "bottom-3"
                        }`}
                      >
                        {([
                          { key: "photo" as const, label: "PHOTO", icon: <ImageIcon className="w-3.5 h-3.5" /> },
                          { key: "video" as const, label: "VIDEO", icon: <Play className="w-3.5 h-3.5" /> },
                        ] as const).map((opt) => {
                          const selected = mode === opt.key;
                          return (
                            <motion.button
                              key={opt.key}
                              type="button"
                              onClick={() => setMediaMode(w.id, opt.key)}
                              animate={{
                                scale: selected ? 1.08 : 1,
                                borderColor: selected ? profile.accentColor : "rgba(255,255,255,0.18)",
                                backgroundColor: selected ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.25)",
                              }}
                              transition={{ type: "spring", stiffness: 380, damping: 24 }}
                              className="px-3 py-2 rounded-xl border text-[10px] font-mono text-white/85 hover:text-white flex items-center gap-2 backdrop-blur-md"
                              aria-label={opt.key === "photo" ? "切换照片" : "切换视频"}
                            >
                              <span className="opacity-90">{opt.icon}</span>
                              <span className="tracking-widest">{opt.label}</span>
                            </motion.button>
                          );
                        })}
                      </div>
                    )}

                    {hasVideo && mode === "video" && (
                      <motion.button
                        type="button"
                        onClick={() => setMediaMode(w.id, "photo")}
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute left-3 top-14 w-24 sm:w-28 aspect-video overflow-hidden rounded-xl border border-white/15 bg-black/30 backdrop-blur-md"
                        aria-label="切回照片"
                      >
                        <img
                          src={w.images[idx]}
                          alt="photo thumbnail"
                          className="w-full h-full object-cover opacity-90"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute left-2 bottom-1.5 text-[10px] font-mono text-white/85">
                          PHOTO
                        </div>
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              ) : null}
            </section>
          );
        })}

        {/* Works footer title */}
        <section className="pt-8">
          <AnimatePresence mode="wait">
            <motion.h3
              key={`works-more-${language}`}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`text-2xl sm:text-4xl font-semibold tracking-tight font-sans ${
                profile.theme === "dark" ? "text-neutral-100" : "text-neutral-900"
              }`}
            >
              {language === "zh"
                ? "作品持续生产中..."
                : language === "ja"
                  ? "作品は継続制作中..."
                  : "More works in progress..."}
            </motion.h3>
          </AnimatePresence>
        </section>

      </main>

      {/* Lightbox: 点击图片放大（从原位置放大到新图层，背景变暗） */}
      <AnimatePresence>
        {lightbox.open && lightbox.src && lightbox.layoutId && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLightbox({ open: false, src: null, layoutId: null, alt: "" })}
            style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={lightbox.src}
                alt={lightbox.alt}
                layoutId={lightbox.layoutId}
                className="w-full h-[80vh] object-contain rounded-2xl select-none"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER BLOCK */}
      <footer 
        className={`mt-24 md:mt-40 transition-colors duration-300 ${
          profile.theme === "dark" ? "border-t border-neutral-900 bg-neutral-950/80" : "border-t border-neutral-200 bg-neutral-100/40"
        }`}
        id="site-footer"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-6" id="footer-inner">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6" id="footer-top-row">
            <div className="flex items-center gap-2" id="footer-branding-block">
              <span className="text-xs font-mono text-neutral-500">
                © {new Date().getFullYear()} {profile.name}. {language === "zh" ? "个人信息展示" : language === "ja" ? "プロフィール情報" : "Profile"}
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 text-xs font-mono" id="footer-social-row">
              <a
                href="https://xhslink.com/m/2iF3AXK08Vw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
                title="小红书"
              >
                <img src={rednoteLogoSrc} alt="Red Note" className="w-4 h-4" />
                <span>{language === "zh" ? "小红书" : "Red Note"}</span>
              </a>
              <a
                href="https://www.instagram.com/koteiichi?igsh=NTQ3bnkzdXQ4NHF0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
                title="Instagram"
              >
                <img src={instagramLogoSrc} alt="Instagram" className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="hidden" id="footer-bottom-row" />
        </div>
      </footer>

      </motion.div>
    </div>
    </LayoutGroup>
  );
}

// Private helper X component to prevent importing from non-existing standard SVG classes
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
