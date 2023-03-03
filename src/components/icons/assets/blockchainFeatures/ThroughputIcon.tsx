import { SVGProps } from "react";

export function ThroughputIcon(props: SVGProps<SVGSVGElement>) {
  const { id, className } = props;
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="14.5" width="35" height="35" stroke="#A6A6A6" />
      <rect x="1" y="0.5" width="49" height="49" stroke="#A6A6A6" />
      <rect x="1.5" y="31" width="18" height="18" fill={`url('#${id}')`} />
      <defs>
        <linearGradient
          id={id}
          x1="-2.15625"
          y1="24.4375"
          x2="16.2325"
          y2="18.664"
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

export function ThroughputIconHover(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.5"
        y="0.5"
        width="49"
        height="49"
        fill="url(#paint1_linear_4153_20709)"
        stroke="black"
      />
      <g className="throughputMedSquare">
        <rect
          x="0.5"
          y="14.5"
          width="35"
          height="35"
          fill="none"
          stroke="black"
        >
          <animateTransform
            attributeName="fill"
            values="url(#paint2_linear_4153_20709)"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      <g className="throughputSmallSquare">
        <rect
          x="0.5"
          y="49.5"
          width="19"
          height="19"
          transform="rotate(-90 0.5 49.5)"
          fill="url(#paint3_linear_4153_20709)"
          stroke="black"
        />
      </g>

      <defs>
        <linearGradient
          id="paint1_linear_4153_20709"
          x1="-10.1563"
          y1="-18.2292"
          x2="40.9235"
          y2="-34.2666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4153_20709"
          x1="-7.3125"
          y1="0.874999"
          x2="29.4649"
          y2="-10.672"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4153_20709"
          x1="-4.0625"
          y1="42.7083"
          x2="16.3694"
          y2="36.2934"
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
