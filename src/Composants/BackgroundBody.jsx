import { useEffect, useRef } from "react";

export default function BackgroundBody() {
  const canvasRef = useRef(null);
  const isRunning = useRef(false);
  const animIdRef = useRef(null);

  useEffect(() => {
    if (isRunning.current) return;

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const TAGS = ["</>", "<body>", "</body>", "<head>", "</head>", "<html>", "<main>", "</main>", "</html>", "<footer>", "function()", "const()"];
    const TAG_COLORS = [
      [169,  85, 180], [169,  85, 180], [169,  85, 180],
      [200,  30, 180], [220,  40, 140], [240,  60, 160],
      [255,  90, 180], [255, 120, 200],
    ];

    const DEPTH_RANGE = 3000;
    const FOCAL       = 500;
    const NUM         = 68;
    const NUM_SIDE    = 10;
    const SPEED       = 4.0;
    const SPREAD_X    = 2800;
    const SPREAD_Y    = 1100;
    const TOP_MARGIN  = 0.42;

    let tags = [], sideTags = [], cameraZ = 0, time = 0;

    // Grille pour dispersion homogène (stratified sampling)
    const COLS = 11, ROWS = 10; // 110 cellules pour ~68 tags
    const positions = [];
    for (let c = 0; c < COLS; c++)
      for (let r = 0; r < ROWS; r++)
        positions.push([c, r]);
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    let posIdx = 0;

    const SIDE_ROWS = 9; // 18 cellules (2 côtés × 9 lignes) pour 16 side tags
    const sidePositions = [];
    for (let c = 0; c < 2; c++)
      for (let r = 0; r < SIDE_ROWS; r++)
        sidePositions.push([c, r]);
    for (let i = sidePositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sidePositions[i], sidePositions[j]] = [sidePositions[j], sidePositions[i]];
    }
    let sidePosIdx = 0;

    function getMarginRatio() {
      const w = window.innerWidth;
      if (w >= 1024) return 0.62; // desktop  : 62% gauche libre
      if (w >= 768)  return 0.75; // tablette : 75% gauche libre
      return 1.0;                  // mobile   : tout le haut libre
    }

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createTag(z) {
      const [col, row] = positions[posIdx % positions.length];
      posIdx++;
      const x3 = -SPREAD_X + (col + Math.random()) * (SPREAD_X * 2 / COLS);
      const y3 = -SPREAD_Y + (row + Math.random()) * (SPREAD_Y * 2 / ROWS);
      return {
        x3, y3,
        z3:   z !== undefined ? z : cameraZ + DEPTH_RANGE,
        col:  TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)],
        text: TAGS[Math.floor(Math.random() * TAGS.length)],
      };
    }

    function createSideTag(z) {
      const [col, row] = sidePositions[sidePosIdx % sidePositions.length];
      sidePosIdx++;
      const side = col === 0 ? -1 : 1;
      const x3   = side * (2000 + Math.random() * 1000);
      const y3   = -SPREAD_Y + (row + Math.random()) * (SPREAD_Y * 2 / SIDE_ROWS);
      return {
        x3, y3,
        z3:   z !== undefined ? z : cameraZ + DEPTH_RANGE,
        col:  TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)],
        text: TAGS[Math.floor(Math.random() * TAGS.length)],
      };
    }

    function init() {
      tags = []; sideTags = []; cameraZ = 0;
      for (let i = 0; i < NUM; i++) tags.push(createTag(Math.random() * DEPTH_RANGE));
      for (let i = 0; i < NUM_SIDE; i++) sideTags.push(createSideTag(Math.random() * DEPTH_RANGE));
    }

    function drawBackground() {
      const W = canvas.width, H = canvas.height;
      const t = time * 0.0012;

      ctx.fillStyle = "#060208";
      ctx.fillRect(0, 0, W, H);

      const g1 = ctx.createRadialGradient(W*0.05, H*0.1, 0, W*0.05, H*0.1, H*0.8);
      g1.addColorStop(0,   "rgba(60,10,80,0.45)");
      g1.addColorStop(0.5, "rgba(30,5,50,0.20)");
      g1.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);

      const ox = Math.sin(t)*W*0.03, oy = Math.cos(t*0.7)*H*0.03;
      const g2 = ctx.createRadialGradient(W*0.9-ox, H*0.1+oy, 0, W*0.9-ox, H*0.1+oy, H*0.60);
      g2.addColorStop(0,   "rgba(170,10,200,0.72)");
      g2.addColorStop(0.3, "rgba(110,8,155,0.42)");
      g2.addColorStop(0.6, "rgba(60,4,90,0.18)");
      g2.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);

      const gd = ctx.createLinearGradient(0, 0, W, H);
      gd.addColorStop(0,   "rgba(100,8,130,0.20)");
      gd.addColorStop(0.5, "rgba(5,0,10,0)");
      gd.addColorStop(1,   "rgba(50,5,80,0.18)");
      ctx.fillStyle = gd; ctx.fillRect(0, 0, W, H);

      const ox2 = Math.sin(t*0.8+1)*W*0.02, oy2 = Math.cos(t*0.5+2)*H*0.02;
      const g3 = ctx.createRadialGradient(W*0.98+ox2, H*1.02+oy2, 0, W*0.98+ox2, H*1.02+oy2, H*0.32);
      g3.addColorStop(0,   "rgba(180,90,255,0.65)");
      g3.addColorStop(0.3, "rgba(140,60,230,0.35)");
      g3.addColorStop(0.6, "rgba(100,30,180,0.15)");
      g3.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = g3; ctx.fillRect(0, 0, W, H);

      // Étoiles zone basse
      for (let i = 0; i < 220; i++) {
        const sx = (Math.sin(i*127.3)*0.5+0.5)*W;
        const sy = TOP_MARGIN*H + (Math.cos(i*93.7)*0.5+0.5)*H*(1-TOP_MARGIN);
        const sr = 0.2 + Math.abs(Math.sin(i*0.5+t))*0.7;
        const sa = 0.1 + Math.abs(Math.sin(i*0.3+t*0.4))*0.4;
        ctx.globalAlpha = sa;
        ctx.fillStyle = i%4===0?"rgba(255,255,255,1)":i%4===1?"rgba(200,160,255,1)":i%4===2?"rgba(255,180,220,1)":"rgba(180,140,255,1)";
        ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Masque noir progressif
      const gMask = ctx.createLinearGradient(0, 0, 0, H * 0.80);
      gMask.addColorStop(0,    "rgba(0,0,0,1)");
      gMask.addColorStop(0.12, "rgba(0,0,0,0.92)");
      gMask.addColorStop(0.28, "rgba(0,0,0,0.65)");
      gMask.addColorStop(0.45, "rgba(0,0,0,0.3)");
      gMask.addColorStop(0.65, "rgba(0,0,0,0.08)");
      gMask.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.fillStyle = gMask;
      ctx.fillRect(0, 0, W, H * 0.80);

      // Étoiles zone titre — après le masque
      for (let i = 0; i < 220; i++) {
        const sx = (Math.sin(i*61.3+3.5)*0.5+0.5)*W;
        const sy = (Math.cos(i*44.1+2.1)*0.5+0.5)*H*TOP_MARGIN;
        const sr = 0.2 + Math.abs(Math.sin(i*0.6))*0.7;
        const twinkle = Math.sin(t*50+i*3.1)*0.5+0.5;
        ctx.globalAlpha = 0.1 + twinkle*0.4;
        ctx.fillStyle = i%3===0?"rgba(255,255,255,1)":i%3===1?"rgba(210,170,255,1)":"rgba(255,200,240,1)";
        ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function draw() {
      if (!isRunning.current) return;
      time++;
      drawBackground();

      const W = canvas.width, H = canvas.height;
      const cx = W/2, cy = H/2;
      const margin = getMarginRatio();

      cameraZ += SPEED;

      function renderArray(arr, createFn) {
        for (let i = 0; i < arr.length; i++) {
          const t    = arr[i];
          const relZ = t.z3 - cameraZ;
          if (relZ < 600) { arr[i] = createFn(cameraZ + DEPTH_RANGE); continue; }
          if (relZ >= DEPTH_RANGE) continue;

          const scale = FOCAL / relZ;
          const sx    = cx + t.x3 * scale;
          const sy    = cy + t.y3 * scale;
          if (sx < -200 || sx > W+200 || sy < -200 || sy > H+200) continue;

          const inTopZone = sy < H * TOP_MARGIN;
          if (inTopZone && (margin >= 1.0 || sx < W * margin)) continue;

          const inButtonZone = sy < H * 0.26 && sx > W * 0.72;
          if (inButtonZone) continue;

          const prog     = 1 - relZ / DEPTH_RANGE;
          const fontSize = Math.max(11, prog * 22);
          const [r, g, b] = t.col;
          const bright   = 0.65 + prog * 0.35;

          ctx.font        = `${Math.round(fontSize)}px 'Consolas', 'Fira Code', monospace`;
          ctx.globalAlpha = 0.55 + prog * 0.45;
          ctx.fillStyle   = `rgb(${Math.round(r*bright)},${Math.round(g*bright)},${Math.round(b*bright)})`;
          const tw = ctx.measureText(t.text).width;
          ctx.fillText(t.text, sx - tw/2, sy);
        }
      }

      renderArray(tags, createTag);
      renderArray(sideTags, createSideTag);

      ctx.globalAlpha = 1;

      animIdRef.current = requestAnimationFrame(draw);
    }

    const handleResize = () => { resize(); init(); };

    isRunning.current = true;
    resize();
    init();
    draw();
    window.addEventListener("resize", handleResize);

    return () => {
      isRunning.current = false;
      cancelAnimationFrame(animIdRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        zIndex:        0,
        pointerEvents: "none",
      }}
    />
  );
}