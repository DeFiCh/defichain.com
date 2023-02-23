export function MasternodeIcon({
  className,
  width = 40,
  height = 40,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M35.364 26.6667V13.3333C35.3634 12.7488 35.2091 12.1747 34.9166 11.6686C34.624 11.1625 34.2036 10.7423 33.6973 10.45L22.0307 3.78333C21.5239 3.49077 20.9491 3.33675 20.364 3.33675C19.7789 3.33675 19.2041 3.49077 18.6973 3.78333L7.03068 10.45C6.52445 10.7423 6.10398 11.1625 5.81145 11.6686C5.51892 12.1747 5.36461 12.7488 5.36401 13.3333V26.6667C5.36461 27.2512 5.51892 27.8253 5.81145 28.3314C6.10398 28.8375 6.52445 29.2577 7.03068 29.55L18.6973 36.2167C19.2041 36.5092 19.7789 36.6633 20.364 36.6633C20.9491 36.6633 21.5239 36.5092 22.0307 36.2167L33.6973 29.55C34.2036 29.2577 34.624 28.8375 34.9166 28.3314C35.2091 27.8253 35.3634 27.2512 35.364 26.6667Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M5.81323 11.5999L20.3632 20.0166L34.9132 11.5999"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M20.364 36.8V20"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
