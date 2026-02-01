import { useRef, useEffect } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(DPR, DPR);

    const stars: { x: number; y: number; r: number; a: number; twinkleFreq: number }[] = [];
    const STAR_COUNT = Math.floor((width * height) / 3500); // density

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.2,
        // balanced alpha for visible but soft twinkle
        a: Math.random() * 0.5 + 0.45,
        // twinkle frequency in cycles per second (slower, varied)
        twinkleFreq: Math.random() * 0.22 + 0.08,
      });
    }

    // generate milky-way stars concentrated along a band
    const milkyStars: { x: number; y: number; r: number; a: number }[] = [];
    const BAND_ANGLE = -0.5; // radians (slant)
    for (let i = 0; i < STAR_COUNT * 0.8; i++) {
      const t = Math.random();
      // place along band length
      const px = t * width;
      // band offset with Gaussian distribution for thickness
      const offset = (Math.random() - 0.5) * (height * 0.25);
      const x = px;
      const y = height / 2 + (Math.sin(px / 120) * 50) + offset * 0.25;
      milkyStars.push({ x, y, r: Math.random() * 1.8 + 0.3, a: Math.random() * 0.6 + 0.15 });
    }

    let raf = 0;

    function draw(time: number) {
      if (!ctx) return;
      const t = (time || performance.now()) / 1000; // seconds
      ctx.clearRect(0, 0, width, height);

      // subtle background gradient for space
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "#000012");
      g.addColorStop(1, "#000000");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // draw milky-way glow using radial strokes
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 8; i++) {
        const centerX = width * (0.25 + i * 0.09);
        const centerY = height * 0.5 + Math.sin(i + t / 30) * 30;
        const rad = Math.max(width, height) * (0.18 + i * 0.02);
        const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, rad);
        grad.addColorStop(0, `rgba(255,255,255,${0.03 + i * 0.01})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, rad, rad * 0.35, BAND_ANGLE, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // milky-way stars
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let s of milkyStars) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // normal stars with smoother, time-based twinkle
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        // phase in range -1..1
        const phase = Math.sin(t * Math.PI * 2 * s.twinkleFreq + i * 0.13);
        // gentle multiplier around 1.0
        const twinkle = 1 + phase * 0.22;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, s.a * twinkle)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        // subtle flare when phase is near peak
        if (phase > 0.98) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${Math.min(1, s.a * 1.4)})`;
          ctx.arc(s.x, s.y, s.r * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    function handleResize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const DPR = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(DPR, DPR);
    }

    window.addEventListener("resize", handleResize);
    draw(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
