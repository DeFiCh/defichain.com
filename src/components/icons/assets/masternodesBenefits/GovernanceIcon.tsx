import { SVGProps } from "react";

export function GovernanceIcon(props: SVGProps<SVGSVGElement>) {
  const { id, className } = props;
  return (
    <svg
      width="64"
      height="50"
      viewBox="0 0 64 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.0404 25L38.3332 0.707107L62.6261 25L38.3332 49.2929L14.0404 25Z"
        stroke="#D9D9D9"
      />
      <ellipse
        cx="14.1665"
        cy="25.8333"
        rx="14.1667"
        ry="14.1667"
        fill={`url('#${id}')`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="-5.75533"
          y1="1.33677"
          x2="23.1898"
          y2="-7.75112"
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

export function GovernanceIconHover(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="64"
      height="51"
      viewBox="0 0 64 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M38.3332 0.0909424L63.3332 25.0909L38.3332 50.0909L13.3333 25.0909L38.3332 0.0909424Z"
        fill="url(#paint0_linear_5602_70145)"
      />
      <ellipse
        cx="14.1664"
        cy="25.9242"
        rx="14.1667"
        ry="14.1667"
        fill="url(#paint1_linear_5602_70145)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5602_70145"
          x1="3.17701"
          y1="-18.1382"
          x2="54.2567"
          y2="-34.1757"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5602_70145"
          x1="-5.75545"
          y1="1.42771"
          x2="23.1897"
          y2="-7.66017"
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
