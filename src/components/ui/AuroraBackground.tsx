import { useEffect, useRef } from "react";

export const AuroraBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    let x = 50, y = 50;

    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x = (e.clientX / innerWidth) * 100;
      y = (e.clientY / innerHeight) * 100;
    };

    const tick = () => {
      node.style.background = `radial-gradient(1200px circle at ${x}% ${y}%, hsl(var(--brand)/0.15), transparent 60%)`;
      raf = requestAnimationFrame(tick);
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      window.addEventListener("mousemove", onMove);
      raf = requestAnimationFrame(tick);
    }
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0" />;
};
