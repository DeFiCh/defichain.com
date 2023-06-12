import { SVGProps } from "react";

export function LowSwitchingCostsIcon(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="45"
      height="50"
      viewBox="0 0 45 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="23.1241"
        cy="26.0142"
        r="15.6085"
        fill="url(#paint0_linear_3812_4039)"
      />
      <circle cx="11.6779" cy="5.20283" r="4.70283" stroke="#D9D9D9" />
      <rect
        x="5.64063"
        y="21.3326"
        width="17.5653"
        height="17.5653"
        transform="rotate(14.2232 5.64063 21.3326)"
        stroke="#D9D9D9"
      />
      <rect
        x="27.0972"
        y="8.55381"
        width="17.5653"
        height="17.5653"
        transform="rotate(14.2232 27.0972 8.55381)"
        stroke="#D9D9D9"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3812_4039"
          x1="1.17468"
          y1="-0.975428"
          x2="33.0658"
          y2="-10.9882"
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
