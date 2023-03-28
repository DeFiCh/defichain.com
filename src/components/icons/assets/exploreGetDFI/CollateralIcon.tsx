export function CollateralIcon({
  className,
  width = 88,
  height = 57,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        y1="-0.483145"
        x2="21.0462"
        y2="-0.483145"
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 21.1267 53.0909)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <path
        d="M35.1965 37.9747L35.1965 3.09101"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <path
        d="M68.4373 37.9746L34.6438 37.9747"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <ellipse
        cx="43.2555"
        cy="35.028"
        rx="10.537"
        ry="10.5049"
        fill="url(#paint0_linear_5778_74894)"
      />
      <rect
        x="20.0002"
        y="18.2073"
        width="33.7935"
        height="34.8837"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
        strokeLinejoin="round"
      />
      <line
        y1="-0.483145"
        x2="21.0462"
        y2="-0.483145"
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 53.7939 19.3707)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <line
        y1="-0.483145"
        x2="21.0352"
        y2="-0.483145"
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 20.7966 19.0292)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <line
        y1="-0.483145"
        x2="21.0462"
        y2="-0.483145"
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 53.7937 53.0909)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <line
        x1="67.7937"
        y1="4.25452"
        x2="67.7937"
        y2="37.9754"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <path
        d="M68.4373 3.67212L34.6438 3.67224"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5778_74894"
          x1="28.4378"
          y1="16.8632"
          x2="49.9551"
          y2="10.0868"
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

export function CollateralIconHover({
  className,
  width = 88,
  height = 57,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx="43.2555"
        cy="35.0279"
        rx="10.537"
        ry="10.5049"
        fill="url(#paint0_linear_5778_74896)"
      />
      <path
        d="M20.0002 18.2073H53.7937V53.091H20.0002V18.2073Z"
        fill="url(#paint1_linear_5778_74896)"
      />
      <ellipse
        cx="7.09077"
        cy="7.09076"
        rx="7.09077"
        ry="7.09076"
        transform="matrix(0.499999 0.866026 -0.866025 0.500001 39.2815 26)"
        fill="black"
      />
      <path
        d="M34.5 3L68.5 3.5L53.6877 18.5L20 18L34.5 3Z"
        fill="url(#paint2_linear_5778_74896)"
      />
      <path
        d="M53.2881 18.4192L68.5 3.5L68.7881 38.212L53.7881 53.212L53.2881 18.4192Z"
        fill="url(#paint3_linear_5778_74896)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5778_74896"
          x1="28.4378"
          y1="16.8631"
          x2="49.9551"
          y2="10.0867"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5778_74896"
          x1="13.1359"
          y1="5.48925"
          x2="47.8509"
          y2="-5.06951"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5778_74896"
          x1="10.1484"
          y1="-2.65104"
          x2="37.8469"
          y2="-29.8625"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_5778_74896"
          x1="50.1396"
          y1="-14.6242"
          x2="67.3702"
          y2="-16.3109"
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
