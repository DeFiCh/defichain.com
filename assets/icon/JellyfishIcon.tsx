export function JellyfishIcon({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9954 7V7.00918C27.1681 7.00918 32.9908 12.8227 33 20.0046H26.4977C26.4977 16.4136 23.5864 13.5023 19.9954 13.5023C16.4044 13.5023 13.5023 16.4136 13.5023 19.9954H7C7 12.8135 12.8135 7 19.9954 7ZM7 26.4977V33C14.1727 33 19.9954 27.1773 19.9954 20.0046C19.9954 27.1865 25.8181 33 32.9908 33V26.4977C29.3999 26.4977 26.4885 23.5955 26.4885 20.0046H19.9954H13.4931C13.4931 23.5955 10.591 26.4977 7 26.4977Z"
        fill="#A6A6A6"
      />
    </svg>
  );
}
