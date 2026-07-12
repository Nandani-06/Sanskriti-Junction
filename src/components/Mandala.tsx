import { memo } from "react";

interface MandalaProps {
  /** Tailwind/utility classes for positioning and sizing the wrapper. */
  className?: string;
  /** Stroke colour. Defaults to a soft gold that reads on dark purple. */
  color?: string;
  /** Opacity of the whole motif, 0–1. */
  opacity?: number;
  /** Rotation speed direction. */
  spin?: "slow" | "reverse" | "none";
  /** Decorative only — hidden from assistive tech. */
  "aria-hidden"?: boolean;
}

/**
 * Mandala
 * A lightweight, purely decorative concentric-petal motif rendered as inline
 * SVG so it inherits brand colours and animates with CSS (no image weight).
 * Reused as a subtle background accent across hero/CTA/section dividers.
 */
const Mandala = memo(
  ({
    className = "",
    color = "hsl(var(--gold))",
    opacity = 0.5,
    spin = "slow",
  }: MandalaProps) => {
    const spinClass =
      spin === "slow"
        ? "animate-spin-slow"
        : spin === "reverse"
          ? "animate-spin-reverse"
          : "";

    // 16 evenly spaced petals around the centre.
    const petals = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);
    // 24 outer-ring ticks.
    const ticks = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);

    return (
      <div className={className} aria-hidden="true">
        <svg
          viewBox="0 0 400 400"
          className={`h-full w-full ${spinClass}`}
          style={{ opacity }}
          fill="none"
          stroke={color}
          strokeWidth="1"
        >
          {/* Concentric rings */}
          <circle cx="200" cy="200" r="60" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="92" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="150" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="190" strokeWidth="0.6" />

          {/* Inner lotus petals */}
          <g>
            {petals.map((deg) => (
              <path
                key={`p-${deg}`}
                d="M200 110 C 218 140, 218 170, 200 200 C 182 170, 182 140, 200 110 Z"
                transform={`rotate(${deg} 200 200)`}
                strokeWidth="0.9"
              />
            ))}
          </g>

          {/* Mid filigree dots */}
          <g>
            {petals.map((deg) => (
              <circle
                key={`d-${deg}`}
                cx="200"
                cy="92"
                r="3"
                transform={`rotate(${deg} 200 200)`}
                fill={color}
                stroke="none"
              />
            ))}
          </g>

          {/* Outer ring ticks */}
          <g>
            {ticks.map((deg) => (
              <line
                key={`t-${deg}`}
                x1="200"
                y1="10"
                x2="200"
                y2="24"
                transform={`rotate(${deg} 200 200)`}
                strokeWidth="0.7"
              />
            ))}
          </g>

          {/* Centre bloom */}
          <circle cx="200" cy="200" r="10" strokeWidth="1.2" />
          <circle cx="200" cy="200" r="3" fill={color} stroke="none" />
        </svg>
      </div>
    );
  },
);

Mandala.displayName = "Mandala";

export default Mandala;
