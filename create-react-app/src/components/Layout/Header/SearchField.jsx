import React from 'react';
import SearchIcon from 'assets/images/icons/search.svg';

const SearchField = () => {
  return <div className='w-[400px] h-14 flex rounded-full border border-[#EEE] p-1.5 overflow-hidden'>
    <input
      type="text"
      placeholder='Search...'
      className='w-full font-medium outline-none px-6 placeholder:text-dark'
    />
    <button className='w-11 h-11 bg-theme rounded-full flex items-center justify-center flex-shrink-0'>
      <img src={SearchIcon} alt="Search icon" />
    </button>
  </div>
}

export default SearchField;