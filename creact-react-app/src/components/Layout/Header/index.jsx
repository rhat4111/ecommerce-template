import React from 'react';
import Cart from './Cart';
import MenuItem from './MenuItem';
import Profile from './Profile';
import SearchField from './SearchField';

const Header = () => {
  const navs = [
    { id: 'home', label: "Home", path: "/" },
    { id: 'shop', label: "Shop", path: "/shop" },
    { id: 'about', label: "About Us", path: "/about" },
    { id: 'contact', label: "Contact Us", path: "/contact" },
    {
      id: 'pages',
      label: "Pages",
      children: [
        { id: 'faqs', label: "FAQs", path: "/faqs" },
        { id: 'privacy', label: "Privacy & Policy", path: "/privacy" },
        { id: 'terms', label: "Terms & Conditions", path: "/terms" },
        { id: 'login', label: "Login", path: "/login" },
        { id: 'register', label: "Register", path: "/register" },
        { id: 'forgot', label: "Forgot Password", path: "/forgot" },
        { id: 'cart', label: "My Cart", path: "/cart" },
        { id: 'checkout', label: "Checkout", path: "/checkout" },
        { id: 'error404', label: "Error 404", path: "/404" },
      ]
    },
  ];

  return <div className='fixed w-full h-20 shadow-md px-5'>
    <div className='max-w-screen-2xl h-full flex justify-between items-center mx-auto'>
      <div className='h-full flex items-center'>
        <h1 className='font-bold text-4xl text-theme mr-24'>
          {process.env.REACT_APP_SHOP_NAME}
        </h1>
        <ul className='h-full flex -mx-4'>
          {navs.map(nav => <MenuItem key={nav.id} {...nav} />)}
        </ul>
      </div>
      <div className='flex items-center gap-x-6'>
        <SearchField />
        <Profile />
        <Cart />
      </div>
    </div>
  </div>
}

export default Header;