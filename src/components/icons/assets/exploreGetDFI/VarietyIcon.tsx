export function VarietyIcon({
  className,
  width = 88,
  height = 57,
  id,
}: {
  className?: string;
  width?: number;
  height?: number;
  id?: string;
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
        x="19.5"
        y="17.5909"
        width="45"
        height="32"
        rx="3.5"
        stroke="#D9D9D9"
      />
      <rect
        x="15.5"
        y="26.5909"
        width="24"
        height="10"
        rx="1.5"
        stroke="#D9D9D9"
      />
      <circle cx="60.166" cy="18.0909" r="12" fill={`url('#${id}')`} />
      <defs>
        <linearGradient
          id={id}
          x1="43.291"
          y1="-2.65906"
          x2="67.8093"
          y2="-10.357"
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

export function VarietyIconHover({
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
        x="19.5"
        y="17.5909"
        width="45"
        height="32"
        rx="3.5"
        fill="url(#paint0_linear_5778_74889)"
        stroke="url(#paint1_linear_5778_74889)"
      />
      <rect
        x="15.5"
        y="26.5909"
        width="24"
        height="10"
        rx="1.5"
        fill="url(#paint2_linear_5778_74889)"
        stroke="black"
      />
      <circle cx="60.166" cy="18.0909" r="12" fill="black">
        <animate attributeName="r" from="12" to="4" dur="0.3s" fill="freeze" />
        <animate
          attributeName="cx"
          from="45.166"
          to="21.166"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="12.0909"
          to="31.166"
          dur="0.3s"
          fill="freeze"
        />
      </circle>
      <defs>
        <linearGradient
          id="paint0_linear_5778_74889"
          x1="9.65625"
          y1="5.05969"
          x2="52.9832"
          y2="-13.9025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5778_74889"
          x1="9.65625"
          y1="5.05969"
          x2="52.9832"
          y2="-13.9025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5778_74889"
          x1="9.92187"
          y1="22.0805"
          x2="28.5131"
          y2="8.81443"
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
