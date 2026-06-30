// Hand-drawn style SVG icons for Café 45 sections
const iconStyle = {
  display: "inline-block",
  verticalAlign: "middle",
  opacity: 0.7,
};

export function WhiskIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="#7B4A2D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyle}
    >
      <path d="M32 40 L32 58" />
      <path d="M28 58 L36 58" strokeWidth="3" />
      <path d="M26 40 Q26 20 32 10 Q38 20 38 40" />
      <path d="M23 38 Q22 18 32 6 Q42 18 41 38" />
      <path d="M20 36 Q18 16 32 4 Q46 16 44 36" />
      <ellipse cx="32" cy="40" rx="12" ry="4" />
    </svg>
  );
}

export function CoffeeCupIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="#7B4A2D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyle}
    >
      <path d="M12 24 L12 48 Q12 56 24 56 L40 56 Q52 56 52 48 L52 24" />
      <path d="M52 28 Q60 28 60 36 Q60 44 52 44" />
      <path d="M8 24 L56 24" strokeWidth="2.5" />
      <path d="M24 16 Q24 12 28 12" />
      <path d="M32 14 Q32 8 36 8" />
      <path d="M40 16 Q40 10 44 10" />
      <line x1="16" y1="60" x2="48" y2="60" strokeWidth="2" />
    </svg>
  );
}

export function CroissantIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="#7B4A2D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyle}
    >
      <path d="M8 40 Q16 20 32 24 Q48 20 56 40" />
      <path d="M8 40 Q20 48 32 44 Q44 48 56 40" />
      <path d="M14 36 Q22 28 32 30 Q42 28 50 36" />
      <path d="M20 34 Q26 28 32 30" />
      <path d="M44 34 Q38 28 32 30" />
      <path d="M12 42 L16 38" />
      <path d="M52 42 L48 38" />
    </svg>
  );
}

export function ClockLineIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="#7B4A2D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyle}
    >
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="2" fill="#7B4A2D" />
      <path d="M32 32 L32 16" strokeWidth="2.5" />
      <path d="M32 32 L44 38" strokeWidth="2" />
      <path d="M32 8 L32 12" />
      <path d="M32 52 L32 56" />
      <path d="M8 32 L12 32" />
      <path d="M52 32 L56 32" />
    </svg>
  );
}

export function MapPinLineIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="#7B4A2D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyle}
    >
      <path d="M32 56 Q32 56 18 36 Q10 24 10 18 Q10 6 32 6 Q54 6 54 18 Q54 24 46 36 Q32 56 32 56Z" />
      <circle cx="32" cy="20" r="8" />
      <circle cx="32" cy="20" r="3" fill="#7B4A2D" />
    </svg>
  );
}

export function CoffeeBeansIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="#7B4A2D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyle}
    >
      <ellipse cx="22" cy="28" rx="12" ry="16" transform="rotate(-20 22 28)" />
      <path d="M14 20 Q22 28 18 38" />
      <ellipse cx="42" cy="36" rx="12" ry="16" transform="rotate(15 42 36)" />
      <path d="M36 28 Q42 36 38 46" />
    </svg>
  );
}
