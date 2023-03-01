export function MediaAssetsIcon({
  className,
  width = 41,
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
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M31.9999 5H8.66659C6.82564 5 5.33325 6.49238 5.33325 8.33333V31.6667C5.33325 33.5076 6.82564 35 8.66659 35H31.9999C33.8409 35 35.3333 33.5076 35.3333 31.6667V8.33333C35.3333 6.49238 33.8409 5 31.9999 5Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M14.4999 16.6667C15.8806 16.6667 16.9999 15.5474 16.9999 14.1667C16.9999 12.786 15.8806 11.6667 14.4999 11.6667C13.1192 11.6667 11.9999 12.786 11.9999 14.1667C11.9999 15.5474 13.1192 16.6667 14.4999 16.6667Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M35.3333 25L27 16.6667L8.66663 35"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
