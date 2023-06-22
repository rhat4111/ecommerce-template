import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';
import LockIcon from 'assets/images/icons/lock.svg';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState({
    password: '',
    confirmPassword: ''
  })

  const handleReset = () => {
    navigate('/login');
  }

  const handleChange = e => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  }

  return <div className='flex justify-center pt-[100px]'>
    <div className='w-full max-w-screen-sm px-16 py-14 shadow-card'>
      <h3 className='font-bold text-[32px] leading-10 text-[#111] text-center mb-6'>
        Forgot Password
      </h3>
      <p className='text-base text-center text-[#656565] mb-14'>
        Rest your password
      </p>
      <TextField
        type="password"
        placeholder="Password"
        value={formInfo.password}
        onChange={handleChange}
        name="password"
        className="mb-6"
        icon={<img
          src={LockIcon}
          className='w-8 h-8 opacity-80'
          alt="lock icon"
        />}
      />
      <TextField
        type="password"
        placeholder="Confirm Password"
        value={formInfo.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
        className="mb-10"
        icon={<img
          src={LockIcon}
          className='w-8 h-8 opacity-80'
          alt="lock icon"
        />}
      />
      <Button onClick={handleReset} fullWidth>
        Confirm Password
      </Button>
    </div>
  </div>
}

export default ResetPassword;