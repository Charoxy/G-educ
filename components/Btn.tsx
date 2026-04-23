import Link from "next/link";

type Props = {
  children: React.ReactNode;
  primary?: boolean;
  small?: boolean;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Btn({
  children,
  primary,
  small,
  href,
  className = "",
  style,
  onClick,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center font-sans font-semibold rounded-full transition-transform duration-150 active:scale-[0.98] cursor-pointer leading-none";
  const size = small ? "text-[13px] px-[22px] py-[10px]" : "text-[14px] px-7 py-[15px]";
  const variant = primary
    ? "bg-plum text-bone border-0 hover:bg-plum-soft"
    : "bg-transparent text-plum border-[1.5px] border-plum hover:bg-plum hover:text-bone";

  const cls = `${base} ${size} ${variant} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}
