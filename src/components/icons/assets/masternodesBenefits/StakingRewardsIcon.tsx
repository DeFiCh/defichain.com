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
        x="49.5"
        y="0.590942"
        width="49"
        height="49"
        transform="rotate(90 49.5 0.590942)"
        fill="url(#paint0_linear_6317_95)"
        stroke="black"
      />
      <rect
        x="39.5"
        y="10.5909"
        width="30.6667"
        height="30.6667"
        transform="rotate(90 39.5 10.5909)"
        fill="url(#paint1_linear_6317_95)"
        stroke="black"
      />
      <rect
        x="31.1665"
        y="18.9243"
        width="14"
        height="14"
        transform="rotate(90 31.1665 18.9243)"
        fill="url(#paint2_linear_6317_95)"
        stroke="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6317_95"
          x1="39.8438"
          y1="-18.1382"
          x2="90.9235"
          y2="-34.1757"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6317_95"
          x1="33.5677"
          y1="-1.4542"
          x2="65.9182"
          y2="-11.6112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_6317_95"
          x1="28.6196"
          y1="12.9556"
          x2="43.9436"
          y2="8.14433"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
      </defs>
    </svg>

    // will comment out animated svg at the moment
    // <svg
    //   width="50"
    //   height="51"
    //   viewBox="0 0 50 51"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    // >
    //   <rect
    //     width="50"
    //     height="50"
    //     transform="translate(0 0.0909424)"
    //     fill="url(#paint0_linear_5601_70136)"
    //   />
    //   <rect
    //     x="49.5"
    //     y="0.590942"
    //     width="49"
    //     height="49"
    //     transform="rotate(90 49.5 0.590942)"
    //     stroke="black"
    //   />
    //   <rect
    //     x="49.5"
    //     y="0.590942"
    //     width="40.6667"
    //     height="40.6667"
    //     transform="rotate(90 49.5 0.590942)"
    //     fill="url(#paint1_linear_5601_70136)"
    //     stroke="black"
    //   />
    //   <rect
    //     id="staking-reward-icon-small-square"
    //     x="49.5"
    //     y="0.590942"
    //     width="29"
    //     height="29"
    //     transform="rotate(90 49.5 0.590942)"
    //     fill="url(#paint2_linear_5601_70136)"
    //     stroke="red"
    //   />
    //   <defs>
    //     <linearGradient
    //       id="paint0_linear_5601_70136"
    //       x1="-10.1563"
    //       y1="-18.2292"
    //       x2="40.9235"
    //       y2="-34.2666"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#EC008C" />
    //       <stop offset="0.846071" stopColor="#5B10FF" />
    //       <stop offset="1" stopColor="#0468D6" />
    //     </linearGradient>
    //     <linearGradient
    //       id="paint1_linear_5601_70136"
    //       x1="41.5365"
    //       y1="-15.1"
    //       x2="84.1029"
    //       y2="-28.4646"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#EC008C" />
    //       <stop offset="0.846071" stopColor="#5B10FF" />
    //       <stop offset="1" stopColor="#0468D6" />
    //     </linearGradient>
    //     <linearGradient
    //       id="paint2_linear_5601_70136"
    //       x1="43.9063"
    //       y1="-10.8466"
    //       x2="74.5541"
    //       y2="-20.469"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#EC008C" />
    //       <stop offset="0.846071" stopColor="#5B10FF" />
    //       <stop offset="1" stopColor="#0468D6" />
    //     </linearGradient>
    //   </defs>
    // </svg>
  );
}
