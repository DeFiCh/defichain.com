import { SVGProps } from "react";

export function VarietyIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  const { id, className } = props;
  return (
    <svg
      width="80"
      height="50"
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="23.5714" cy="24.5011" r="23.0714" stroke="#A6A6A6" />
      <path
        id="variety-icon-poly-mouse-out"
        d="M55 0L80 25L55 50L30 25L55 0Z"
        fill={`url('#${id}')`}
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M24.5 14.9194L33.7946 24.259L24.5 33.5985L15.2054 24.259L24.5 14.9194Z"
          to="M55 0L80 25L55 50L30 25L55 0Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
      <defs>
        <linearGradient
          id={id}
          x1="19.8437"
          y1="-18.2292"
          x2="70.9235"
          y2="-34.2666"
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

export function VarietyIconHover(props: SVGProps<SVGSVGElement>): JSX.Element {
  const { className } = props;
  return (
    <svg
      width="80"
      height="51"
      viewBox="0 0 80 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <circle
          cx="23.5714"
          cy="24.5921"
          r="23.0714"
          fill="url(#paint0_linear_4754_52336)"
        />
        <circle
          cx="23.5714"
          cy="24.5921"
          r="23.0714"
          stroke="url(#paint1_linear_4754_52336)"
        />
      </g>
      <path
        id="variety-icon-poly"
        d="M30.7071 25.0909L55 0.79805L79.2929 25.0909L55 49.3838L30.7071 25.0909Z"
        fill="black"
        stroke="url(#paint2_linear_4754_52336)"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M30.7071 25.0909L55 0.79805L79.2929 25.0909L55 49.3838L30.7071 25.0909Z"
          to="M24.5 14.9194L33.7946 24.259L24.5 33.5985L15.2054 24.259L24.5 14.9194Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
      <defs>
        <linearGradient
          id="paint0_linear_4754_52336"
          x1="-9.57589"
          y1="-16.1669"
          x2="38.585"
          y2="-31.2879"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4754_52336"
          x1="-9.57589"
          y1="-16.1669"
          x2="38.585"
          y2="-31.2879"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4754_52336"
          x1="19.8437"
          y1="-18.1382"
          x2="70.9235"
          y2="-34.1757"
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
