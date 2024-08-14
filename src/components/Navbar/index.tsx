"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();
  const handleJelajahiKomunitas = () => {
    router.push("/nyaripedagang");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleProfile = () => {
    router.push("/profile-user");
  };

  const handleLogout = () => {
    console.log("Nanti hilangin token biar logout");
  };

  return (
    <div className="font-serif bg-[#FCFCFC] py-4 flex justify-between px-[50px]">
      <div className="flex flex-col justify-center gap-4">
        <div>
          <h1 className="text-[41px] font-bold text-[#40ABFF]">YAKUSE</h1>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleJelajahiKomunitas}
        >
          <Image src="/move-left.svg" alt="move-left" width={24} height={24} />
          <p className="text-[#FD5F00] text-[23px] font-bold">
            Jelajahi Komunitas
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ul className="flex items-center gap-4">
          <li
            className="text-[18px] cursor-pointer hover:text-[#FD5F00] transition-all duration-300 mr-10"
            onClick={handleJelajahiKomunitas}
          >
            Temukan Kebutuhan
          </li>
          <li className="text-[18px] cursor-pointer hover:text-[#FD5F00] transition-all duration-300 mr-10">
            Temukan Pembeli
          </li>
          <li className="text-[18px] cursor-pointer hover:text-[#FD5F00] transition-all duration-300">
            Info UMKM
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="cursor-pointer text-right">
          <p className="text-[18px] font-bold">Jane Deo</p>
          <p className="text-[12px]">Pedagang Jagung</p>
        </div>

        <div className="relative">
          <Image
            className="rounded-full w-[40px] h-[40px] bg-image bg-cover bg-center object-cover cursor-pointer"
            src="/foto-munaroh.svg"
            alt="user"
            width={40}
            height={40}
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleProfile}
                >
                  <p>Profile</p>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <p>Setting</p>
                </li>
                <li
                  className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
