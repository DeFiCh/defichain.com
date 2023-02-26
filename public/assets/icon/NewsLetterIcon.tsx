export function NewsLetterIcon({
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
        d="M36.6667 20H26.6667L23.3333 25H16.6667L13.3333 20H3.33334"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M9.08334 8.51667L3.33334 20V30C3.33334 30.8841 3.68453 31.7319 4.30965 32.357C4.93477 32.9821 5.78261 33.3333 6.66667 33.3333H33.3333C34.2174 33.3333 35.0652 32.9821 35.6904 32.357C36.3155 31.7319 36.6667 30.8841 36.6667 30V20L30.9167 8.51667C30.6407 7.96132 30.2153 7.49396 29.6883 7.16714C29.1612 6.84032 28.5535 6.667 27.9333 6.66667H12.0667C11.4465 6.667 10.8388 6.84032 10.3117 7.16714C9.78471 7.49396 9.3593 7.96132 9.08334 8.51667Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
