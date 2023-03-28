export function FeesIcon({
  className,
  width = 58,
  height = 45,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="4.5"
        y="11.5909"
        width="45"
        height="32"
        rx="3.5"
        stroke="#D9D9D9"
      />
      <rect
        x="0.5"
        y="20.5909"
        width="24"
        height="10"
        rx="1.5"
        stroke="#D9D9D9"
      />
      <circle
        cx="45.166"
        cy="12.0909"
        r="12"
        fill="url(#paint0_linear_5802_34)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5802_34"
          x1="28.291"
          y1="-8.65906"
          x2="52.8093"
          y2="-16.357"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FeesIconHover({
  className,
  width = 58,
  height = 45,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="4.5"
        y="11.5909"
        width="45"
        height="32"
        rx="3.5"
        fill="url(#paint0_linear_5802_143)"
        stroke="url(#paint1_linear_5802_143)"
      />
      <rect
        x="0.5"
        y="20.5909"
        width="24"
        height="10"
        rx="1.5"
        fill="url(#paint2_linear_5802_143)"
        stroke="black"
      />
      <circle cx="45.166" cy="12.0909" r="12" fill="black">
        <animate attributeName="r" from="12" to="4" dur="0.3s" fill="freeze" />
        <animate
          attributeName="cx"
          from="45.166"
          to="18.166"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="12.0909"
          to="25.166"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <defs>
        <linearGradient
          id="paint0_linear_5802_143"
          x1="-5.34375"
          y1="-0.940308"
          x2="37.9832"
          y2="-19.9025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5802_143"
          x1="-5.34375"
          y1="-0.940308"
          x2="37.9832"
          y2="-19.9025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5802_143"
          x1="-5.07813"
          y1="16.0805"
          x2="13.5131"
          y2="2.81443"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
