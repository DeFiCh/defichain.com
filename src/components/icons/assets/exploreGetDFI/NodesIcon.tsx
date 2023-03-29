export function NodesIcon({
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
      <rect
        x="27.116"
        y="5.59106"
        width="36.6376"
        height="37"
        stroke="#D9D9D9"
      />
      <rect x="16.5" y="13.5913" width="36.6376" height="37" stroke="#D9D9D9" />
      <circle cx="60.0889" cy="39.2511" r="12" fill={`url('#${id}')`} />
      <defs>
        <linearGradient
          id={id}
          x1="43.2139"
          y1="18.5011"
          x2="67.7321"
          y2="10.8031"
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

export function NodesIconHover({
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
      <rect
        x="27.116"
        y="5.59106"
        width="36.6376"
        height="37"
        fill="url(#paint0_linear_5778_74909)"
        stroke="black"
      />
      <rect
        x="16.5"
        y="13.5913"
        width="36.6376"
        height="37"
        fill="url(#paint1_linear_5778_74909)"
        stroke="black"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 16.5 13.5913"
          to="45 34.5 36.05659"
          dur="0.3s"
          fill="freeze"
        />
      </rect>
      <circle
        cx="60.0889"
        cy="39.2511"
        r="11.5204"
        stroke="black"
        strokeWidth="0.959189"
      >
        <animate
          attributeName="cx"
          from="44.0889"
          to="38.1889"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="34.2511"
          to="30.2511"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <defs>
        <linearGradient
          id="paint0_linear_5778_74909"
          x1="18.9708"
          y1="-8.7631"
          x2="57.4868"
          y2="-20.7406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5778_74909"
          x1="8.35487"
          y1="-0.762859"
          x2="46.8708"
          y2="-12.7403"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5778_74909"
          x1="43.2139"
          y1="18.5011"
          x2="67.7321"
          y2="10.8031"
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
