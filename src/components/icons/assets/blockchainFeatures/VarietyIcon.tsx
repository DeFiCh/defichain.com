import { SVGProps } from "react";

export function VarietyIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="80"
      height="50"
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="23.5714" cy="24.5011" r="23.0714" stroke="#A6A6A6" />
      <path
        d="M55 0L80 25L55 50L30 25L55 0Z"
        fill="url(#paint0_linear_430_25736)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_430_25736"
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
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="24.0714"
        cy="23.6855"
        rx="23.5714"
        ry="23.6855"
        fill="url(#paint0_linear_4153_20798)"
      />
      <path
        d="M24.5 14.9194L33.7946 24.259L24.5 33.5985L15.2054 24.259L24.5 14.9194Z"
        fill="black"
        stroke="url(#paint1_linear_4153_20798)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4153_20798"
          x1="-9.07589"
          y1="-17.2707"
          x2="39.1266"
          y2="-32.3319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4153_20798"
          x1="41.7917"
          y1="10.1284"
          x2="48.2632"
          y2="30.6413"
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
