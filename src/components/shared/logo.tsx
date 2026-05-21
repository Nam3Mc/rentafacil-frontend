interface LogoProps {
  compact?: boolean;

  className?: string;
}

export function Logo({
  compact = false,
  className = "",
}: LogoProps) {

  /*
    =========================================
    COMPACT VERSION
    NAVBAR / SIDEBAR / MOBILE
    =========================================
  */

  if (compact) {
if (compact) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
    >
      {/* Text */}
      <div className="leading-none">

        <p className="font-heading text-2xl font-bold tracking-tight">

          <span className="bg-gradient-to-r from-[#0F5BFF] to-[#9A2EFF] bg-clip-text text-transparent">

            RENTA

          </span>{" "}

          <span className="text-foreground">
            FÁCIL
          </span>

        </p>

      </div>

    </div>
  );
}

  }

  /*
    =========================================
    FULL VERSION
    HERO / BRANDING / LANDING
    =========================================
  */

  return (
    <div
      className={`flex justify-center ${className}`}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 700"
        className="w-full max-w-[540px]"
      >

        <defs>

          {/* Gradient */}
          <linearGradient
            id="roofGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >

            <stop
              offset="0%"
              stopColor="#0F5BFF"
            />

            <stop
              offset="100%"
              stopColor="#9A2EFF"
            />

          </linearGradient>

          {/* Soft Shadow */}
          <filter
            id="shadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >

            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="5"
              floodColor="#000"
              floodOpacity="0.18"
            />

          </filter>

        </defs>

        {/* Roof Group */}
        <g filter="url(#shadow)">

          {/* Main Roof */}
          <path
            d="M285 300 
               L530 110 
               Q540 102 550 110
               L795 300
               L725 300
               L540 155
               L355 300 Z"
            fill="url(#roofGradient)"
          />

          {/* Chimney */}
          <rect
            x="390"
            y="150"
            width="45"
            height="80"
            fill="#1D4FFF"
          />

          {/* Secondary Roof */}
          <path
            d="M620 160 
               L950 300
               L875 300
               L675 210 Z"
            fill="url(#roofGradient)"
            opacity="0.95"
          />

        </g>

        {/* Brand Name */}
        <g
          fontFamily="Montserrat, Arial, sans-serif"
          letterSpacing="10"
        >

          {/* RENTA */}
          <text
            x="210"
            y="470"
            fontSize="90"
            fontWeight="700"
            fill="url(#roofGradient)"
          >

            RENTA

          </text>

          {/* FÁCIL */}
          <text
            x="650"
            y="470"
            fontSize="90"
            fontWeight="300"
            fill="currentColor"
          >

            FÁCIL

          </text>

        </g>

        {/* Tagline */}
        <g
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.35"
        >

          <line
            x1="20"
            y1="560"
            x2="250"
            y2="560"
          />

          <line
            x1="940"
            y1="560"
            x2="1170"
            y2="560"
          />

        </g>

        {/* Tagline Text */}
        <text
          x="600"
          y="575"
          textAnchor="middle"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="24"
          letterSpacing="6"
          fill="currentColor"
          opacity="0.7"
        >

          TU HOGAR, SIN COMPLICACIONES

        </text>

      </svg>

    </div>
  );
}