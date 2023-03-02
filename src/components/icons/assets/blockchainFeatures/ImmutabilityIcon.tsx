import { SVGProps } from "react";

export function ImmutabilityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="68"
      height="50"
      viewBox="0 0 68 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.3886 24.999L33.9286 12.4398L66.4685 24.999L33.9286 37.5583L1.3886 24.999Z"
        stroke="#A6A6A6"
      />
      <path
        d="M1.3886 36.9048L33.9286 24.3455L66.4685 36.9048L33.9286 49.4641L1.3886 36.9048Z"
        stroke="#A6A6A6"
      />
      <path
        d="M33.9286 0L67.8571 13.0952L33.9286 26.1905L0 13.0952L33.9286 0Z"
        fill="url(#paint0_linear_416_19910)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_416_19910"
          x1="-13.7835"
          y1="-9.54861"
          x2="32.046"
          y2="-46.8293"
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
