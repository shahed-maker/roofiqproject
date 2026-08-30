import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
  caption: string;
};

export default function BeforeAfter({ before, after, alt, caption }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <figure className="m-0">
      <div
        ref={ref}
        className="relative w-full overflow-hidden select-none border border-border bg-secondary aspect-[4/3] sm:aspect-[16/10] touch-none cursor-ew-resize"
        onMouseDown={(e) => {
          dragging.current = true;
          move(e.clientX);
        }}
        onMouseMove={(e) => dragging.current && move(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => e.touches[0] && move(e.touches[0].clientX)}
        onTouchMove={(e) => e.touches[0] && move(e.touches[0].clientX)}
      >
        <img
          src={after}
          alt={`${alt} — after`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <img
          src={before}
          alt={`${alt} — before`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />


        <span className="absolute left-3 top-3 bg-foreground/85 px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-background">
          BEFORE
        </span>
        <span className="absolute right-3 top-3 bg-accent px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-accent-foreground">
          AFTER
        </span>

        <div
          className="absolute top-0 bottom-0 w-px bg-background"
          style={{ left: `${pos}%` }}
        >
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background text-sm font-bold text-foreground shadow-md"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
            }}
          >
            ←→
          </button>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}
