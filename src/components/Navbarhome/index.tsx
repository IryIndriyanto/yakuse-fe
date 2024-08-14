"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const currentPath = usePathname();
  
  const tabs = [
    { name: "Temukan Kebutuhan", href: "/kebutuhan" },
    { name: "Temukan Pembeli", href: "/pembeli" },
    { name: "Info UMKM", href: "/umkm" }
  ]; 


  return (
    <nav className="w-full h-[80px] flex justify-between items-center px-10 sticky top-0 bg-white z-50">
      <h1 className="text-4xl text-blue-400 font-bold">YAKUSE</h1>
      <div className="flex gap-7">
        {tabs?.map((tab, index) => (
          <Link
            key={index}
            href={tab.href}
            className={`${
              currentPath === tab.href
                ? "text-orange-500 underline underline-offset-8"
                : "text-black"
            } text-xl font-light`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="flex space-between gap-4">
        <div className="flex flex-col text-lg">
          <p className="font-bold">Jane Deo</p>
          <p className="font-light">Pedagang Jagung</p>
        </div>
        <Image
          src="/profile.png"
          alt="user-profile"
          width={50}
          height={50}
          className="w-14 h-14"
        />
      </div>
    </nav>
  );
};

export default Navbar;
