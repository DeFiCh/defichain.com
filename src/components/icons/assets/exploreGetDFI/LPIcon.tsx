export function LPIcon({
  className,
  width = 50,
  height = 50,
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
      <path
        d="M25.3224 25.7881L25.3224 1.97114C25.3224 1.97114 30.833 2.4572 34.833 3.91538C38.833 5.37355 42.1789 9.62395 42.1789 9.62395L25.3224 25.7881Z"
        fill="url(#paint0_linear_5802_252)"
      />
      <path
        d="M42.3576 9.60726L8.00415 43.003"
        stroke="#D9D9D9"
        strokeWidth="0.972118"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.0279 25.7892C49.0279 38.6487 38.2963 49.12 25 49.12C18.7202 49.12 13.0126 46.7843 8.7374 42.9644L42.6691 9.97858C46.6187 14.1395 49.0279 19.6962 49.0279 25.7892ZM8.02523 42.3015L24.6361 26.1537L8.86573 8.50012C4.01418 12.7729 0.972118 18.9425 0.972118 25.7892C0.972118 32.2314 3.66542 38.0742 8.02523 42.3015ZM9.6125 7.86904L24.9127 24.9963L24.9115 2.46354L25.2731 2.4598C25.1822 2.45882 25.0911 2.45832 25 2.45832C19.1395 2.45832 13.7772 4.49261 9.6125 7.86904ZM25.8859 2.47387L25.887 24.9376L41.9858 9.28759C37.836 5.25878 32.1736 2.69485 25.8859 2.47387ZM50 25.7892C50 39.2113 38.8071 50.0921 25 50.0921C11.1929 50.0921 0 39.2113 0 25.7892C0 12.367 11.1929 1.48621 25 1.48621C38.8071 1.48621 50 12.367 50 25.7892Z"
        fill="#D9D9D9"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5802_252"
          x1="32.8277"
          y1="38.6016"
          x2="12.9309"
          y2="34.6512"
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
