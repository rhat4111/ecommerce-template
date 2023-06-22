import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';
import CheckBox from 'components/common/CheckBox';
import TextField from 'components/common/TextField';
import UserIcon from 'assets/images/icons/user.svg';
import LockIcon from 'assets/images/icons/lock.svg';

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleLogin = () => {
    navigate('/');
  }

  const handleChange = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const handleChangeRemember = () => {
    setUserInfo({ ...userInfo, remember: !userInfo.remember });
  }

  return <div className='flex justify-center pt-[100px]'>
    <div className='w-full max-w-screen-sm px-16 py-14 shadow-card'>
      <h3 className='font-bold text-[32px] leading-10 text-[#111] text-center mb-6'>
        Hello Again
      </h3>
      <p className='text-base text-center text-[#656565] mb-14'>
        Enter your credentials to access your account
      </p>
      <TextField
        type="email"
        placeholder="Enter your email"
        value={userInfo.email}
        onChange={handleChange}
        name="email"
        icon={<img src={UserIcon} className='w-10 h-10 opacity-80' />}
      />
      <TextField
        type="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={handleChange}
        name="password"
        icon={<img src={LockIcon} className='w-8 h-8 opacity-80' />}
      />
      <div className='flex items-center justify-between mb-10'>
        <CheckBox
          label="Remember me"
          checked={userInfo.remember}
          onChange={handleChangeRemember}
        />
        <Link to="/forgot-password" className='text-theme text-sm'>
          Forgot Password?
        </Link>
      </div>
      <Button
        className="mb-8"
        onClick={handleLogin}
        fullWidth
      >
        Sign In
      </Button>
      <p className='text-center'>
        Don’t you an account? &nbsp;
        <Link to="/register" className='text-theme cursor-pointer'>
          Register Now
        </Link>
      </p>
    </div>
  </div>
}

export default Login;