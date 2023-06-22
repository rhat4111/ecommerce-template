import React from 'react';
import CheckIcon from 'assets/images/icons/check.svg';

const CheckBox = ({ label, checked, onChange }) => {
  const handleChange = () => {
    onChange();
  }

  return <div
    className='flex items-center cursor-pointer'
    onClick={handleChange}
  >
    <div className={`w-5 h-5 inline-flex items-center justify-center border border-[#DDD] hover:border-theme ${checked && `bg-theme border-theme`}`}>
      {checked && <img src={CheckIcon} alt="check icon" />}
    </div>
    {label && <span className='text-black text-sm ml-3.5'>{label}</span>}
  </div>
}

export default CheckBox;