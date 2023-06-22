import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import CaretIcon from 'assets/images/icons/caret.svg';

const MenuItem = (props) => {
  const [opened, setOpened] = useState();
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (!item.children) {
      navigate(item.path); return;
    }
    setOpened(!opened);
    navigate(item.path); return;
  };

  return <li className='h-full flex items-center relative mx-4'>
    <a
      className='flex font-medium cursor-pointer hover:text-theme transition'
      onClick={() => handleClick(props)}
    >
      <span>{props.label}</span>
      {
        props.children &&
        <img
          src={CaretIcon}
          className={`${opened ? `rotate-180` : `rotate-0`} transition ml-1`}
        />
      }
    </a>
    {
      opened && <OutsideClickHandler onOutsideClick={() => setOpened(false)}>
        <ul className='flex flex-col gap-y-1 absolute min-w-[185px] p-3 left-0 bottom-0 translate-y-full bg-white shadow'>
          {
            props.children.map(item => <li
              key={item.id}
              onClick={() => handleClick(item)}
              className='text-sm leading-5 hover:text-theme cursor-pointer'
            >
              {item.label}
            </li>)
          }
        </ul>
      </OutsideClickHandler>
    }
  </li>
}

export default MenuItem;