import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { DeFiChainLogo } from "@components/icons/DeFiChainLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdClose, MdMenu } from "react-icons/md";
import { useWhaleApiClient } from "../context/WhaleContext";
import { BuyDFIButton } from "./BuyDFIButton";

export function Header(): JSX.Element {
  const [menu, setMenu] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [dfiPrice, setDfiPrice] = useState<string>("0");
  const router = useRouter();
  const api = useWhaleApiClient();

  useEffect(() => {
    function routeChangeStart(): void {
      setMenu(false);
    }

    void api.prices.get("DFI", "USD").then((priceTicker) => {
      setDfiPrice(priceTicker.price.aggregated.amount);
    });

    router.events.on("routeChangeStart", routeChangeStart);
    return () => router.events.off("routeChangeStart", routeChangeStart);
  }, []);

  useEffect(() => {
    function scrollHandler(): void {
      window.pageYOffset > 30 ? setAtTop(false) : setAtTop(true);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={classNames(
        "bg-dark-00 z-50 sticky top-0 md:shadow-none md:static",
        { "shadow-lg": !atTop }
      )}
    >
      <div className="border-b border-gray-100">
        <Container className="py-4 lg:py-6">
          <div className="flex items-center justify-between">
            <div className="flex w-full">
              <Link
                href={{ pathname: "/" }}
                passHref
                className="flex items-center cursor-pointer hover:text-primary-500"
                data-testid="Header.SiteLogo"
              >
                <DeFiChainLogo
                  fill="#FFFFFF"
                  className="w-32 lg:block lg:w-40 h-full"
                />
              </Link>
              <DesktopNavbar price={dfiPrice} />
            </div>
            <div className="lg:hidden">
              {menu ? (
                <MdClose
                  className="h-8 w-8 text-primary-500"
                  onClick={() => setMenu(false)}
                  data-testid="Header.CloseMenu"
                />
              ) : (
                <MdMenu
                  className="h-8 w-8 text-primary-500"
                  onClick={() => setMenu(true)}
                  data-testid="Header.OpenMenu"
                />
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
function DesktopNavbar({ price }: { price: string }): JSX.Element {
  return (
    <div className="w-full hidden lg:flex">
      <div className="w-full flex justify-center place-self-center gap-x-[37px]">
        {MenuItems.map((item) => (
          <MenuItemsDropdown item={item} />
        ))}
      </div>
      <BuyDFIButton classname="ml-6" price={price} />
    </div>
  );
}

function MenuItemsDropdown({
  item,
}: {
  item: {
    label: string;
    dropDownItems: DropDownItem[];
    testId: string;
    image?: {
      imagePath: string;
      pathname: string;
      title: string;
      subTitle: string;
      buttonText: string;
      imageContainerCustomStyle: string;
      subtitleCustomStyle?: string;
      defiChainLogo?: boolean;
    };
  };
}) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Menu
      as="div"
      className="relative"
      onMouseLeave={() => {
        setIsShowing(false);
      }}
      onMouseEnter={() => {
        setIsShowing(true);
      }}
    >
      <>
        <Menu.Button className={classNames("flex font-semibold")}>
          <div
            className={classNames("text-light-00", {
              "accent-dfc-gradient-text bg-clip-text text-transparent":
                isShowing,
            })}
          >
            {item.label}
          </div>
        </Menu.Button>
        <Transition
          show={isShowing}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            data-testid="Desktop.HeaderLink.More.Items"
            className="absolute top-6 -left-32 p-12 header-dropdown-bg border rounded-lg border-dark-300 min-h-[296px] min-w-[564px]"
          >
            <div className={classNames("flex flex-row gap-x-[134px]")}>
              <div
                className={classNames(
                  "flex gap-y-16 gap-x-[134px]",
                  item.dropDownItems.length > 1 && item.image !== undefined
                    ? "flex-col"
                    : " flex-row"
                )}
              >
                {item.dropDownItems.map((dropDownItem) => (
                  <div className="flex flex-col gap-y-5">
                    <div className="whitespace-nowrap font-bold text-dark-500">
                      {dropDownItem.title}
                    </div>
                    {dropDownItem.items.map((subItem) => (
                      <HeaderLink
                        text={subItem.label}
                        pathname={subItem.pathname}
                        className="whitespace-nowrap text-dark-1000"
                        testId="Desktop.HeaderLink.Downloads"
                      />
                    ))}
                  </div>
                ))}
              </div>
              {item.image && (
                <div
                  style={{ backgroundImage: `url(${item.image.imagePath})` }}
                  className={classNames(
                    `p-8 border border-dark-300 bg-dark rounded-[15px] flex flex-col`,
                    item.image.imageContainerCustomStyle
                  )}
                >
                  {item.image.defiChainLogo && (
                    <DeFiChainLogo fill="#FFFFFF" className="w-[140px]" />
                  )}
                  <div className="font-semibold text-light-00">
                    {item.image.title}
                  </div>
                  <div
                    className={classNames(
                      item.image.subtitleCustomStyle ??
                        "text-dark-700 max-w-[178px] mt-1"
                    )}
                  >
                    {item.image.subTitle}
                  </div>
                  <button className="mt-4 bg-light-00 w-fit py-2 px-5 rounded-[92px] text-sm font-semibold">
                    {item.image.buttonText}
                  </button>
                </div>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </>
    </Menu>
  );
}

function HeaderLink(props: {
  text: string;
  pathname: string;
  className?: string;
  testId?: string;
  targetBlank?: boolean;
}): JSX.Element {
  const router = useRouter();
  return (
    <Link
      href={{ pathname: props.pathname }}
      passHref
      className={classNames(props.className, {
        "bg-clip-text text-transparent accent-dfc-gradient-text":
          router.pathname === props.pathname,
      })}
      data-testid={props.testId}
      target={
        props.targetBlank !== undefined && props.targetBlank ? "_blank" : ""
      }
    >
      <div
        className={classNames(
          "leading-5 cursor-pointer w-fit bg-clip-text hover:text-transparent hover:accent-dfc-gradient-text",
          {
            "lg:border-b-2 border-primary-500":
              router.pathname === props.pathname,
          }
        )}
      >
        {props.text}
      </div>
    </Link>
  );
}

interface SubItems {
  label: string;
  pathname: string;
  testId: string;
}

interface DropDownItem {
  title: string;
  items: SubItems[];
}

const MenuItems = [
  {
    label: "Explore",
    dropDownItems: [
      {
        title: "GET STARTED",
        items: [
          {
            label: "$DFI",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Wallets",
          },
          {
            label: "Invest, Trade and Earn",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
          {
            label: "DEX",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Dex",
          },
          {
            label: "Masternodes",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Masternodes",
          },
          {
            label: "Wallets",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Masternodes",
          },
        ],
      },
    ],
    testId: "Desktop.HeaderLink.Explore",
    image: {
      imagePath: "/assets/img/header/header-metal-dfi-coin.png",
      pathname: "/txs",
      title: "$DFI",
      subTitle: "The integral coin of DeFiChain Ecosystem",
      buttonText: "Learn more",
      imageContainerCustomStyle:
        "w-[324px] h-[189px] bg-dark-00 bg-no-repeat bg-right-bottom",
    },
  },
  {
    label: "Build",
    dropDownItems: [
      {
        title: "DEVELOPERS",
        items: [
          {
            label: "Github ↗",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Wallets",
          },
          {
            label: "Jellyfish SDK",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
          {
            label: "Bug Bounty",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Dex",
          },
        ],
      },
      {
        title: "RESOURCES",
        items: [
          {
            label: "White Paper",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Wallets",
          },
          {
            label: "Developer Toolkit",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
          {
            label: "Media Assets",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Dex",
          },
        ],
      },
    ],
    testId: "Desktop.HeaderLink.Explore",
  },
  {
    label: "Ecosystem",
    dropDownItems: [
      {
        title: "PROJECTS",
        items: [
          {
            label: "DefiChain Block Explorer",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Wallets",
          },
          {
            label: "DefiChain Bridge",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
        ],
      },
      {
        title: "PROGRAMMES",
        items: [
          {
            label: "On Chain Governance",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Wallets",
          },
          {
            label: "$100M Accelerator Program",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
        ],
      },
    ],
    testId: "Desktop.HeaderLink.Explore",
    image: {
      imagePath: "/assets/img/header/header-jellyfish.png",
      pathname: "/txs",
      title: "",
      subTitle: "Powered by the Security of Bitcoin & Flexibililty of Ethereum",
      buttonText: "Explore",
      imageContainerCustomStyle: "w-[242px] h-[260px] rounded-[15px]",
      subtitleCustomStyle: "text-dark-1000 font-medium mt-5 mb-5 w-[178px]",
      defiChainLogo: true,
    },
  },
  {
    label: "Community",
    dropDownItems: [
      {
        title: "DEVELOPERS",
        items: [
          {
            label: "Blog",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Wallets",
          },
          {
            label: "Newsletter",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
        ],
      },
      {
        title: "SOCIALS",
        items: [
          {
            label: "Telegram",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.Wallets",
          },
          {
            label: "Reddit",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
          {
            label: "GitHub",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
          {
            label: "Youtube",
            pathname: "/txs",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
          {
            label: "Twitter",
            pathname: "https://twitter.com/defichain",
            testId: "Desktop.HeaderLink.Explore.InvestTradeEarn",
          },
        ],
      },
    ],
    testId: "Desktop.HeaderLink.Explore",
  },
];
