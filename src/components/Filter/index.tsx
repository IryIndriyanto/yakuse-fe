"use client";
import React, { useState } from "react";

interface FilterProps {
  setFilter: (filter: string[]) => void;
}

export default function Filter({ setFilter }: FilterProps) {
  const tabs = [
    { name: "Kuliner", path: "kuliner" },
    { name: "Fashion", path: "fashion" },
    { name: "Elektronik", path: "elektronik" },
    { name: "Jasa", path: "jasa" },
    { name: "Kreatif", path: "kreatif" },
    { name: "Properti", path: "properti" },
    { name: "Entertaiment", path: "entertaiment" },
  ];

  const [activeTabs, setActiveTabs] = useState<string[]>([]);

  //   const fetchData = async (item: string) => {
  //     try {
  //       const token = localStorage.getItem("access_token");
  //       if (token) {
  //         setFilter(item);
  //         setActiveTab(item);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const handleFilter = (item: string) => {
    const updatedTabs = activeTabs.includes(item)
      ? activeTabs.filter((tab) => tab !== item)
      : [...activeTabs, item];

    setActiveTabs(updatedTabs);
    setFilter(updatedTabs);
  };

  return (
    <>
      <div className="flex justify-evenly gap-3 flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleFilter(tab.path)}  
            className={`${
              activeTabs.includes(tab.path)
                ? "bg-orange-500 text-white"
                : "bg-white text-[#525455] border-[#948A8A]"
            } rounded-full py-2 px-4 border-[1px] text-[14px]`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </>
  );
}
