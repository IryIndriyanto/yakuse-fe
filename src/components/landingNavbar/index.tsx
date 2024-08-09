"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const LandingNavbar = () => {
  const router = useRouter();

  // handle the click event of the sign in button
  const handleSignIn = () => {
    router.push("/login");
  };
  // handle the click event of the sign up button
  const handleSignUp = () => {
    router.push("/register");
  };
  return (
    <header className="self-stretch flex flex-row items-center justify-between py-[50px] px-[65px] gap-5 text-left text-29xl text-primary-p-one font-para-date mq825:flex-wrap mq825:pl-8 mq825:pr-8 mq825:box-border">
      {/* Yakuse Logo */}
      <a className="[text-decoration:none] relative leading-[54px] font-semibold text-[inherit]">
        YAKUSE
      </a>

      {/* Button Sign in & Sign up */}
      <div className="flex flex-row items-center gap-8">
        {/* Sign in Button */}
        <button
          onClick={handleSignIn}
          className="font-para-date w-[110px] h-[42px] bg-white text-[#005792] border border-[#005792] font-semibold text-[19px] py-2 px-4 rounded-lg hover:bg-white-w-two"
        >
          Sign In
        </button>

        {/* Sign up Button */}
        <button
          onClick={handleSignUp}
          className="font-para-date w-[110px] h-[42px] bg-[#fd5f00]  text-white font-semibold text-[19px] py-2 px-4 rounded-lg"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default LandingNavbar;
