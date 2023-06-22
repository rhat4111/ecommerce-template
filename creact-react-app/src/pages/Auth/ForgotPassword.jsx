import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';
import EmailIcon from 'assets/images/icons/email.svg';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleRequest = () => {
    navigate('/reset-password');
  }

  const handleChange = e => {
    setEmail(e.target.value);
  }

  return <div className='flex justify-center pt-[100px]'>
    <div className='w-full max-w-screen-sm px-16 py-14 shadow-card'>
      <h3 className='font-bold text-[32px] leading-10 text-[#111] text-center mb-6'>
        Forgot Password
      </h3>
      <p className='text-base text-center text-[#656565] mb-14'>
        Enter your email address to request password reset.
      </p>
      <TextField
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        name="email"
        className="mb-10"
        icon={<img
          src={EmailIcon}
          className='w-6 h-6 opacity-80'
          alt="email icon"
        />}
      />
      <Button
        className="mb-8"
        onClick={handleRequest}
        fullWidth
      >
        Send Request
      </Button>
      <p className='text-center'>
        Remember your password? &nbsp;
        <Link to="/login" className='text-theme cursor-pointer'>
          Log in
        </Link>
      </p>
    </div>
  </div>
}

export default ForgotPassword;