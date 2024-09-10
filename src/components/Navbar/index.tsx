"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import useFetchProfile from "../../hooks/useFetchProfile";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icon hamburger dan close

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // State untuk visibilitas menu
  const router = useRouter();
  const dropdownRef = useRef(null);
  const menuRef = useRef(null); // Ref untuk menu dropdown
  const { profile, loading } = useFetchProfile();

  const currentPath = usePathname();

  const tabs = [
    { name: "Temukan Kebutuhan", href: "/kebutuhan" },
    { name: "Temukan Pembeli", href: "/pembeli" },
    // { name: "Info UMKM", href: "/umkm" }, // Belum ada
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleProfile = () => {
    router.push("/profile-user");
    setDropdownVisible(false);
  };

  const handlePhotoProfile = () => {
    router.push("/edit-profile-photo");
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    console.log("Token telah dihapus, user logout");
    router.push("/login");
    setDropdownVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
    if (
      menuRef.current &&
      !(menuRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setMenuVisible(false);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuVisible(false);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    if (dropdownVisible || menuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible, menuVisible]);

  return (
    <div className="font-serif bg-[#FCFCFC] py-8 flex justify-between items-center px-[48px] sm:px-2">
      <div className="flex flex-col justify-center">
        <div>
          <h1
            className="text-[38px] font-bold text-[#40ABFF] cursor-pointer"
            onClick={() => handleNavigation("/kebutuhan")}
          >
            YAKUSE
          </h1>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-center flex-1">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`text-[20px] list-none cursor-pointer hover:text-[#FD5F00] mr-10 ${
              currentPath === tab.href
                ? "text-[#FD5F00] underline underline-offset-8"
                : ""
            }`}
            onClick={() => handleNavigation(tab.href)}
          >
            {tab.name}
          </li>
        ))}
      </div>

      <div className="flex items-center gap-4 sm:relative sm:left-[40px]">
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
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleProfile}
                >
                  <p>Profile</p>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handlePhotoProfile}
                >
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

      <div className="hidden md:block relative" ref={menuRef}>
        <button onClick={toggleMenu}>
          {menuVisible ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {menuVisible && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <ul>
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    currentPath === tab.href ? "text-[#FD5F00]" : ""
                  }`}
                  onClick={() => handleNavigation(tab.href)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
