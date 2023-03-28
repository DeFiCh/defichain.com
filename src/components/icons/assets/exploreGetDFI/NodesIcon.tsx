export function NodesIcon({
  className,
  width = 57,
  height = 47,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="11.116"
        y="0.591064"
        width="36.6376"
        height="37"
        stroke="#D9D9D9"
      />
      <rect x="0.5" y="8.59131" width="36.6376" height="37" stroke="#D9D9D9" />
      <circle
        cx="44.0889"
        cy="34.2511"
        r="12"
        fill="url(#paint0_linear_5802_198)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5802_198"
          x1="27.2139"
          y1="13.5011"
          x2="51.7321"
          y2="5.80312"
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
  width = 57,
  height = 47,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="11.116"
        y="0.591064"
        width="36.6376"
        height="37"
        fill="url(#paint0_linear_5802_205)"
        stroke="black"
      />
      <rect
        x="0.5"
        y="8.59131"
        width="36.6376"
        height="37"
        fill="url(#paint1_linear_5802_205)"
        stroke="black"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 18.868 27.59131"
          to="45 18.868 27.59131"
          dur="0.3s"
          fill="freeze"
        />
      </rect>

      <circle
        cx="44.0889"
        cy="34.2511"
        r="11.5204"
        fill="url(#paint0_linear_5871_215)"
        stroke="black"
        strokeWidth="0.959189"
      >
        <animate
          attributeName="cx"
          from="44.0889"
          to="21.1889"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="34.2511"
          to="26.2511"
          dur="0.3s"
          fill="freeze"
        />

        {/* <animate */}
        {/*  attributeName="id" */}
        {/*  from="34.2511" */}
        {/*  to="26.2511" */}
        {/*  dur="0.3s" */}
        {/*  fill="freeze" */}
        {/* /> */}
      </circle>
      <defs>
        <linearGradient
          id="paint0_linear_5802_205"
          x1="2.97083"
          y1="-13.7631"
          x2="41.4868"
          y2="-25.7406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5802_205"
          x1="-7.64513"
          y1="-5.76286"
          x2="30.8708"
          y2="-17.7403"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5802_205"
          x1="27.2139"
          y1="13.5011"
          x2="51.7321"
          y2="5.80312"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_5853_215"
          x1="-3.93042"
          y1="-8.58435"
          x2="20.5879"
          y2="-16.2823"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>

        <linearGradient
          id="paint0_linear_5871_215"
          x1="-3.93042"
          y1="-8.58435"
          x2="20.5879"
          y2="-16.2823"
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
