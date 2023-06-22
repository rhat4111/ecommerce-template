import React, { useState } from 'react';
import HideIcon from 'assets/images/icons/eye-slash.svg';

const TextField = ({
  className,
  icon,
  id,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return <div className={`mb-6 ${className}`}>
    <label htmlFor={id}>{label}</label>
    <div className='flex h-[72px] border border-[#EEE]'>
      {icon && <div className='w-[72px] h-full flex items-center justify-center flex-shrink-0'>
        {icon}
      </div>}
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full h-full outline-none pr-5 ${!icon && `pl-5`}`}
      />
      {type === 'password' && <div className='w-[72px] flex items-center justify-center flex-shrink-0'>
        <img
          src={HideIcon}
          className='w-6 h-6 cursor-pointer'
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>}
    </div>
  </div>
}

export default TextField;