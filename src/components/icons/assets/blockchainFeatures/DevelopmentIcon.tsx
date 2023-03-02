import { SVGProps } from "react";

export function DevelopmentIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="56"
      height="50"
      viewBox="0 0 56 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.9773 24.1232L17.5438 49.1228L3.11027 24.1232L31.9773 24.1232Z"
        stroke="#A6A6A6"
        strokeWidth="0.87718"
      />
      <path
        d="M44.5148 16.9836L26.072 48.9275L7.62911 16.9836L44.5148 16.9836Z"
        stroke="#A6A6A6"
        strokeWidth="0.87718"
      />
      <path
        d="M33.0886 44.3463L13.8861 11.0866L52.2911 11.0866L33.0886 44.3463Z"
        fill="url(#paint0_linear_416_19918)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_416_19918"
          x1="64.2696"
          y1="60.5142"
          x2="18.9656"
          y2="74.7383"
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
