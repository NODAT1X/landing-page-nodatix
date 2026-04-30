"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

/* Triggers the existing `fadeUp` keyframe (globals.css) when the
   element enters the viewport. Fires once, then disconnects. */

interface FadeUpProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  delay?: number;
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
  ...rest
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = visible
    ? { animation: `fadeUp 0.6s ease-out ${delay}ms both` }
    : { opacity: 0, transform: "translateY(16px)" };

  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
    </div>
  );
}
