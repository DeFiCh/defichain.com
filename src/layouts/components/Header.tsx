import classNames from "classnames";
import { Container } from "@components/commons/Container";
import DeFiChainLogo from "@components/icons/DeFiChainLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdMenu } from "react-icons/md";
import { IoChevronDown, IoCloseCircleOutline } from "react-icons/io5";
import { GradientButton } from "@components/commons/Buttons";
import { useTranslation } from "next-i18next";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { useDeviceDetect, ViewPort } from "@hooks/useDeviceDetect";
// import { useWhaleApiClient } from "../context/WhaleContext";
import { Explore } from "./Explore";
import { Build } from "./Build";
import { Community } from "./Community";

export const HoverContext = createContext<any>(undefined);

export const DropDownContext = createContext<any | undefined>(undefined);

export function Header(): JSX.Element {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  // const [dfiPrice, setDfiPrice] = useState<string>("0"); // TODO: uncomment when price is required
  const router = useRouter();
  // const api = useWhaleApiClient();
  const [isHoverOn, setIsHoverOn] = useState(false);
  const [dropDownState, setDropDownState] = useState<
    MobileTabletDropDownState | undefined
  >(undefined);
  const { t } = useTranslation("layout");
  const ref = useRef<HTMLDivElement>(null);
  const dimension = useWindowDimensions();
  const [isCursorOnHeader, setIsCursorOnHeader] = useState(false);
  const device = useDeviceDetect();

  useEffect(() => {
    function routeChangeStart(): void {
      setIsMenuActive(false);
    }

    // TODO: uncomment if DFI oracle price is required
    // void api.prices.get("DFI", "USD").then((priceTicker) => {
    //   setDfiPrice(priceTicker.price.aggregated.amount);
    // });

    router.events.on("routeChangeStart", routeChangeStart);
    return () => router.events.off("routeChangeStart", routeChangeStart);
  }, []);

  useEffect(() => {
    if (isMenuActive) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isMenuActive]);

  useEffect(() => {
    if (dimension.width >= 1024 && isMenuActive) {
      setIsMenuActive(false);
    }
  }, [dimension.width, isMenuActive]);

  const tabletMobileDropDownObj = useMemo(
    () => ({
      dropDownState,
      setDropDownState,
      isMenuActive,
      setIsMenuActive,
    }),
    [dropDownState, setDropDownState, isMenuActive, setIsMenuActive]
  );

  const desktopContextObj = useMemo(
    () => ({
      isHoverOn,
      setIsHoverOn,
      headerHeight,
      isCursorOnHeader,
    }),
    [isHoverOn, headerHeight, isCursorOnHeader]
  );

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
    }
  }, [ref, dimension]);

  useEffect(() => {
    const header = document.querySelector(
      ".mouse-cursor-gradient-tracking"
    ) as HTMLElement;

    function onMouseMove(e: MouseEvent) {
      const headerRect = header.getBoundingClientRect();
      const x = (e.clientX - headerRect.left) / headerRect.width;
      const y = (e.clientY - headerRect.top) / headerRect.height;
      const gradient = `radial-gradient(circle at ${x * 100}% ${
        y * 100
      }%, #ff00af 0%, #A6A6A6 15%)`;
      header.style.backgroundImage = gradient;
      if (e.clientY >= headerRect.bottom - 10) {
        setIsCursorOnHeader(false);
      } else {
        setIsCursorOnHeader(true);
      }
    }

    function onMouseLeave() {
      header.style.backgroundImage =
        "linear-gradient(to right, #A6A6A6, #A6A6A6)";
    }

    if (header && device === ViewPort.DESKTOP) {
      header.addEventListener("mousemove", onMouseMove);
      header.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      header.removeEventListener("mousemove", onMouseMove);
      header.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [device, dimension]);

  return (
    <header
      ref={ref}
      className={classNames(
        "sticky top-0 left-0 right-0 w-full bg-dark-00 z-50 transition-opacity ease-in-out duration-500",
        isHoverOn || isMenuActive
          ? "header-dropdown-bg border-b-0"
          : "border-b-[0.1px] border-b-dark-200"
      )}
    >
      <Container className="lg:pb-0 md:pt-14 md:pb-6 py-[30.69px] flex items-center justify-between 2xl:mx-[120px]">
        <div className="flex flex-row w-full">
          <Link
            href={{ pathname: "/" }}
            passHref
            className="grow flex items-center cursor-pointer hover:text-primary-500 h-full lg:pt-4 lg:py-0"
            data-testid="Header.SiteLogo"
          >
            <DeFiChainLogo
              fill="#FFFFFF"
              className="w-[159px] h-9 md:w-[194.33px] lg:block lg:w-40 lg:h-full md:h-[44px]"
            />
          </Link>

          <HoverContext.Provider value={desktopContextObj}>
            <DesktopNavbar />
          </HoverContext.Provider>

          <div className="hidden md:flex h-full flex lg:pt-4">
            <GradientButton
              className="py-3 px-5 bg-dark-00"
              buttonText={t("header.navbar.getDfi")}
              href="/explore/dfi#get-dfi"
              onClick={() => {
                if (isMenuActive) {
                  setIsMenuActive(false);
                }
              }}
            />
          </div>
        </div>

        <div className="lg:hidden ml-[27px]">
          {isMenuActive ? (
            <IoCloseCircleOutline
              className="cursor-pointer hover:text-brand-100 active:opacity-70 h-8 w-8 text-dark-1000"
              onClick={async () => {
                setIsMenuActive(false);
              }}
              data-testid="Header.CloseMenu"
            />
          ) : (
            <MdMenu
              className="cursor-pointer hover:text-brand-100 active:opacity-70 h-8 w-8 text-dark-1000"
              onClick={() => {
                setIsMenuActive(true);
              }}
              data-testid="header-open-menu"
            />
          )}
        </div>
      </Container>
      <Transition
        show={isMenuActive}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <DropDownContext.Provider value={tabletMobileDropDownObj}>
          <TabletMobileMenu />
        </DropDownContext.Provider>
      </Transition>
    </header>
  );
}
function DesktopNavbar(): JSX.Element {
  return (
    <div className="mouse-cursor-gradient-tracking w-full hidden lg:flex flex-row justify-center items-end gap-x-1">
      {MenuItems.map((item, key) => (
        <DesktopMenu key={key} item={item} />
      ))}
    </div>
  );
}

// Getting the key of the enum MobileTabletDropDownState for immutable testIds
const getEnumKey = (value) => {
  const keyIndex = Object.values(MobileTabletDropDownState).indexOf(value);
  return Object.keys(MobileTabletDropDownState)[keyIndex].toLowerCase();
};

function DesktopMenu({ item }: { item: string }) {
  const [isShowing, setIsShowing] = useState(false);
  const { headerHeight, setIsHoverOn, isCursorOnHeader, isHoverOn } =
    useContext(HoverContext);
  const DesktopDropDown = dropDownMapping[item.toLowerCase()];
  const { t } = useTranslation("layout");
  const router = useRouter();
  // removing any spaces in item
  const trimmedItem = item.replace(/\s/g, "-");

  const getTestId = getEnumKey(item);

  return (
    <Menu
      className="lg:pb-10 cursor-pointer lg:w-[136px] text-center"
      data-testid={`header-desktop-dropdown-item-${getTestId}`}
      as="div"
      onMouseLeave={() => {
        setIsShowing(false);
        setIsHoverOn!(false);
      }}
      onMouseEnter={() => {
        setIsShowing(true);
        setIsHoverOn!(true);
      }}
    >
      <Menu.Button
        onClick={() => {
          setIsShowing(!isShowing);
        }}
        className={classNames(
          { "text-dark-700": isSafariBelow164() },
          {
            "!text-brand-100":
              (isShowing && !isCursorOnHeader) ||
              (isSafariBelow164() && isHoverOn && isShowing),
          },
          {
            "!text-brand-100":
              !isCursorOnHeader &&
              !isHoverOn &&
              router.pathname.includes(trimmedItem.toLowerCase()),
          }
        )}
      >
        <div
          data-testid={`header-coming-soon-tag-${trimmedItem}`}
          className={classNames("flex flex-col")}
        >
          {item === MobileTabletDropDownState.BUILD && <ComingSoonTag />}
          {item === MobileTabletDropDownState.META_CHAIN ? (
            <Link
              data-testid="header-nav-elem-test"
              href="/metachain"
              rel="noreferrer"
              target="_self"
            >
              {t(`header.navbar.${trimmedItem.toLowerCase()}`)}
            </Link>
          ) : (
            t(`header.navbar.${trimmedItem.toLowerCase()}`)
          )}
        </div>
      </Menu.Button>

      {(item === MobileTabletDropDownState.EXPLORE ||
        item === MobileTabletDropDownState.COMMUNITY) && (
        <Container className="cursor-auto text-left">
          <Transition
            style={{ top: headerHeight - 1 }}
            className="absolute inset-x-0 header-dropdown-bg w-screen"
            data-testid={`header-tag-${trimmedItem}`}
            show={isShowing}
            enter="transition ease duration-500 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease duration-200 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items as="div" data-testid="Desktop.HeaderLink.More.Items">
              <Container className="pt-[48.77px] pb-16">
                <DesktopDropDown />
              </Container>
              <div className="accent-gradient-1 h-[0.5px]" />
            </Menu.Items>
          </Transition>
        </Container>
      )}
    </Menu>
  );
}

function TabletMobileMenu() {
  const { t } = useTranslation("layout");
  const { dropDownState, isMenuActive, setIsMenuActive } =
    useContext(DropDownContext);
  const ref = useRef<HTMLDivElement>(null);
  const dimension = useWindowDimensions();
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = `${
        dimension.height - ref.current.offsetTop
      }px`;
    }
  }, [ref, dimension]);
  return (
    <div
      ref={ref}
      className="flex flex-col lg:hidden overflow-y-scroll no-scrollbar"
      data-testid="TabletMenu"
    >
      <div className="flex flex-col grow">
        {MenuItems.map((item, key) => {
          const DropDown = dropDownMapping[item.toLowerCase()];
          return (
            <div key={key}>
              <Container className={classNames({ "mt-5": key === 0 })}>
                <TabletMobileDropDown label={item}>
                  <DropDown />
                </TabletMobileDropDown>
              </Container>

              {key !== MenuItems.length - 1 && (
                <hr className="bg-dark-200 border-0 h-[0.5px]" />
              )}
            </div>
          );
        })}

        <Container
          className={classNames(
            "block md:hidden justify-center mb-[56px]",
            dropDownState === MobileTabletDropDownState.COMMUNITY
              ? "mt-[52px]"
              : "mt-[68px]"
          )}
        >
          <GradientButton
            className="py-3 bg-dark-00"
            borderClassName="w-full"
            buttonText={t("header.navbar.getDfi")}
            href="/explore/dfi#get-dfi"
            onClick={() => {
              if (isMenuActive) {
                setIsMenuActive(false);
              }
            }}
          />
        </Container>

        <div className="mt-auto accent-gradient-1 h-[0.5px]" />
      </div>
    </div>
  );
}

function TabletMobileDropDown({
  children,
  label,
}: {
  children?: JSX.Element;
  label: MobileTabletDropDownState;
}) {
  const { dropDownState, setDropDownState } = useContext(DropDownContext);
  const { t } = useTranslation("layout");
  const router = useRouter();
  const trimmedLabel = label.replace(/\s/g, "-");

  const getTestId = getEnumKey(label);

  useEffect(() => {
    if (router.pathname.includes(trimmedLabel.toLowerCase())) {
      setDropDownState(trimmedLabel);
    }
  }, [label, router, setDropDownState]);

  return (
    <div className="flex flex-col">
      <div
        className={classNames(
          "flex flex-row cursor-pointer items-center py-5",
          {
            "pointer-events-none": label === MobileTabletDropDownState.BUILD,
          }
        )}
        onClick={async () => {
          if (dropDownState === trimmedLabel) {
            setDropDownState(undefined);
          } else if (label !== MobileTabletDropDownState.META_CHAIN) {
            setDropDownState(trimmedLabel);
          }
        }}
      >
        <div
          data-testid={`header-tablet-menu-item-${getTestId}`}
          className={classNames(
            "grow font-semibold md:text-lg text-base",
            dropDownState === trimmedLabel ? "text-brand-100" : "text-dark-700"
          )}
        >
          {label === MobileTabletDropDownState.META_CHAIN ? (
            <Link
              data-testid="header-nav-elem-test"
              href="/metachain"
              rel="noreferrer"
              target="_self"
            >
              {t(`header.navbar.${trimmedLabel.toLowerCase()}`)}
            </Link>
          ) : (
            t(`header.navbar.${trimmedLabel.toLowerCase()}`)
          )}
        </div>

        {label === MobileTabletDropDownState.BUILD && <ComingSoonTag />}
        {label !== MobileTabletDropDownState.META_CHAIN && (
          <IoChevronDown
            size={20}
            className={classNames("text-dark-1000", {
              "rotate-180": dropDownState === trimmedLabel,
            })}
          />
        )}
      </div>

      <Transition
        show={dropDownState === trimmedLabel}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:pb-9 py-4 mb-4">{children}</div>
      </Transition>
    </div>
  );
}

function ComingSoonTag() {
  const { t } = useTranslation("layout");
  return (
    <div
      className={classNames(
        "bg-dark-200 rounded-[10px] lg:py-0.5 py-[6px] px-2",
        "font-bold text-dark-1000 text-[10px] leading-3 tracking-[0.08em]",
        "lg:mr-0 mr-1"
      )}
      data-testid="header-coming-soon-tag"
    >
      {t("header.comingSoon")}
    </div>
  );
}

enum MobileTabletDropDownState {
  EXPLORE = "Explore",
  BUILD = "Build",
  META_CHAIN = "Meta Chain",
  COMMUNITY = "Community",
}

const MenuItems = [
  MobileTabletDropDownState.EXPLORE,
  MobileTabletDropDownState.BUILD,
  MobileTabletDropDownState.META_CHAIN,
  MobileTabletDropDownState.COMMUNITY,
];

const dropDownMapping = {
  explore: Explore,
  build: Build,
  community: Community,
};

function isSafariBelow164() {
  const { userAgent } = navigator;
  const isSafari =
    userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Chrome") === -1;
  const version = isSafari ? parseFloat(userAgent.split("Version/")[1]) : 0;
  return isSafari && version < 16.4;
}
