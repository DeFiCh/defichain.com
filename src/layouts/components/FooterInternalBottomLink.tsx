import classNames from "classnames";
import Link from "next/link";

export default function FooterInternalBottomLink(props: {
  text: string;
  pathname: string;
  testId: string;
}): JSX.Element {
  const { pathname, testId, text } = props;
  return (
    <div
      className={classNames(
        "text-xs text-gray-500 hover:accent-dfc-gradient-text cursor-pointer"
      )}
    >
      <Link href={{ pathname }} passHref data-testid={testId}>
        {text}
      </Link>
    </div>
  );
}
