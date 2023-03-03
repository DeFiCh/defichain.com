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
  return (
    <svg
      width="68"
      height="29"
      viewBox="0 0 68 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.45241 14.3213L33.9286 2.41341L66.4047 14.3213L33.9286 26.2293L1.45241 14.3213Z"
        stroke="url(#paint0_linear_4153_20743)"
      />
      <path
        d="M1.45241 16.2022L33.9286 4.29427L66.4047 16.2022L33.9286 28.1101L1.45241 16.2022Z"
        stroke="url(#paint1_linear_4153_20743)"
      />
      <path
        d="M33.9286 0L67.8571 12.4405L33.9286 24.881L0 12.4405L33.9286 0Z"
        fill="url(#paint2_linear_4153_20743)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4153_20743"
          x1="-13.7835"
          y1="-7.19032"
          x2="30.1558"
          y2="-44.8146"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4153_20743"
          x1="-13.7835"
          y1="-5.30946"
          x2="30.1558"
          y2="-42.9337"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4153_20743"
          x1="-13.7835"
          y1="-9.07118"
          x2="30.1558"
          y2="-46.6954"
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
