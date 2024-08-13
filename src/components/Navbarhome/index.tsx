"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="w-full h-[80px] flex justify-between items-center px-10 sticky top-0 bg-[#e5e7eb] z-50 shadow-md">
      <h1 className="text-4xl text-blue-400 font-bold">YAKUSE</h1>
      <div className="flex gap-7">
        <a href="/nyaripedagang" onClick={() => handleClick(0)} className={`${activeIndex === 0 ? "text-orange-500 underline underline-offset-8" : "text-black"} text-xl font-light`}>
          Nyari Pedagang
        </a>
        <a href="/nyaripelanggan" onClick={() => handleClick(1)} className={`${activeIndex === 1 ? "text-orange-500 underline underline-offset-8" : "text-black"} text-xl font-light`}>
          Nyari Pelanggan
        </a>
        {/* <a href="#" onClick={() => handleClick(2)} className={`${activeIndex === 2 ? "text-orange-500 underline underline-offset-8" : "text-black"} text-xl font-light`}>
          Nyari Partner
        </a> */}
      </div>
      <div className="flex space-between gap-4">
        <div className="flex flex-col text-lg">
          <p className="font-bold">Jane Deo</p>
          <p className="font-light">Pedagang Jagung</p>
        </div>
        <Image src="/profile.png" alt="user-profile" width={50} height={50} className="w-14 h-14" />
      </div>
    </nav>
  );
};

export default Navbar;
