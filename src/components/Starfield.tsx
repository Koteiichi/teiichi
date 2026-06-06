import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  glow: boolean;
  color: string;
  twinkleSpeed: number;
  phase: number;
}

interface StarfieldProps {
  theme: "dark" | "light";
  /**
   * 背景随页面滚动的视差系数。数值越小移动越慢。
   * 例如：0.12 表示页面滚动 100px，星空约移动 12px（并带有缓动跟随）。
   */
  parallaxFactor?: number;
}

export function Starfield({ theme, parallaxFactor = 0.12 }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let targetScrollOffset = 0;
    let currentScrollOffset = 0;

    // Custom star colors matching astrography reference (mostly white/silver with subtle highlights)
    const starColorsDark = [
      "rgba(255, 255, 255,",      // Pristine White
      "rgba(244, 247, 255,",      // Soft Blue-White
      "rgba(255, 254, 245,",      // Warm Cosmos Yellow
      "rgba(240, 240, 245,",      // Crisp Celestial Silver
      "rgba(253, 253, 253,",      // Pale White
    ];

    const starColorsLight = [
      "rgba(10, 10, 12,",         // Dark Charcoal
      "rgba(47, 54, 72,",         // Deep slate star dust
      "rgba(90, 95, 115,",        // Charcoal grey
      "rgba(120, 125, 140,",      // Faint grey dots
    ];

    const generateStars = (currWidth: number, currHeight: number) => {
      // High star density for a "dense star universe" (密密麻麻)
      // Calculated proportional to screen space/area
      const area = currWidth * currHeight;
      const count = Math.max(900, Math.min(2400, Math.floor(area / 950)));
      
      const newStars: Star[] = [];
      const colors = theme === "dark" ? starColorsDark : starColorsLight;

      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        let size = 0.45;
        let glow = false;
        
        if (rand < 0.78) {
          // Micro dust stars (highly dense background clusters)
          size = 0.4 + Math.random() * 0.45;
        } else if (rand < 0.96) {
          // Medium bright stars
          size = 0.85 + Math.random() * 0.65;
        } else {
          // Large sparkling celestial bodies reminiscent of constellation points
          size = 1.5 + Math.random() * 0.8;
          glow = Math.random() > 0.25; // standard active glowing
        }

        const colorBase = colors[Math.floor(Math.random() * colors.length)];

        newStars.push({
          x: Math.random(),
          y: Math.random(),
          size,
          opacity: 0.12 + Math.random() * 0.88,
          glow,
          color: colorBase,
          twinkleSpeed: 0.002 + Math.random() * 0.012,
          phase: Math.random() * Math.PI * 2,
        });
      }
      stars = newStars;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      // Sync backing store resolution to device pixel ratios
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // IMPORTANT: reset transform before applying scale (避免 resize 叠加缩放)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      width = rect.width;
      height = rect.height;

      // Always clear cache or regenerate coordinate vectors if empty
      if (stars.length === 0) {
        generateStars(width, height);
      }
    };

    // Initial setup and bindings
    resize();
    window.addEventListener("resize", resize);

    let tick = 0;

    // Scroll parallax: 让背景“跟随滚轮方向”但速度更慢，并带缓动
    const onScroll = () => {
      // 正号：页面向下滚动（scrollY 增大）时，背景也向下缓慢移动
      targetScrollOffset = window.scrollY * parallaxFactor;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const wrap = (value: number, range: number) => {
      if (range <= 0) return 0;
      const m = value % range;
      return m < 0 ? m + range : m;
    };

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // 缓动：让背景的位移“慢慢追上”目标位移
      currentScrollOffset += (targetScrollOffset - currentScrollOffset) * 0.06;

      // Render cosmic environment overlay
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        // Compute slow atmospheric twinkle offsets [0.4 to 1.0]
        const twinkle = Math.sin(tick * star.twinkleSpeed + star.phase);
        const currentOpacity = star.opacity * (0.45 + twinkle * 0.55);

        // Map coordinates smoothly
        const px = star.x * width;
        const py = wrap(star.y * height + currentScrollOffset, height);

        ctx.beginPath();
        
        if (star.glow && theme === "dark") {
          // Elegant radial halo glow gradient surrounding large star bodies
          const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, star.size * 3.5);
          glowGrad.addColorStop(0, `${star.color}${currentOpacity * 0.95})`);
          glowGrad.addColorStop(0.2, `${star.color}${currentOpacity * 0.5})`);
          glowGrad.addColorStop(0.55, `${star.color}${currentOpacity * 0.15})`);
          glowGrad.addColorStop(1, `${star.color}0)`);
          
          ctx.fillStyle = glowGrad;
          ctx.arc(px, py, star.size * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw pinprick nucleus star core
        ctx.beginPath();
        ctx.fillStyle = `${star.color}${currentOpacity})`;
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [theme, parallaxFactor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none transition-opacity duration-1000 ease-in-out"
      style={{ zIndex: 0 }}
      id="cosmic-canvas-starfield"
    />
  );
}
