"use client";
import { bisnisType } from "@/data/type";
import useFetchBusinesses from "@/hooks/useFetchBusiness";
import Image from "next/image";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"

interface rekomendasiDetailProps {
  id: string;
  name: string;
  // desc: string;
  category: string;
  handleClick: (id: string) => void;
  isActive: boolean;
}

interface bisnisDetailProps {
  filter: string[];
  data: bisnisType[];
  onClick: (id: string) => void;
}

export function RekomendasiCard({
  id,
  name,
  // desc,
  category,
  handleClick,
  isActive,
}: rekomendasiDetailProps) {
  const { loadingBusiness, errorBusiness } = useFetchBusinesses();

  if (loadingBusiness)
    return (
      <div className={`flex justify-between items-center py-5 px-3 rounded-xl cursor-pointer  border-separate border-2`}>
      <div className="flex flex-col rounded-2xl gap-2">
        <Skeleton className="h-4 w-[17vw]"/>
          <Skeleton className="h-4 w-[6vw]"/>
      </div>
      <Skeleton className="w-[50px] h-[50px] rounded-2xl"/>
    </div>
    );

  if (errorBusiness)
    return (
      <div className="flex flex-col justify-center items-center text-[20px] font-bold gap-4">
        <Image src="/icon-error.png" alt="error" width={100} height={100} />
        <p>Error: {errorBusiness}</p>
      </div>
    );

  return (
    <div
      onClick={() => handleClick(id.toString())}
      className={`flex justify-between items-center py-5 px-3 rounded-xl cursor-pointer shadow-md ${
        isActive ? "bg-blue-200" : "bg-white"
      }`}
    >
      <div className="flex flex-col rounded-2xl">
        <h3 className="text-xl font-bold">{name}</h3>
        {category && (
          <p className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two">
            #{category}
          </p>
        )}
      </div>
      <Image
          src="/chevron-right.svg"
          alt="chevron-right"
          width={50}
          height={50}
        />
    </div>
  );
}

const Recommendation: React.FC<bisnisDetailProps> = ({
  filter,
  data,
  onClick,
}) => {
  const filteredItems = data.filter(
    (item) =>
      filter.length === 0 ||
      filter.some((f) => item.category.toLowerCase().includes(f.toLowerCase()))
  );

  const [activeBusiness, setActiveBusiness] = useState<string | null>(null);

  const handleBusinessClick = (index: string) => {
    setActiveBusiness(index);
    onClick(index);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="overflow-auto max-h-[525px] hide-scrollbar">
        <div className="flex flex-col space-y-3 overflow-x-auto">
          {filteredItems.map((item, index) => (
            <RekomendasiCard
              key={item.id}
              id={item.id}
              name={item.name}
              // desc={item.description}
              category={item.category}
              handleClick={() => handleBusinessClick(item.id)}
              isActive={activeBusiness === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
