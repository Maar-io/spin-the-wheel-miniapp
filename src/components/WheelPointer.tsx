export const WheelPointer: React.FC = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="44" 
      height="48" 
      viewBox="0 0 44 48" 
      fill="none"
      style={{ width: '36px', height: '40px' }}
    >
      <g filter="url(#filter0_d_15447_16203)">
        <path d="M22 40L40 0H4L22 40Z" fill="url(#paint0_linear_15447_16203)"/>
      </g>
      <defs>
        <filter id="filter0_d_15447_16203" x="0" y="0" width="44" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15447_16203"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15447_16203" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_15447_16203" x1="22" y1="0" x2="22" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E6C25C"/>
          <stop offset="1" stopColor="#F7ECD8"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
