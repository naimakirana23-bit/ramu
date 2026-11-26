interface TukuCupLogoProps {
  className?: string;
  variant?: 'default' | 'inverted';
}

export function TukuCupLogo({
  className = 'w-7 h-7',
  variant = 'default',
}: TukuCupLogoProps) {
  const strokeColor = variant === 'inverted' ? '#F6F2EA' : '#221A14';
  const sleeveFill = variant === 'inverted' ? '#9C5132' : '#465B43';
  const cupBodyFill = variant === 'inverted' ? '#362A22' : '#ECE5D8';
  const lidFill = variant === 'inverted' ? '#F6F2EA' : '#221A14';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Subtle rising steam line */}
      <path
        d="M17 6.5C17 4.8 18.8 4.4 18.8 2.8"
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M22.5 6.5C22.5 5.1 24 4.7 24 3.3"
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Minimalist Tuku-style takeaway cup lid */}
      <path
        d="M10.5 11.5H29.5L28.2 9H11.8L10.5 11.5Z"
        fill={lidFill}
      />
      <rect
        x="9"
        y="11.2"
        width="22"
        height="2.8"
        rx="1.2"
        fill={lidFill}
      />

      {/* Tapered coffee cup body */}
      <path
        d="M11.2 14H28.8L26.3 35.2C26.15 36.2 25.3 37 24.3 37H15.7C14.7 37 13.85 36.2 13.7 35.2L11.2 14Z"
        fill={cupBodyFill}
        stroke={strokeColor}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      {/* Iconic Tuku-inspired earthy coffee sleeve band */}
      <path
        d="M12.1 20.5H27.9L27.05 28.5H12.95L12.1 20.5Z"
        fill={sleeveFill}
      />

      {/* Minimal coffee bean / book spine mark inside sleeve */}
      <circle cx="20" cy="24.5" r="2.1" fill="#F6F2EA" />
    </svg>
  );
}
