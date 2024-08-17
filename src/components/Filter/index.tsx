"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/constant";

interface FilterProps {
  setFilter: (filter: string[]) => void;
}

interface Tab {
  id: number;
  name: string;
  path: string;
}

export default function Filter({ setFilter }: FilterProps) {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTabs, setActiveTabs] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const token = localStorage.getItem("access_token");
        console.log("Access Token:", token);
        const response = await axios.get(`${BASE_URL}/business_category/`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }); 
        const tabData = response.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          path: item.name.toLowerCase(),
        }));
        setTabs(tabData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
  
    fetchTabs();
  }, []);
  const handleFilter = (item: string) => {
    const updatedTabs = activeTabs.includes(item)
      ? activeTabs.filter((tab) => tab !== item)
      : [...activeTabs, item];

    setActiveTabs(updatedTabs);
    setFilter(updatedTabs);
  };

  return (
    <>
      <div className="flex justify-items-start gap-5 flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleFilter(tab.path)}  
            className={`${
              activeTabs.includes(tab.path)
                ? "bg-orange-500 text-white"
                : "bg-white text-[#525455] border-[#948A8A]"
            } rounded-full py-2 px-4 border-[1px]`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </>
  );
}
