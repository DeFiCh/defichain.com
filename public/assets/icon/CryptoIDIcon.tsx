export function CryptoIDIcon({
  className,
  width = 40,
  height = 40,
  xlinkhref,
}: {
  className: string;
  width?: number;
  height?: number;
  xlinkhref: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_2712_213390"
            transform="translate(0.0043335) scale(0.0104167)"
          />
        </pattern>
        <image
          id="image0_2712_213390"
          width="420"
          height="96"
          xlinkHref={xlinkhref}
        />
      </defs>
    </svg>
  );
}
