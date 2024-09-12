"use client";
import React, { useState, useEffect } from "react";
import useFetchCategory from "@/hooks/useFetchCategory";
import { CategoryProps } from "./types";
import { Skeleton } from "../ui/skeleton";

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
  const [length, setLength] = useState(5);
  
  // Fetching categories using the custom hook
  const { category, loadingCategory, errorCategory } = useFetchCategory();

  useEffect(() => {
    if (category) {
      const tabData = category.map((item: CategoryProps) => ({
        id: item.id,
        name: item.name,
        path: item.name.toLowerCase(),
      }));
      setTabs(tabData);
    }
  }, [category]);

  const handleFilter = (item: string) => {
    const updatedTabs = activeTabs.includes(item)
      ? activeTabs.filter((tab) => tab !== item)
      : [...activeTabs, item];

    setActiveTabs(updatedTabs);
    setFilter(updatedTabs);
  };

  if (loadingCategory) return (
  <div className="flex justify-center items-center overflow-x-auto gap-5 max-w-full pt-2 hide-scrollbar">
      {Array.from({length:3}).map((_, index) => (
        <Skeleton key={index} className="rounded-2xl w-20 h-7 " />
      ))}
  </div>
  )
  if (errorCategory) return <p>{errorCategory}</p>;

  return (
    <div className="flex justify-items-start overflow-x-auto gap-5 max-w-full pt-2 hide-scrollbar">
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
  );
}
