export function TokenizationIcon({
  className,
  width = 50,
  height = 51,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="31.0909" r="14.5" stroke="#D9D9D9" />
      <circle cx="32.5" cy="17.5909" r="17" stroke="#D9D9D9" />
      <circle
        cx="9.5"
        cy="40.5909"
        r="9.5"
        fill="url(#paint0_linear_5802_216)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5802_216"
          x1="-3.85938"
          y1="24.1639"
          x2="15.5509"
          y2="18.0696"
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

export function TokenizationIconHover({
  className,
  width = 50,
  height = 51,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="20"
        cy="31.0909"
        r="14.5"
        stroke="url(#paint0_linear_5912_99)"
      >
        <animate
          attributeName="cx"
          from="20"
          to="17"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="31.0909"
          to="18.0909"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <circle
        cx="32.5"
        cy="17.5909"
        r="17"
        stroke="url(#paint1_linear_5912_99)"
      >
        <animate
          attributeName="cx"
          from="32.5"
          to="17.5"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="17.5909"
          to="17.5909"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <circle cx="9.5" cy="40.5909" r="9.5" fill="url(#paint2_linear_5912_99)">
        <animate
          attributeName="cx"
          from="9.5"
          to="17.5"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="40.5909"
          to="17.5909"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <defs>
        <linearGradient
          id="paint0_linear_5912_99"
          x1="-4.09375"
          y1="-7.84656"
          x2="26.5541"
          y2="-17.469"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5912_99"
          x1="-7.10938"
          y1="-12.6695"
          x2="28.6464"
          y2="-23.8957"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5912_99"
          x1="4.14062"
          y1="1.16386"
          x2="23.5509"
          y2="-4.93037"
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
