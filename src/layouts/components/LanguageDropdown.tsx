import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RxChevronDown } from "react-icons/rx";
import { VscGlobe } from "react-icons/vsc";
import classNames from "classnames";

export function LanguageDropdown(): JSX.Element {
  const router = useRouter();
  const languages = [
    { locale: "en-US", name: "English", display: "EN" },
    { locale: "de", name: "Deutsch", display: "DE" },
    // { locale: "fr", name: "Français", display: "Français" },
    // { locale: "zh-Hans", name: "简体中文", display: "简体中文" },
    // { locale: "zh-Hant", name: "繁體中文", display: "繁體中文" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((language) => language.locale === router.locale) ??
      languages[0]
  );

  useEffect(() => {
    if (selectedLanguage.locale !== router.locale) {
      // eslint-disable-next-line no-void
      void router.push(router.pathname, undefined, {
        locale: selectedLanguage.locale,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // Adding router as props will have unnecessary refresh
  }, [selectedLanguage]);

  return (
    <div
      className="relative lg:p-0 hover:accent-gradient-1 rounded-[10px]"
      data-testid="SiteLangDropdown"
    >
      <div className="p-[0.5px]">
        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <Listbox.Button className="bg-dark-100 text-dark-1000 px-4 py-2 rounded-[10px] text-sm focus:outline-none flex flex-row">
            <VscGlobe className="pr-[5px] flex-shrink-0" size={20} />
            {selectedLanguage.display}
            <RxChevronDown className="pl-[9px] flex-shrink-0" size={20} />
          </Listbox.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="absolute left-0 w-full z-50"
          >
            <div className="absolute right-0 w-full top-[-48px] lg:top-[-78px] lg:right-0 -translate-y-full lg:mt-8 text-center text-dark-1000 text-sm shadow-lg bg-dark-100 rounded-[10px]">
              <Listbox.Options className="focus:outline-none">
                {languages.map((language, index) => (
                  <div
                    className={classNames(
                      "border-dark-200 text-left pl-3 hover:bg-dark-200 active:opacity-70",
                      {
                        "border-b": languages.length - 1 !== index,
                        "hover:rounded-t-[10px]": index === 0,
                        "hover:rounded-b-[10px]":
                          languages.length - 1 === index,
                      }
                    )}
                    key={language.locale}
                  >
                    <Listbox.Option
                      key={language.locale}
                      value={language}
                      className="py-2 cursor-pointer focus:outline-none"
                    >
                      {language.name}
                    </Listbox.Option>
                  </div>
                ))}
              </Listbox.Options>
            </div>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
}
