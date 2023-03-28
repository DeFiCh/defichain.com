export function CollateralIcon({
  className,
  width = 50,
  height = 51,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        y1="-0.483145"
        x2="21.0462"
        y2="-0.483145"
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 2.12671 50.0909)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <path
        d="M16.1965 34.9747L16.1965 0.0910118"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <path
        d="M49.4373 34.9746L15.6438 34.9747"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <ellipse
        cx="24.2555"
        cy="32.028"
        rx="10.537"
        ry="10.5049"
        fill="url(#paint0_linear_5802_154)"
      />
      <rect
        x="1.00024"
        y="15.2073"
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
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 34.7939 16.3707)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <line
        y1="-0.483145"
        x2="21.0352"
        y2="-0.483145"
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 1.79663 16.0292)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <line
        y1="-0.483145"
        x2="21.0462"
        y2="-0.483145"
        transform="matrix(0.695794 -0.718241 0.695794 0.718241 34.7937 50.0909)"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <line
        x1="48.7937"
        y1="1.25452"
        x2="48.7937"
        y2="34.9754"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <path
        d="M49.4373 0.672119L15.6438 0.672243"
        stroke="#D9D9D9"
        strokeWidth="0.96629"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5802_154"
          x1="9.43785"
          y1="13.8632"
          x2="30.9551"
          y2="7.08684"
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
  width = 49,
  height = 51,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse
        cx="23.2555"
        cy="32.0279"
        rx="10.537"
        ry="10.5049"
        fill="url(#paint0_linear_5778_74897)"
      />
      <path
        d="M0.000244141 15.2073H33.7937V50.091H0.000244141V15.2073Z"
        fill="url(#paint1_linear_5778_74897)"
      />
      <ellipse
        cx="7.09077"
        cy="7.09076"
        rx="7.09077"
        ry="7.09076"
        transform="matrix(0.499999 0.866026 -0.866025 0.500001 19.2815 23)"
        fill="black"
      />
      <path
        d="M14.5 0L48.5 0.5L33.6877 15.5L0 15L14.5 0Z"
        fill="url(#paint2_linear_5778_74897)"
      />
      <path
        d="M33.2881 15.4192L48.5 0.5L48.7881 35.212L33.7881 50.212L33.2881 15.4192Z"
        fill="url(#paint3_linear_5778_74897)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5778_74897"
          x1="8.43785"
          y1="13.8631"
          x2="29.9551"
          y2="7.08671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5778_74897"
          x1="-6.86406"
          y1="2.48925"
          x2="27.8509"
          y2="-8.06951"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5778_74897"
          x1="-9.85156"
          y1="-5.65104"
          x2="17.8469"
          y2="-32.8625"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_5778_74897"
          x1="30.1396"
          y1="-17.6242"
          x2="47.3702"
          y2="-19.3109"
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
