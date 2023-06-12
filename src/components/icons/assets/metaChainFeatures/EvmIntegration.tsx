import { SVGProps } from "react";

export function EvmIntegrationIcon(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="44"
      height="52"
      viewBox="0 0 44 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.4082 42.3266L1 31.6123L21.9184 21.4082L42.8367 31.6123L21.4082 42.3266Z"
        fill="url(#paint0_linear_3812_4003)"
      />
      <path
        d="M1.51025 10.8116V31.6122L21.9184 41.8163L42.3266 31.6122V10.8116L21.9184 1L1.51025 10.8116Z"
        stroke="#D9D9D9"
      />
      <path
        d="M1.51025 10.8115L21.526 21.0156L42.3266 10.8115"
        stroke="#D9D9D9"
      />
      <path d="M1 36.7143L21.5259 46.9183L43.3469 35.6938" stroke="#D9D9D9" />
      <path d="M1 40.7958L21.5259 50.9999L43.3469 39.7754" stroke="#D9D9D9" />
      <path d="M21.5256 21.0156V41.8163" stroke="#D9D9D9" />
      <path d="M21.5256 1.62793V22.4286" stroke="#D9D9D9" />
      <defs>
        <linearGradient
          id="paint0_linear_3812_4003"
          x1="-7.49809"
          y1="13.7817"
          x2="26.177"
          y2="-7.36415"
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
