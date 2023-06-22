import React from 'react';
import UserIcon from 'assets/images/icons/user.svg';

const Profile = () => {
  return <div className='w-10 h-10 relative'>
    <div className='rounded-full flex items-center justify-center'>
      <img src={UserIcon} className='cursor-pointer' />
    </div>
  </div>
}

export default Profile;