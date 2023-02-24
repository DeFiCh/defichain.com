import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RxChevronDown } from "react-icons/rx";
import { VscGlobe } from "react-icons/vsc";

export default function LanguageDropdownV2(): JSX.Element {
  const router = useRouter();
  const languages = [
    { locale: "en-US", name: "EN" },
    { locale: "de", name: "DE" },
    { locale: "fr", name: "FR" },
    { locale: "zh-Hans", name: "简体中文" },
    { locale: "zh-Hant", name: "繁體中文" },
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
      className="relative w-[90px] md:w-full lg:w-auto flex lg:p-0"
      data-testid="SiteLangDropdown"
    >
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Button className="bg-dark-100 text-dark-1000 px-4 py-2 rounded text-sm w-full focus:outline-none flex flex-row justify-center items-center">
          <VscGlobe className="pr-[5px] flex-shrink-0" size={20} />
          {selectedLanguage.name}
          <RxChevronDown className="pl-[9px] flex-shrink-0" size={20} />
        </Listbox.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="absolute left-0 w-full lg:w-32 z-50"
        >
          <div className="absolute right-0 w-full -translate-y-full bg-white lg:mt-8 rounded text-center text-gray-700 text-sm border shadow-lg border-gray-200">
            <Listbox.Options className="focus:outline-none">
              {languages.map((language) => (
                <div className="border-b" key={language.locale}>
                  <Listbox.Option
                    key={language.locale}
                    value={language}
                    className="p-2 hover:bg-gray-100 cursor-pointer focus:outline-none"
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
  );
}
