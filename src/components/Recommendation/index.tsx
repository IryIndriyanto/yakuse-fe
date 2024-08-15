"use client";
import { bisnisType } from "@/data/type";
import Image from "next/image";
import React, { useState } from "react";

interface rekomendasiDetailProps {
  name: string;
  desc: string;
  handleClick: () => void;
  isActive: boolean;
}

interface bisnisDetailProps {
  filter: string[];
  data: bisnisType[];
}

export function RekomendasiCard({
  name,
  desc,
  handleClick,
  isActive,
}: rekomendasiDetailProps) {
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col gap-3 p-3 rounded-xl cursor-pointer ${
        isActive ? "bg-blue-200" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center rounded-2xl">
        <h3 className="text-xl font-bold">{name}</h3>
        <Image
          src="/vector.png"
          alt="vector"
          width={8}
          height={14}
          className="w-2 h-2"
        />
      </div>
      <p className="text-sm text-justify">{desc}</p>
    </div>
  );
}

const Recommendation: React.FC<bisnisDetailProps> = ({ filter, data }) => {
  const filteredItems = data.filter(
    (item) =>
      filter.length === 0 ||
      filter.some((f) =>
        item.category.toLowerCase().includes(f.toLowerCase())
      )
  );

  const [activeBusiness, setActiveBusiness] = useState<number | null>(null);

  const handleBusinessClick = (index: number) => {
    setActiveBusiness(index);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="overflow-auto max-h-[525px]">
        <div className="flex flex-col gap-3">
          {filteredItems.map((item, index) => (
            <RekomendasiCard
              key={item.id}
              name={item.name}
              desc={item.description}
              handleClick={() => handleBusinessClick(index)}
              isActive={activeBusiness === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
