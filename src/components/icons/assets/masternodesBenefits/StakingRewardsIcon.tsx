import { SVGProps } from "react";

export function StakingRewardsIcon(props: SVGProps<SVGSVGElement>) {
  const { id, className } = props;
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="49.5"
        y="0.5"
        width="49"
        height="49"
        transform="rotate(90 49.5 0.5)"
        stroke="#D9D9D9"
      />
      <rect
        x="49.5"
        y="0.5"
        width="40.6667"
        height="40.6667"
        transform="rotate(90 49.5 0.5)"
        stroke="#D9D9D9"
      />
      <rect
        x="49.5"
        y="0.5"
        width="29"
        height="29"
        transform="rotate(90 49.5 0.5)"
        fill={`url('#${id}')`}
        stroke="#D9D9D9"
      />
      <defs>
        <linearGradient
          id={id}
          x1="43.9063"
          y1="-10.9375"
          x2="74.5541"
          y2="-20.56"
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

export function StakingRewardsIconHover(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width="50"
        height="50"
        transform="translate(0 0.0909424)"
        fill="url(#paint0_linear_5601_70136)"
      />
      <rect
        x="49.5"
        y="0.590942"
        width="49"
        height="49"
        transform="rotate(90 49.5 0.590942)"
        stroke="black"
      />
      <rect
        x="49.5"
        y="0.590942"
        width="40.6667"
        height="40.6667"
        transform="rotate(90 49.5 0.590942)"
        fill="url(#paint1_linear_5601_70136)"
        stroke="black"
      />
      <rect
        x="49.5"
        y="0.590942"
        width="29"
        height="29"
        transform="rotate(90 49.5 0.590942)"
        fill="url(#paint2_linear_5601_70136)"
        stroke="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5601_70136"
          x1="-10.1563"
          y1="-18.2292"
          x2="40.9235"
          y2="-34.2666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5601_70136"
          x1="41.5365"
          y1="-15.1"
          x2="84.1029"
          y2="-28.4646"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5601_70136"
          x1="43.9063"
          y1="-10.8466"
          x2="74.5541"
          y2="-20.469"
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
