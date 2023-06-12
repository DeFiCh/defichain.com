import { SVGProps } from "react";

export function ScalableEcosystemIcon(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="46"
      height="50"
      viewBox="0 0 46 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32.9267 13.5123L44.4147 25.0003L32.9267 36.4883L21.4387 25.0003L32.9267 13.5123Z"
        stroke="#D9D9D9"
      />
      <path
        d="M20.122 26.317L31.61 37.805L20.122 49.293L8.634 37.805L20.122 26.317Z"
        stroke="#D9D9D9"
      />
      <path
        d="M20.122 0.707107L31.61 12.1951L20.122 23.6831L8.634 12.1951L20.122 0.707107Z"
        stroke="#D9D9D9"
      />
      <circle
        cx="7.62195"
        cy="24.6952"
        r="7.62195"
        fill="url(#paint0_linear_3812_4017)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3812_4017"
          x1="0"
          y1="24.6952"
          x2="15.2506"
          y2="24.6952"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF00FF" />
          <stop offset="1" stopColor="#EC0C8D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
