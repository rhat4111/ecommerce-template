import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserIcon from 'assets/images/icons/user.svg';

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }

  return <div className='w-10 h-10 relative'>
    <div
      className='rounded-full flex items-center justify-center'
      onClick={handleClick}
    >
      <img src={UserIcon} className='cursor-pointer' />
    </div>
  </div>
}

export default Profile;