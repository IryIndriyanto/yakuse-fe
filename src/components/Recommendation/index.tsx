"use client";
import Image from "next/image";
import React, { useState } from "react";

const Recommendation = () => {
  const categories = ["Kuliner", "Fashion", "Electronics", "Jasa", "Kesehatan"];
  const businesses = ["Rumah Makan", "Warung", "Restoran", "Kedai Kopi", "Warung Makan", "Restoran Seafood"];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeBusiness, setActiveBusiness] = useState<number | null>(0);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  const handleBusinessClick = (index: number) => {
    setActiveBusiness(index);
  };

  return (
    <div className="flex flex-col gap-5 max-w-96">
      <div className="flex justify-start gap-5 flex-wrap">
        {categories.map((category, index) => (
          <button key={index} className={`${activeCategory === index ? "bg-orange-500 text-white" : "bg-white text-slate-400"} rounded-2xl p-2 border-2`} onClick={() => handleCategoryClick(index)}>
            <p>{category}</p>
          </button>
        ))}
      </div>
      <div className="overflow-auto max-h-[525px]">
        <div className="flex flex-col gap-3">
          {businesses.map((business, index) => (
            <div key={index} onClick={() => handleBusinessClick(index)} className={`flex flex-col gap-3 p-3 rounded-xl cursor-pointer ${activeBusiness === index ? "bg-blue-200" : "bg-white"}`}>
              <div className="flex justify-between items-center rounded-2xl">
                <h3 className="text-xl font-bold">{business}</h3>
                <Image src="/vector.png" alt="vector" width={8} height={14} className="w-2 h-2" />
              </div>
              <p className="text-sm text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore eveniet odit natus saepe deserunt fugiat, magni exercitationem, sequi inventore tempore earum. Quam tempore pariatur, laborum quia voluptate explicabo
                perferendis velit!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
