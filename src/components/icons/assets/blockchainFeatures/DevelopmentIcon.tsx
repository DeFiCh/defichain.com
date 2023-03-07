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
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M30.327 39.0353L13.4224 9.76172L47.2263 9.75863L30.327 39.0353Z"
          to="M31.9773 24.1232L17.5438 49.1228L3.11027 24.1232L31.9773 24.1232Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
      <path
        d="M44.5148 16.9836L26.072 48.9275L7.62911 16.9836L44.5148 16.9836Z"
        stroke="#A6A6A6"
        strokeWidth="0.87718"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M43.5298 20.8457L53.815 38.6601L33.2446 38.6601L43.5298 20.8457Z"
          to="M44.5148 16.9836L26.072 48.9275L7.62911 16.9836L44.5148 16.9836Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
      <path
        d="M33.0886 44.3463L13.8861 11.0866L52.2911 11.0866L33.0886 44.3463Z"
        fill={`url('#${id}')`}
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M17.2781 20.8457L27.5633 38.6601L6.99293 38.6601L17.2781 20.8457Z"
          to="M33.0886 44.3463L13.8861 11.0866L52.2911 11.0866L33.0886 44.3463Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
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
  const { className } = props;
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
        d="M17.8055 50L2.61233 23.6846L32.9987 23.6846L17.8055 50Z"
        fill="url(#paint0_linear_4754_52211)"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M17.8055 50L2.61233 23.6846L32.9987 23.6846L17.8055 50Z"
          to="M30.327 39.0353L13.4224 9.76172L47.2263 9.75863L30.327 39.0353Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
      <path
        d="M26.3337 49.8047L7.13117 16.545L45.5362 16.545L26.3337 49.8047Z"
        fill="url(#paint1_linear_4754_52211)"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M26.3337 49.8047L7.13117 16.545L45.5362 16.545L26.3337 49.8047Z"
          to="M43.5298 20.8457L53.815 38.6601L33.2446 38.6601L43.5298 20.8457Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
      <path
        d="M33.3508 44.3463L14.1483 11.0866L52.5533 11.0866L33.3508 44.3463Z"
        fill="url(#paint2_linear_4754_52211)"
      >
        <animate
          attributeName="d"
          attributeType="XML"
          from="M33.3508 44.3463L14.1483 11.0866L52.5533 11.0866L33.3508 44.3463Z"
          to="M17.2781 20.8457L27.5633 38.6601L6.99293 38.6601L17.2781 20.8457Z"
          begin="0s"
          dur="0.3s"
          fill="freeze"
        />
      </path>
      <defs>
        <linearGradient
          id="paint0_linear_4754_52211"
          x1="42.4762"
          y1="62.7922"
          x2="6.63131"
          y2="74.0464"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4754_52211"
          x1="57.5147"
          y1="65.9726"
          x2="12.2107"
          y2="80.1967"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4754_52211"
          x1="64.5318"
          y1="60.5142"
          x2="19.2278"
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
