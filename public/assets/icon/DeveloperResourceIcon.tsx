export function DeveloperResourceIcon({
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
        d="M20.6666 33.3333H35.6666"
        stroke="#A6A6A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M28.1666 5.83332C28.8297 5.17028 29.7289 4.79779 30.6666 4.79779C31.1309 4.79779 31.5907 4.88924 32.0196 5.06692C32.4486 5.24459 32.8383 5.50502 33.1666 5.83332C33.4949 6.16163 33.7554 6.55138 33.933 6.98033C34.1107 7.40928 34.2022 7.86903 34.2022 8.33332C34.2022 8.79762 34.1107 9.25736 33.933 9.68631C33.7554 10.1153 33.4949 10.505 33.1666 10.8333L12.3333 31.6667L5.66663 33.3333L7.33329 26.6667L28.1666 5.83332Z"
        stroke="#A6A6A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
