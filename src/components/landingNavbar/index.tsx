'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const LandingNavbar = () => {
  const router = useRouter();

  // handle the click event of the sign in button
  const handleSignIn = () => {
    router.push('/login');
  };
  // handle the click event of the sign up button
  const handleSignUp = () => {
    router.push('/register');
  };
  return (
    <header className="self-stretch flex flex-row items-center justify-between py-[50px] px-[65px] gap-5 text-left text-29xl text-p-one font-para-date mq825:flex-wrap mq825:pl-8 mq825:pr-8 mq825:box-border sm:flex-col sm:items-center sm:gap-4 sm:py-4 sm:px-4">
      {/* Yakuse Logo */}
      <a className="[text-decoration:none] relative leading-[54px] font-semibold text-[inherit] sm:text-center sm:mb-4">
        YAKUSE
      </a>

      {/* Button Sign in & Sign up */}
      <div className="flex flex-row items-center gap-8 sm:flex-row sm:gap-2 sm:justify-center">
        {/* Sign in Button */}
        <button
          onClick={handleSignIn}
          className="font-para-date w-[110px] h-[42px] bg-white text-[#005792] border border-[#005792] font-semibold text-[19px] py-2 px-4 rounded-lg hover:bg-w-two sm:w-[90px] sm:h-[36px] sm:text-[16px] sm:py-1 sm:px-3"
        >
          Sign In
        </button>

        {/* Sign up Button */}
        <button
          onClick={handleSignUp}
          className="font-para-date w-[110px] h-[42px] bg-[#fd5f00] text-white font-semibold text-[19px] py-2 px-4 rounded-lg hover:bg-[#ff7f32] sm:w-[90px] sm:h-[36px] sm:text-[16px] sm:py-1 sm:px-3"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default LandingNavbar;
