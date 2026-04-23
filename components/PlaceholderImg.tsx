type Tone = "lavender" | "sage" | "sand" | "plum";

type Props = {
  label: string;
  tone?: Tone;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
};

const BG: Record<Tone, string> = {
  lavender: "#d4c2dc",
  sage: "#c2cfb5",
  sand: "#e8dcc8",
  plum: "#6b4a7a",
};

const FG: Record<Tone, string> = {
  lavender: "#6b4a7a",
  sage: "#7a8f6c",
  sand: "#b86e52",
  plum: "#fbf6ec",
};

export default function PlaceholderImg({
  label,
  tone = "lavender",
  radius = 24,
  className,
  style,
  width,
  height,
}: Props) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        background: BG[tone],
        color: FG[tone],
        borderRadius: radius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" style={{ opacity: 0.5 }} aria-hidden>
        <ellipse cx="22" cy="32" rx="7" ry="9" fill="currentColor" />
        <ellipse cx="58" cy="32" rx="7" ry="9" fill="currentColor" />
        <ellipse cx="32" cy="20" rx="6" ry="8" fill="currentColor" />
        <ellipse cx="48" cy="20" rx="6" ry="8" fill="currentColor" />
        <path
          d="M40 38c-11 0-19 8-19 17 0 7 6 11 11 11 3 0 5-1 8-1s5 1 8 1c5 0 11-4 11-11 0-9-8-17-19-17z"
          fill="currentColor"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 11,
          opacity: 0.75,
          letterSpacing: "0.08em",
          fontStyle: "italic",
        }}
      >
        {label}
      </div>
    </div>
  );
}
