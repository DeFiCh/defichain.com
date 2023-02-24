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

  useEffect(() => {
    if (menu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [menu]);

  const [isHoverOn, setIsHoverOn] = useState(false);
  const [dropDownState, setDropDownState] = useState<
    MobileTabletDropDownState | undefined
  >(undefined);

  const obj = useMemo(
    () => ({
      dropDownState,
      setDropDownState,
      dfiPrice,
    }),
    [dropDownState, setDropDownState, dfiPrice, setDfiPrice]
  );

  const desktopContextObj = useMemo(
    () => ({
      isHoverOn,
      setIsHoverOn,
      headerHeight,
    }),
    [isHoverOn, setIsHoverOn, headerHeight, setHeaderHeight]
  );

  const { t } = useTranslation("layout");

  const ref = useRef<HTMLDivElement>(null);
  const dimension = useWindowDimensions();
  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight);
    }
  }, [ref, dimension]);

  return (
    <div
      ref={ref}
      className={classNames(
        "z-50",
        menu ? "header-dropdown-bg" : "bg-opacity-0"
      )}
    >
      <header
        className={classNames(
          "sticky lg:static relative w-full top-0",
          { "shadow-lg": !atTop },
          isHoverOn ? "bg-opacity-0" : "bg-dark-00"
        )}
      >
        <Container className="md:pt-14 lg:pb-0 md:pb-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex w-full">
              <Link
                href={{ pathname: "/" }}
                passHref
                className="grow flex items-center cursor-pointer hover:text-primary-500 h-full lg:pt-4 lg:py-0 md:py-[15.28px] py-[14.69px]"
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
              <div className="hidden md:flex h-full flex  lg:pt-4">
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
                  onClick={() => setMenu(false)}
                  data-testid="Header.CloseMenu"
                />
              ) : (
                <MdMenu
                  className="cursor-pointer hover:text-brand-100 active:opacity-70 h-8 w-8 text-dark-1000"
                  onClick={() => setMenu(true)}
                  data-testid="Header.OpenMenu"
                />
              )}
            </div>
          </div>
        </Container>
      </header>

      {menu && (
        <div className="w-full lg:hidden">
          <DropDownContext.Provider value={obj}>
            <TabletAndMobileMenu />
          </DropDownContext.Provider>
        </div>
      )}
    </div>
  );
}
function DesktopNavbar(): JSX.Element {
  return (
    <div className="w-full hidden lg:flex justify-center gap-x-[52px]">
      {MenuItems.map((item, key) => (
        <MenuItemsDropdown key={key} item={item} />
      ))}
    </div>
  );
}

function MenuItemsDropdown({ item }: { item: string }) {
  const [isShowing, setIsShowing] = useState(false);
  const { headerHeight, setIsHoverOn } = useContext(HoverContext);
  const DropDown = dropDownMapping[item.toLowerCase()];
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
      <>
        <div className="w-auto text-center">
          <Menu.Button
            className={classNames("text-dark-700 text-lg font-semibold", {
              "accent-dfc-gradient-text bg-clip-text text-transparent":
                isShowing,
            })}
          >
            {item}
          </Menu.Button>
        </div>

        <Container className="cursor-auto">
          <Transition
            show={isShowing}
            enter="transition duration-500"
            enterFrom="ease-in"
            enterTo="ease-out"
          >
            <Menu.Items
              style={{ paddingTop: headerHeight }}
              as="div"
              data-testid="Desktop.HeaderLink.More.Items"
              className="absolute inset-x-0 z-[-1] top-0 header-dropdown-bg w-screen"
            >
              <Container className="py-20">
                <DropDown />
              </Container>
            </Menu.Items>
          </Transition>
        </Container>
      </>
    </Menu>
  );
}

function TabletAndMobileMenu() {
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
      className="flex flex-col w-screen lg:hidden overflow-y-scroll"
      data-testid="TabletMenu"
    >
      <div className="flex flex-col">
        {MenuItems.map((item, key) => {
          const DropDown = dropDownMapping[item.toLowerCase()];
          return (
            <div key={key}>
              <Container className="px-6">
                <TabletDropDown label={item}>
                  <DropDown />
                </TabletDropDown>
              </Container>
              {key !== MenuItems.length - 1 && (
                <div className="card-outline-2 h-[0.5px]" />
              )}
            </div>
          );
        })}
        <Container
          className={classNames(
            "block md:hidden w-full flex justify-center mb-[56px]",
            dropDownState === MobileTabletDropDownState.COMMUNITY
              ? "mt[84px]"
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
      </div>
    </div>
  );
}

function TabletDropDown({
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
        className="flex flex-row cursor-pointer items-center py-5 "
        onClick={() => {
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
      <div
        className={classNames(
          "mt-9 pb-10",
          dropDownState === label ? "block" : "hidden"
        )}
      >
        {children}
      </div>
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
