export function LPIcon({
  className,
  width = 88,
  height = 57,
  id,
}: {
  className?: string;
  width?: number;
  height?: number;
  id: string;
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
      <path
        d="M44.3224 28.7881L44.3224 4.97114C44.3224 4.97114 49.833 5.4572 53.833 6.91538C57.833 8.37355 61.1789 12.624 61.1789 12.624L44.3224 28.7881Z"
        fill={`url('#${id}')`}
      />
      <path
        d="M61.3576 12.6073L27.0041 46.003"
        stroke="#D9D9D9"
        strokeWidth="0.972118"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.0279 28.7892C68.0279 41.6487 57.2963 52.12 44 52.12C37.7202 52.12 32.0126 49.7843 27.7374 45.9644L61.6691 12.9786C65.6187 17.1395 68.0279 22.6962 68.0279 28.7892ZM27.0252 45.3015L43.6361 29.1537L27.8657 11.5001C23.0142 15.7729 19.9721 21.9425 19.9721 28.7892C19.9721 35.2314 22.6654 41.0742 27.0252 45.3015ZM28.6125 10.869L43.9127 27.9963L43.9115 5.46354L44.2731 5.4598C44.1822 5.45882 44.0911 5.45832 44 5.45832C38.1395 5.45832 32.7772 7.49261 28.6125 10.869ZM44.8859 5.47387L44.887 27.9376L60.9858 12.2876C56.836 8.25878 51.1736 5.69485 44.8859 5.47387ZM69 28.7892C69 42.2113 57.8071 53.0921 44 53.0921C30.1929 53.0921 19 42.2113 19 28.7892C19 15.367 30.1929 4.48621 44 4.48621C57.8071 4.48621 69 15.367 69 28.7892Z"
        fill="#D9D9D9"
      />
      <defs>
        <linearGradient
          id={id}
          x1="51.8277"
          y1="41.6016"
          x2="31.9309"
          y2="37.6512"
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

export function LPIconHover({
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
      <path
        d="M44.3224 28.7881L44.3224 4.97114C44.3224 4.97114 49.833 5.4572 53.833 6.91538C57.833 8.37355 61.1789 12.624 61.1789 12.624L44.3224 28.7881Z"
        fill="url(#paint0_linear_5778_74931)"
      />
      <path
        d="M61.3576 12.6073L27.0041 46.003"
        stroke="black"
        strokeWidth="0.972118"
      />
      <mask id="path-3-inside-1_5778_74931" fill="white">
        <path d="M69 28.7892C69 42.2113 57.8071 53.0921 44 53.0921C30.1929 53.0921 19 42.2113 19 28.7892C19 15.367 30.1929 4.48621 44 4.48621C57.8071 4.48621 69 15.367 69 28.7892Z" />
      </mask>
      <path
        d="M69 28.7892C69 42.2113 57.8071 53.0921 44 53.0921C30.1929 53.0921 19 42.2113 19 28.7892C19 15.367 30.1929 4.48621 44 4.48621C57.8071 4.48621 69 15.367 69 28.7892Z"
        fill="url(#paint1_linear_5778_74931)"
      />
      <path
        d="M68.03 28.7892C68.03 41.6499 57.2974 52.1221 44 52.1221V54.0621C58.3168 54.0621 69.97 42.7727 69.97 28.7892H68.03ZM44 52.1221C30.7026 52.1221 19.97 41.6499 19.97 28.7892H18.03C18.03 42.7727 29.6832 54.0621 44 54.0621V52.1221ZM19.97 28.7892C19.97 15.9284 30.7026 5.45621 44 5.45621V3.51621C29.6832 3.51621 18.03 14.8056 18.03 28.7892H19.97ZM44 5.45621C57.2974 5.45621 68.03 15.9284 68.03 28.7892H69.97C69.97 14.8056 58.3168 3.51621 44 3.51621V5.45621Z"
        fill="#D9D9D9"
        mask="url(#path-3-inside-1_5778_74931)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.6361 29.1537L27.5346 11.1294L28.2656 10.4807L43.9128 27.9964L43.9116 5.46358L44.8859 5.45349L44.8871 27.9377L61.0056 12.2685L61.7026 12.9461L27.3491 46.3419L26.6521 45.6643L43.6361 29.1537Z"
        fill="#D9D9D9"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5778_74931"
          x1="51.8277"
          y1="41.6016"
          x2="31.9309"
          y2="37.6512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5778_74931"
          x1="8.84375"
          y1="-13.2347"
          x2="59.6582"
          y2="-29.6464"
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
