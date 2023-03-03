import { SVGProps } from "react";

export function ImmutabilityIcon(props: SVGProps<SVGSVGElement>) {
  const { id, className } = props;
  return (
    <svg
      width="68"
      height="50"
      viewBox="0 0 68 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
        fill={`url('#${id}')`}
      />
      <defs>
        <linearGradient
          id={id}
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

export function ImmutabilityIconHover(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="68"
      height="50"
      viewBox="0 0 68 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="immutability-icon-middle"
        d="M1.3886 24.999L33.9286 12.4397L66.4685 24.999L33.9286 37.5583L1.3886 24.999Z"
        stroke="url(#paint0_linear_4153_20735)"
      />
      <path
        d="M1.3886 36.9048L33.9286 24.3455L66.4685 36.9048L33.9286 49.4641L1.3886 36.9048Z"
        stroke="url(#paint1_linear_4153_20735)"
      />
      <path
        id="immutability-icon-top"
        d="M33.9286 0L67.8571 13.0952L33.9286 26.1905L0 13.0952L33.9286 0Z"
        fill="url(#paint2_linear_4153_20735)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4153_20735"
          x1="-13.7835"
          y1="2.35517"
          x2="32.046"
          y2="-34.9255"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4153_20735"
          x1="-13.7835"
          y1="14.2609"
          x2="32.046"
          y2="-23.0198"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4153_20735"
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
