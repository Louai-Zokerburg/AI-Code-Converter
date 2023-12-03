import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import { languages } from './data/languages';

function index({ defaultLang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // const [language, setLanguage] = useState(defaultLang?.toLowerCase());

  console.log(`Default Lang: ${defaultLang}`);
  // console.log(`Language State: ${language}`);

  const filteredOptions = languages.filter((language) =>
  defaultLang?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const selectLanguage = (selectedLanguage) => {
    setLang(selectedLanguage?.toLowerCase());
    // setLanguage(selectedLanguage?.toLowerCase());
  };

  return (
    <div className='relative w-[50%]'>
      <button
        type='button'
        className='relative z-10 flex w-full justify-between bg-secondary_color_light px-4 py-2 text-sm font-medium text-text_color_light dark:bg-secondary_color_dark dark:text-text_color_dark'
        onClick={toggleDropdown}
      >
        {defaultLang}

        <MdOutlineArrowDropDown
          className={`${
            isOpen ? 'rotate-180' : 'rotate-0'
          } text-2xl text-text_color_light duration-300 dark:text-text_color_dark`}
        />
      </button>

      {isOpen && (
        <div
          className={`custom-bg custom-border absolute top-[50px] z-20 mt-2 w-full overflow-hidden rounded-md border-2`}
        >
          <div className='custom-border flex items-center justify-start border-b pl-3'>
            <div className=''>
              <HiOutlineSearch
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </div>
            <input
              type='text'
              className='w-full border-none bg-transparent py-3 pl-2 pr-3 text-sm leading-5 text-text_color_light placeholder-text_color_light caret-text_color_light focus:outline-none dark:text-text_color_dark dark:placeholder-text_color_dark dark:caret-text_color_dark'
              placeholder='Search language'
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>

          <ul className='custom-scrollbar max-h-[50vh] overflow-y-scroll py-1'>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((language) => (
                <li
                  key={language}
                  className='cursor-pointer px-4 py-2 text-sm text-text_color_light hover:bg-btn_hover_color_light dark:text-text_color_dark hover:dark:bg-btn_hover_color_dark'
                  onClick={() => {
                    setIsOpen(false);
                    setSearchTerm('');
                    selectLanguage(language);
                  }}
                >
                  {language}
                </li>
              ))
            ) : (
              <p className='px-4 py-2 text-center text-sm text-text_color_light dark:text-text_color_dark'>
                No Match
              </p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default index;
