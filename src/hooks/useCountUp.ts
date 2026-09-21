import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setValue(target);
      return;
    }

    let raf = 0;
    const run = () => {
      let start: number | null = null;
      const tick = (now: number) => {
        if (start === null) start = now;
        const progress = Math.min(1, (now - start) / duration);
        setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return { ref, value };
}