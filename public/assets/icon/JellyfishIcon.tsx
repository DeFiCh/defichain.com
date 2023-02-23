export function JellyfishIcon({
  className,
  width = 26,
  height = 26,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9954 0V0.00918252C20.1681 0.00918252 25.9908 5.82268 26 13.0046H19.4977C19.4977 9.41363 16.5864 6.5023 12.9954 6.5023C9.40445 6.5023 6.50229 9.41364 6.50229 12.9954H0C0 5.81349 5.81349 0 12.9954 0ZM0 19.4977V26C7.17273 26 12.9954 20.1773 12.9954 13.0046C12.9954 20.1865 18.8181 26 25.9908 26V19.4977C22.3999 19.4977 19.4885 16.5955 19.4885 13.0046H12.9954H6.49311C6.49311 16.5955 3.59096 19.4977 0 19.4977Z"
        fill="#A6A6A6"
      />
    </svg>
  );
}
