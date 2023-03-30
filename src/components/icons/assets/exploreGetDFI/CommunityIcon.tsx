export function CommunityIcon({
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
      <ellipse
        cx="44.0509"
        cy="46.0909"
        rx="20.0509"
        ry="3"
        fill={`url('#${id}')`}
      />
      <rect
        y="0.681911"
        width="12.7061"
        height="12.7061"
        transform="matrix(0.731435 0.681911 -0.731435 0.681911 44.5496 8.30785)"
        stroke="#D9D9D9"
      />
      <rect
        y="0.681911"
        width="12.7061"
        height="12.7061"
        transform="matrix(0.731435 0.681911 -0.731435 0.681911 44.5496 25.8996)"
        stroke="#D9D9D9"
      />
      <rect
        y="0.681911"
        width="12.7061"
        height="12.7061"
        transform="matrix(0.731435 0.681911 -0.731435 0.681911 44.5496 17.3079)"
        stroke="#D9D9D9"
      />
      <defs>
        <linearGradient
          id={id}
          x1="15.8543"
          y1="40.9034"
          x2="24.1834"
          y2="23.4253"
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

export function CommunityIconHover({
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
      <ellipse
        cx="44.0509"
        cy="46.0909"
        rx="20.0509"
        ry="3"
        fill="url(#paint3_linear_5778_74925)"
      >
        <animate
          attributeName="rx"
          from="20.0509"
          to="6"
          dur="0.3s"
          fill="freeze"
        />
        <animate attributeName="ry" from="3" to="6" dur="0.3s" fill="freeze" />
        <animate
          attributeName="cx"
          from="44.0509"
          to="44.0509"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="cy"
          from="46.0909"
          to="18.0509"
          dur="0.3s"
          fill="freeze"
        />
      </ellipse>
      <rect
        y="0.681911"
        width="13.7061"
        height="13.7061"
        transform="matrix(0.731435 0.681911 -0.731435 0.681911 44.5496 8.30785)"
        fill="url(#paint0_linear_5778_74925)"
        stroke="black"
      >
        <animate
          attributeName="y"
          from="0.681911"
          to="3"
          dur="0.3s"
          fill="freeze"
        />
        <animate attributeName="x" from="0" to="16" dur="0.3s" fill="freeze" />
      </rect>
      <rect
        y="0.681911"
        width="13.7061"
        height="13.7061"
        transform="matrix(0.731435 0.681911 -0.731435 0.681911 44.5496 25.8996)"
        fill="url(#paint1_linear_5778_74925)"
        stroke="black"
      >
        <animate
          attributeName="y"
          from="0.681911"
          to="3.5"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="x"
          from="0"
          to="-10.5"
          dur="0.3s"
          fill="freeze"
        />
      </rect>
      <rect
        y="0.681911"
        width="13.7061"
        height="13.7061"
        transform="matrix(0.731435 0.681911 -0.731435 0.681911 44.5496 17.3079)"
        fill="url(#paint2_linear_5778_74925)"
        stroke="black"
      >
        <animate
          attributeName="y"
          from="0.681911"
          to="10.5"
          dur="0.3s"
          fill="freeze"
        />
        <animate attributeName="x" from="0" to="10" dur="0.3s" fill="freeze" />
      </rect>
      <defs>
        <linearGradient
          id="paint0_linear_5778_74925"
          x1="2.78405"
          y1="4.99702"
          x2="12.218"
          y2="-9.39324"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5778_74925"
          x1="2.78405"
          y1="4.99702"
          x2="10.218"
          y2="25.39324"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5778_74925"
          x1="2.78405"
          y1="-1.99702"
          x2="17.218"
          y2="-7.39324"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_5778_74925"
          x1="35.584"
          y1="4.71594"
          x2="47.8431"
          y2="0.866954"
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
