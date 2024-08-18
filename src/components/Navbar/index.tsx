"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import useFetchProfile from "../../hooks/useFetchProfile";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);
  const { profile, loading } = useFetchProfile();

  const currentPath = usePathname();
  
  const tabs = [
    { name: "Temukan Kebutuhan", href: "/kebutuhan" },
    { name: "Temukan Pembeli", href: "/pembeli" },
    { name: "Info UMKM", href: "/umkm" }
  ]; 

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleProfile = () => {
    router.push("/profile-user");
    setDropdownVisible(false); // Tambahkan ini
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    console.log("Token telah dihapus, user logout");
    router.push("/login");
    setDropdownVisible(false); // Tambahkan ini
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <div className="font-serif bg-[#FCFCFC] py-8 flex justify-between items-center px-[48px]">
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="text-[38px] font-bold text-[#40ABFF]">YAKUSE</h1>
        </div>
      </div>

      <div className="flex items-center justify-center flex-1">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`text-[20px] list-none cursor-pointer hover:text-[#FD5F00] mr-10 ${currentPath === tab.href ? "text-[#FD5F00] underline underline-offset-8" : ""}`}
            onClick={() => handleNavigation(tab.href)}
          >
            {tab.name}
          </li>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="cursor-pointer text-right" onClick={toggleDropdown}>
          <p className="text-[18px] font-bold">{profile?.username}</p>
          <p className="text-[12px]">UMKM</p>
        </div>

        <div className="relative" ref={dropdownRef}>
          <Image
            className="rounded-full w-[40px] h-[40px] bg-image bg-cover bg-center object-cover cursor-pointer"
            src={profile?.photo_url || "/default-gray-photo.webp"}
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
                  <p>Ubah Foto Profile</p>
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