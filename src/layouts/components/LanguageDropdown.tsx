import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

export function LanguageDropdown (): JSX.Element {
  const router = useRouter()
  const languages = [
    { locale: 'en-US', name: 'English' },
    { locale: 'zh-Hans', name: '简体中文' },
    { locale: 'zh-Hant', name: '繁體中文' }
  ]
  const [selectedLanguage, setSelectedLanguage] = useState(languages.find(language => language.locale === router.locale) ?? languages[0])

  useEffect(() => {
    if (selectedLanguage.locale !== router.locale) {
      void router.push(router.pathname, undefined, { locale: selectedLanguage.locale })
    }
  }, [selectedLanguage])

  return (
    <div className='relative flex w-full' data-testid='SiteLangDropdown'>
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Button className='text-lg hover:text-primary-500 w-full p-2'>{selectedLanguage.name}</Listbox.Button>
        <Transition
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
          className='absolute left-0 w-full lg:w-32 z-50'
        >
          <div
            className='relative bg-white mt-12 rounded text-center text-gray-700 text-lg border shadow-lg border-gray-200'
          >
            <Listbox.Options>
              {languages.map((language) => (
                <div className='border-b' key={language.locale}>
                  <Listbox.Option
                    key={language.locale}
                    value={language}
                    className='p-2 hover:bg-gray-100 cursor-pointer'
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
  )
}
