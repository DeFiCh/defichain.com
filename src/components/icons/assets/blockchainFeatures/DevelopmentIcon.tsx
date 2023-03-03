import { SVGProps } from "react";

export function DevelopmentIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  const { id, className } = props;
  return (
    <svg
      width="56"
      height="50"
      viewBox="0 0 56 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
        fill={`url('#${id}')`}
      />
      <defs>
        <linearGradient
          id={id}
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

export function DevelopmentIconHover(
  props: SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="61"
      height="50"
      viewBox="0 0 61 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.2781 20.8457L27.5633 38.6601L6.99293 38.6601L17.2781 20.8457Z"
        fill="url(#paint0_linear_4153_20760)"
        stroke="url(#paint1_linear_4153_20760)"
        strokeWidth="0.77209"
      />
      <path
        d="M43.5298 20.8457L53.815 38.6601L33.2446 38.6601L43.5298 20.8457Z"
        fill="url(#paint2_linear_4153_20760)"
        stroke="url(#paint3_linear_4153_20760)"
        strokeWidth="0.77209"
      />
      <path
        d="M30.327 39.0353L13.4224 9.76172L47.2263 9.75863L30.327 39.0353Z"
        fill="url(#paint4_linear_4153_20760)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4153_20760"
          x1="45.1125"
          y1="28.2537"
          x2="39.2179"
          y2="54.6915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4153_20760"
          x1="45.1125"
          y1="28.2537"
          x2="39.2179"
          y2="54.6915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4153_20760"
          x1="71.3642"
          y1="28.2538"
          x2="65.4696"
          y2="54.6915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4153_20760"
          x1="71.3642"
          y1="28.2538"
          x2="65.4696"
          y2="54.6915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_4153_20760"
          x1="57.7737"
          y1="53.2637"
          x2="17.8985"
          y2="65.7873"
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
