import { SVGProps } from "react";

export function LowTransactionFeesIcon(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="42"
      height="51"
      viewBox="0 0 42 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 19.6154V40L21 50L41 40V19.6154L21 10L1 19.6154Z"
        stroke="#D9D9D9"
        strokeWidth="1.25"
      />
      <path
        d="M1 19.6152L20.6154 29.6152L41 19.6152"
        stroke="#D9D9D9"
        strokeWidth="1.25"
      />
      <path d="M20.6155 29.6152V49.9998" stroke="#D9D9D9" strokeWidth="1.25" />
      <circle cx="21" cy="10" r="10" fill="url(#paint0_linear_3812_4028)" />
      <defs>
        <linearGradient
          id="paint0_linear_3812_4028"
          x1="6.9375"
          y1="-7.29167"
          x2="27.3694"
          y2="-13.7066"
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
