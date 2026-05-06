import { useEffect, useRef, useState, useCallback } from "react";
import Matter from "matter-js";

const isMobile = () => window.innerWidth < 768;
const getRadiusRange = () =>
  isMobile()
    ? { min: 25, max: 55 }
    : { min: 40, max: 100 };
const BATCH_SIZE = 1;
const BATCH_INTERVAL = 220;

const ICONS = [
  { icon: "react",       bg: "#61DAFB", text: "#0a0a0a" },
  { icon: "typescript",  bg: "#3178C6", text: "#ffffff" },
  { icon: "next-dot-js", bg: "#1a1a1a", text: "#ffffff" },
  { icon: "tailwindcss", bg: "#06B6D4", text: "#ffffff" },
  { icon: "jotai",       bg: "#ec4899", text: "#ffffff" },
  { icon: "redis",       bg: "#ef4444", text: "#ffffff" },
  { icon: "angular",     bg: "#dd0031", text: "#ffffff" },
  { icon: "javascript",  bg: "#F7DF1E", text: "#0a0a0a" },
  { icon: "css3",        bg: "#264de4", text: "#ffffff" },
  { icon: "html-five",   bg: "#e34c26", text: "#ffffff" },
  { icon: "postgresql",  bg: "#336791", text: "#ffffff" },
  { icon: "nestjs",      bg: "#e0234e", text: "#ffffff" },
  { icon: "mongodb",     bg: "#47A248", text: "#ffffff" },
  { icon: "express",     bg: "#303030", text: "#ffffff" },
  { icon: "redux",       bg: "#764abc", text: "#ffffff" },
  { icon: "git",         bg: "#F05032", text: "#ffffff" },
  { icon: "astro",       bg: "#FF5D01", text: "#ffffff" },
  { icon: "bash",        bg: "#4EAA25", text: "#ffffff" },
  { icon: "dotnet",      bg: "#512BD4", text: "#ffffff" },
];

export default function PhysicsCodeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const ballElsRef = useRef<HTMLDivElement[]>([]);
  const spawnTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const autoCleanupRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(false);
  const [active, setActive] = useState(false);

  const cleanup = useCallback(() => {
    spawnTimersRef.current.forEach(clearTimeout);
    spawnTimersRef.current = [];
    if (autoCleanupRef.current) clearTimeout(autoCleanupRef.current);

    if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
    if (engineRef.current) {
      Matter.Events.off(engineRef.current, "afterUpdate");
      Matter.Engine.clear(engineRef.current);
      Matter.Composite.clear(engineRef.current.world, false);
    }

    ballElsRef.current.forEach((el) => el.remove());
    ballElsRef.current = [];
    engineRef.current = null;
    runnerRef.current = null;
    activeRef.current = false;
    setActive(false);
  }, []);

  const launch = useCallback(() => {
    if (!containerRef.current) return;

    const { Engine, Runner, Bodies, Composite, Events, Body } = Matter;
    const rect = containerRef.current.getBoundingClientRect();

    const engine = Engine.create({ gravity: { y: 2 } });
    engineRef.current = engine;

    const runner = Runner.create();
    runnerRef.current = runner;

    // floor = bottom of viewport
    const floor = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 10,
      window.innerWidth + 400,
      20,
      { isStatic: true, friction: 0.6 }
    );
    const { max: maxR } = getRadiusRange();
    const wallL = Bodies.rectangle(-maxR, 0, maxR * 2, window.innerHeight * 6, { isStatic: true });
    const wallR = Bodies.rectangle(window.innerWidth + maxR, 0, maxR * 2, window.innerHeight * 6, { isStatic: true });

    Composite.add(engine.world, [floor, wallL, wallR]);

    const allBodies: Matter.Body[] = [];
    const allEls: HTMLDivElement[] = [];

    Events.on(engine, "afterUpdate", () => {
      allBodies.forEach((body, i) => {
        const el = allEls[i];
        const r = (body as Matter.Body & { _r: number })._r;
        if (el) {
          el.style.left = `${body.position.x - r}px`;
          el.style.top = `${body.position.y - r}px`;
          el.style.transform = `rotate(${body.angle}rad)`;
        }
      });
    });

    Runner.run(runner, engine);

    ICONS.forEach(({ icon, bg, text }, i) => {
      const batchDelay = i * BATCH_INTERVAL;

      const t = setTimeout(() => {
        if (!activeRef.current) return;

        const { min, max } = getRadiusRange();
        const r = min + Math.random() * (max - min);

        // spawn from top edge of card, spread across its width
        const startX = rect.left + (0.1 + Math.random() * 0.8) * rect.width;
        const startY = rect.top - r; // just at/above the top edge

        const body = Bodies.circle(startX, startY, r, {
          restitution: 0.35,
          friction: 0.08,
          frictionAir: 0.006,
          density: 0.001,
        }) as Matter.Body & { _r: number };
        body._r = r;

        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 16,
          y: -(18 + Math.random() * 14),
        });

        Composite.add(engine.world, body);
        allBodies.push(body);

        const size = r * 2;
        const el = document.createElement("div");
        el.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${bg};
          pointer-events: none;
          z-index: 9999;
          will-change: left, top, transform;
          left: ${startX - r}px;
          top: ${startY - r}px;
          box-shadow: 0 8px 40px ${bg}55;
        `;

        const iconSize = Math.round(r * 0.55);
        const span = document.createElement("span");
        span.className = `icon-${icon}`;
        span.style.cssText = `color: ${text}; font-size: ${iconSize}px; line-height: 1; display: block;`;

        el.appendChild(span);
        document.body.appendChild(el);
        allEls.push(el);
        ballElsRef.current = allEls;
      }, batchDelay);

      spawnTimersRef.current.push(t);
    });

    autoCleanupRef.current = setTimeout(cleanup, 15000);
  }, [cleanup]);

  const handleClick = useCallback(() => {
    if (activeRef.current) {
      cleanup();
    } else {
      activeRef.current = true;
      setActive(true);
      launch();
    }
  }, [cleanup, launch]);

  useEffect(() => () => cleanup(), [cleanup]);

  return (
    <section
      ref={containerRef}
      onClick={handleClick}
      className="w-full h-full container-card relative text-primary group cursor-pointer glass-card rounded-xl overflow-clip select-none transition-all duration-300"
      style={
        active
          ? { boxShadow: "0 0 0 1.5px rgba(255,255,255,0.25), 0 0 32px rgba(255,255,255,0.06)" }
          : {}
      }
    >
      <div className="w-full h-full p-4 container-text-code rounded-xl flex items-center justify-center">
        <p className="text-5xl font-bold text-code">{"<code/>"}</p>
      </div>

      {/* rotating glow border */}
      <div className="glow-border-wrap" aria-hidden>
        <div className="glow-border-spin" />
      </div>

      {/* estado indicator — bottom right */}
      <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5 z-10 transition-opacity duration-300">
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
            active ? "bg-green-400 animate-pulse" : "bg-white/20"
          }`}
        />
        <span className="text-[10px] font-mono text-white/30 transition-opacity duration-300">
          {active ? "activo · click para cerrar" : "click"}
        </span>
      </div>

      <div className="absolute top-0 -left-2 rotate-12 opacity-40 z-[-1]">
        <span className="icon-css3 text-5xl text-blue-500 group-hover:text-4xl transition-all" />
      </div>
      <div className="absolute -bottom-2 right-8 rotate-45 opacity-40 z-[-1]">
        <span className="icon-react text-6xl text-blue-300 group-hover:text-5xl transition-all" />
      </div>
      <div className="absolute bottom-10 left-12 z-[-1] opacity-45 -rotate-12">
        <span className="icon-javascript text-4xl text-yellow-500 group-hover:text-3xl transition-all" />
      </div>
      <div className="absolute top-3 -right-2 rotate-12 z-[-1] opacity-45">
        <span className="icon-next-dot-js text-5xl group-hover:text-6xl transition-all" />
      </div>
      <div className="absolute -top-4 right-4/12 -rotate-20 z-[-1] opacity-45">
        <span className="icon-angular text-5xl text-red-500 group-hover:text-4xl transition-all" />
      </div>
      <div className="absolute bottom-2 left-5/12 z-[-1] opacity-45 rotate-12">
        <span className="icon-html-five text-4xl text-orange-400 group-hover:text-6xl transition-all" />
      </div>
      <div className="absolute -bottom-2 -left-2 z-[-1] opacity-45 rotate-20">
        <span className="icon-typescript text-4xl text-blue-500 group-hover:text-5xl transition-all" />
      </div>
    </section>
  );
}
