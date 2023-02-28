import classNames from "classnames";
import { Container } from "@components/commons/Container";
import { DeFiChainLogo } from "@components/icons/DeFiChainLogo";
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
import { useWhaleApiClient } from "../context/WhaleContext";
import { Explore } from "./Explore";
import { Ecosystem } from "./Ecosystem";
import { Build } from "./Build";
import { Community } from "./Community";

export const HoverContext = createContext<any>(undefined);

export const DropDownContext = createContext<any | undefined>(undefined);

export function Header(): JSX.Element {
  const [menu, setMenu] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [dfiPrice, setDfiPrice] = useState<string>("0");
  const router = useRouter();
  const api = useWhaleApiClient();
  const [isHoverOn, setIsHoverOn] = useState(false);
  const [dropDownState, setDropDownState] = useState<
    MobileTabletDropDownState | undefined
  >(undefined);
  const { t } = useTranslation("layout");
  const ref = useRef<HTMLDivElement>(null);
  const dimension = useWindowDimensions();

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
    if (menu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [menu]);

  const tabletMobileDropDownObj = useMemo(
    () => ({
      dropDownState,
      setDropDownState,
      dfiPrice,
    }),
    [dropDownState, setDropDownState, dfiPrice]
  );

  const desktopContextObj = useMemo(
    () => ({
      isHoverOn,
      setIsHoverOn,
      headerHeight,
    }),
    [isHoverOn, setIsHoverOn, headerHeight]
  );

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
    }
  }, [ref, dimension]);

  return (
    <header
      ref={ref}
      className={classNames(
        "sticky top-0 left-0 right-0 w-full bg-dark-00 z-50 transition-opacity ease-in-out duration-500",
        isHoverOn || menu
          ? "header-dropdown-bg border-b-0 "
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
              className="py-3 bg-dark-00"
              buttonText={`${t("header.navbar.buy")} DFI $${Number(
                dfiPrice
              ).toFixed(2)}`}
            />
          </div>
        </div>

        <div className="lg:hidden ml-[27px]">
          {menu ? (
            <IoCloseCircleOutline
              className="cursor-pointer hover:text-brand-100 active:opacity-70 h-8 w-8 text-dark-1000"
              onClick={async () => {
                setMenu(false);
              }}
              data-testid="Header.CloseMenu"
            />
          ) : (
            <MdMenu
              className="cursor-pointer hover:text-brand-100 active:opacity-70 h-8 w-8 text-dark-1000"
              onClick={() => {
                setMenu(true);
              }}
              data-testid="Header.OpenMenu"
            />
          )}
        </div>
      </Container>
      <Transition
        show={menu}
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
    <div className="w-full hidden lg:grid lg:grid-cols-[66px_100px_44px_100px] justify-center gap-x-[52px]">
      {MenuItems.map((item, key) => (
        <DesktopMenu key={key} item={item} />
      ))}
    </div>
  );
}

function DesktopMenu({ item }: { item: string }) {
  const [isShowing, setIsShowing] = useState(false);
  const { headerHeight, setIsHoverOn } = useContext(HoverContext);
  const DesktopDropDown = dropDownMapping[item.toLowerCase()];
  const { t } = useTranslation("layout");
  return (
    <Menu
      className="lg:pt-6 lg:pb-10 cursor-pointer"
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
        as="div"
        onClick={() => {
          setIsShowing(!isShowing);
        }}
        className={classNames("text-dark-700 text-lg font-semibold", {
          "accent-dfc-gradient-text bg-clip-text text-transparent": isShowing,
        })}
      >
        {t(`header.navbar.${item.toLowerCase()}`)}
      </Menu.Button>

      <Container className="cursor-auto">
        <Transition
          style={{ top: headerHeight - 1 }}
          className="absolute inset-x-0 header-dropdown-bg w-screen"
          show={isShowing}
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease duration-500 transform"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 "
        >
          <Menu.Items as="div" data-testid="Desktop.HeaderLink.More.Items">
            <Container className="pt-[48.77px] pb-16">
              <DesktopDropDown />
            </Container>
            <div className="accent-gradient-1 h-[0.5px]" />
          </Menu.Items>
        </Transition>
      </Container>
    </Menu>
  );
}

function TabletMobileMenu() {
  const { t } = useTranslation("layout");
  const { dfiPrice, dropDownState } = useContext(DropDownContext);
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
                <hr className="card-outline-2 border-0 h-[0.5px] w-[990px]" />
              )}
            </div>
          );
        })}

        <Container
          className={classNames(
            "block md:hidden flex justify-center mb-[56px]",
            dropDownState === MobileTabletDropDownState.COMMUNITY
              ? "mt-[52px]"
              : "mt-[68px]"
          )}
        >
          <GradientButton
            className="py-3 bg-dark-00"
            borderClassName="w-full"
            buttonText={`${t("header.navbar.buy")} DFI $${Number(
              dfiPrice
            ).toFixed(2)}`}
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

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row cursor-pointer items-center py-5"
        onClick={async () => {
          if (dropDownState === label) {
            setDropDownState(undefined);
          } else {
            setDropDownState(label);
          }
        }}
      >
        <div
          className={classNames(
            "grow font-semibold md:text-lg text-base",
            dropDownState === label ? "text-brand-100" : "text-dark-700"
          )}
        >
          {label}
        </div>

        <IoChevronDown
          size={20}
          className={classNames("text-dark-1000", {
            "rotate-180": dropDownState === label,
          })}
        />
      </div>

      <Transition
        show={dropDownState === label}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:pb-9 py-4 mb-4 ">{children}</div>
      </Transition>
    </div>
  );
}

enum MobileTabletDropDownState {
  EXPLORE = "Explore",
  ECOSYSTEM = "Ecosystem",
  BUILD = "Build",
  COMMUNITY = "Community",
}

const MenuItems = [
  MobileTabletDropDownState.EXPLORE,
  MobileTabletDropDownState.ECOSYSTEM,
  MobileTabletDropDownState.BUILD,
  MobileTabletDropDownState.COMMUNITY,
];

const dropDownMapping = {
  explore: Explore,
  ecosystem: Ecosystem,
  build: Build,
  community: Community,
};
