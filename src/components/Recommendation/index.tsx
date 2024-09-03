"use client";
import { bisnisType } from "@/data/type";
import useFetchBusinesses from "@/hooks/useFetchBusiness";
import Image from "next/image";
import React, { useState } from "react";

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
  // const { loadingBusiness, errorBusiness } = useFetchBusinesses();

  // if (loadingBusiness)
  //   return (
  //     <div className="flex flex-col justify-center items-center gap-4">
  //       <Image
  //         src="/loading-spinner-orange.gif"
  //         alt="loading"
  //         width={100}
  //         height={100}
  //       />
  //       <p className="text-[20px] font-bold">Loading</p>
  //     </div>
  //   );

  // if (errorBusiness)
  //   return (
  //     <div className="flex flex-col justify-center items-center text-[20px] font-bold gap-4">
  //       <Image src="/icon-error.png" alt="error" width={100} height={100} />
  //       <p>Error: {errorBusiness}</p>
  //     </div>
  //   );

  return (
    <div
      onClick={() => handleClick(id.toString())}
      className={`flex flex-col py-5 px-3 rounded-xl cursor-pointer ${
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
      {category && (
        <p className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two">
          #{category}
        </p>
      )}
      {/* <p className="text-sm text-justify">{desc}</p> */}
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
      <div className="overflow-auto max-h-[525px]">
        <div className="flex flex-col space-y-3 overflow-x-auto hide-scrollbar">
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
