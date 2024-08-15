"use client";

import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import { bisnisType } from "@/data/type";

interface bisnisProps {
  filter: string[];
  data: bisnisType[];
}

interface bisnisDetailProps {
  item: bisnisType;
}

const BusinessCard = ({ item }: bisnisDetailProps) => {
  return (
    <div className="w-full h-auto bg-w-two rounded-xl flex flex-col space-y-4 p-7">
      <div className="flex justify-between items-center">
        <div className="flex flex-row space-x-5 items-center">
          <div className="flex flex-col gap-1 justify-center">
            <Image
              src="/profile.png"
              alt="user-profile"
              width={25}
              height={25}
              className="w-16 h-auto border-blue-500 border-4 rounded-full"
            />
            <p className="text-sm text-center text-blue-950 font-light900 font-serif">
              Pemilik
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-5xl font-normal text-b-two">
              {item.owner}
            </h2>
            {/* <p className="text-sm text-center text-gray-800 font-semibold">
            {}
          </p> */}
          </div>
        </div>
        <Image
          src="/vector.png"
          alt="vector"
          width={30}
          height={30}
          className="w-4 h-4"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Image
          src={item.photo_url}
          alt="business"
          width={980}
          height={300}
          className="w-full h-auto max-w-full object-cover rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold">{item.name}</h1>
          <div className="flex gap-3 items-center">
            <Rating name="size-small" defaultValue={item.rating} readOnly />
            <p className="text-lg font-bold">
              {item.rating_list.length} pengulas
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {/* {business.tags.map((tag: string, index: number) => ( */}
            <p
              // key={index}
              className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two border-[1px] border-b-two rounded-full py-2 px-4"
            >
              {item.category}
            </p>
            {/* ))} */}
          </div>
          <p className="text-xl font-normal text-justify">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const BusinessCardList: React.FC<bisnisProps> = ({ filter, data }) => {
  const filteredItems = data.filter(
    (item) =>
      filter.length === 0 ||
      filter.some((f) => item.category.toLowerCase().includes(f.toLowerCase()))
  );

  return (
    <div className="w-full flex flex-col gap-10">
      {filteredItems.map((item, index) => (
        <BusinessCard key={index} item={item} />
      ))}
    </div>
  );
};

export default BusinessCardList;
