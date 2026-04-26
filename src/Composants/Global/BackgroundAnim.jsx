import { useRef, useEffect } from "react";
import "../../Assets/styles/Global/BackgroundAnim.css";

export default function BackgroundAnim() {
  const starsRef   = useRef(null);
  const cornersRef = useRef(null);
  const animRef    = useRef(null);
  const resizeRef  = useRef(null);

  // ── Corners canvas (static, drawn once) ──
  useEffect(() => {
    const cC   = cornersRef.current;
    const cCtx = cC.getContext("2d");
    const cSize = Math.max(window.innerWidth, window.innerHeight) * 1.75;
    cC.width  = cSize;
    cC.height = cSize;
    const cW = cSize, cH = cSize;

    // Corner radial gradients (bottom-left and bottom-right)
    [
      { x: 0,  y: cH, c0: "rgba(120,0,160,0.35)", c1: "rgba(180,20,140,0.12)" },
      { x: cW, y: cH, c0: "rgba(150,10,130,0.32)", c1: "rgba(160,0,180,0.11)" },
    ].forEach(c => {
      const g = cCtx.createRadialGradient(c.x, c.y, 0, c.x, c.y, cW * 0.60);
      g.addColorStop(0,   c.c0);
      g.addColorStop(0.5, c.c1);
      g.addColorStop(1,   "rgba(0,0,0,0)");
      cCtx.fillStyle = g;
      cCtx.fillRect(0, 0, cW, cH);
    });

    // Tiny stars outside photo zone
    for (let i = 0; i < 22000; i++) {
      const x  = Math.random() * cW;
      const y  = Math.random() * cH;
      const rx = Math.abs(x - cW / 2) / (cW / 2);
      const ry = Math.abs(y - cH / 2) / (cH / 2);
      const inPhotoZone  = rx < 0.88 && ry < 0.43;
      const inTransition = rx < 0.96 && ry < 0.52;
      if (inPhotoZone) continue;
      if (inTransition && Math.random() > 0.4) continue;
      const a = 0.2 + Math.random() * 0.65;
      const r = 0.15 + Math.random() * 0.5;
      cCtx.fillStyle = `rgba(255,255,255,${a})`;
      cCtx.beginPath();
      cCtx.arc(x, y, r, 0, Math.PI * 2);
      cCtx.fill();
    }
  }, []);

  // ── Stars canvas (animated) ──
  useEffect(() => {
    const canvas = starsRef.current;
    const ctx    = canvas.getContext("2d");

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    // Pre-render glow sprite once — évite createRadialGradient à chaque frame
    const SPRITE_SIZE = 64;
    const sprite = document.createElement("canvas");
    sprite.width  = SPRITE_SIZE;
    sprite.height = SPRITE_SIZE;
    const sCtx = sprite.getContext("2d");
    const g = sCtx.createRadialGradient(
      SPRITE_SIZE / 2, SPRITE_SIZE / 2, 0,
      SPRITE_SIZE / 2, SPRITE_SIZE / 2, SPRITE_SIZE / 2
    );
    g.addColorStop(0,   "rgba(255,180,230,0.6)");
    g.addColorStop(0.5, "rgba(200,80,180,0.15)");
    g.addColorStop(1,   "rgba(0,0,0,0)");
    sCtx.fillStyle = g;
    sCtx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);

    const stars = [];

    for (let i = 0; i < 700; i++) {
      stars.push({
        x: (Math.random() - 0.5) * canvas.width  * 1.8,
        y: (Math.random() - 0.5) * canvas.height * 1.8,
        z: Math.random() * canvas.width,
        big: false,
      });
    }
    for (let i = 0; i < 7; i++) {
      stars.push({
        x: (Math.random() - 0.5) * canvas.width  * 1.8,
        y: (Math.random() - 0.5) * canvas.height * 1.8,
        z: Math.random() * canvas.width * 0.6,
        big: true,
      });
    }

    function draw() {
      try {
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
          star.z -= 0.4;
          if (star.z <= 0) {
            star.z = canvas.width;
            star.x = (Math.random() - 0.5) * canvas.width;
            star.y = (Math.random() - 0.5) * canvas.height;
          }

          const k    = 128 / star.z;
          const x    = star.x * k + canvas.width  / 2;
          const y    = star.y * k + canvas.height / 2;
          const size = Math.max((1 - star.z / canvas.width) * 2, 0.01);

          if (star.big) {
            const glowR = size * 8;
            ctx.drawImage(sprite, x - glowR, y - glowR, glowR * 2, glowR * 2);
            ctx.fillStyle = "rgba(255,255,255,0.95)";
            ctx.beginPath(); ctx.arc(x, y, size * 1.8, 0, Math.PI * 2); ctx.fill();
          } else {
            ctx.fillStyle = "white";
            ctx.fillRect(x, y, size, size);
          }
        });
      } catch (_) {}

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      clearTimeout(resizeRef.current);
      resizeRef.current = setTimeout(() => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 150);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(resizeRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-space" aria-hidden="true">
      <canvas className="bg-stars" ref={starsRef} />
      <div className="bg-nebula" />
      <canvas className="bg-corners" ref={cornersRef} />
    </div>
  );
}
