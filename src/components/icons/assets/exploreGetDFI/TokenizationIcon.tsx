export function TokenizationIcon({
  className,
  width = 88,
  height = 57,
  id,
}: {
  className?: string;
  width?: number;
  height?: number;
  id: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="39" cy="34.0909" r="14.5" stroke="#D9D9D9" />
      <circle cx="51.5" cy="20.5909" r="17" stroke="#D9D9D9" />
      <circle cx="28.5" cy="43.5909" r="9.5" fill={`url('#${id}')`} />
      <defs>
        <linearGradient
          id={id}
          x1="15.1406"
          y1="27.1639"
          x2="34.5509"
          y2="21.0696"
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
  width = 88,
  height = 57,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="39"
        cy="34.0909"
        r="14.5"
        stroke="url(#paint0_linear_5778_74918)"
      >
        <animate
          attributeName="cx"
          from="39"
          to="44"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="34.0909"
          to="29.0909"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <circle
        cx="51.5"
        cy="20.5909"
        r="17"
        stroke="url(#paint1_linear_5778_74918)"
      >
        <animate
          attributeName="cx"
          from="51.5"
          to="44.5"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="20.5909"
          to="28.5909"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <circle
        cx="28.5"
        cy="43.5909"
        r="9.5"
        fill="url(#paint2_linear_5778_74918)"
      >
        <animate
          attributeName="cx"
          from="28.5"
          to="44.5"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="43.5909"
          to="28.5909"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <defs>
        <linearGradient
          id="paint0_linear_5778_74918"
          x1="22.9062"
          y1="3.15344"
          x2="53.5541"
          y2="-6.46903"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5778_74918"
          x1="19.8906"
          y1="-1.66947"
          x2="55.6464"
          y2="-12.8957"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5778_74918"
          x1="31.1406"
          y1="12.1639"
          x2="50.5509"
          y2="6.06963"
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
