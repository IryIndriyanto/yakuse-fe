"use client";

import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import { bisnisType } from "@/data/type";
import { useRouter } from "next/navigation";
import { RiVerifiedBadgeFill } from "react-icons/ri";


interface BusinessCardProps {
  business: bisnisType | null;
}

interface bisnisProps {
  filter: string[];
  data: bisnisType[];
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const router = useRouter();

  if (!business) return (
    <div className="w-full h-full bg-w-two rounded-xl flex flex-col justify-items-center space-y-4 p-7 md:hidden">
      <h2 className="text-5xl font-normal text-gray-800 ">
        {`<- Pilih Kebutuhanmu`}
      </h2>
      <p className="text-sm  text-b-two font-semibold">
        Tampilkan detail disini
      </p>
      <div className="flex justify-center items-center">
      <Image 
        src={"/empty-business-image.png"}
        alt="empty-business-image"
        width={500}
        height={500}
      />
      </div>
    </div>
  );

  const handleBusinessClick = () => {
    router.push(`/detail-bisnis-other-user/${business.id}`);
  };

  const handleProfileClick = () => {
    router.push(`/profile-other-user/${business.owner_info.user_id}`);
  };

  return (
    <div className="w-full h-fit bg-w-two rounded-xl flex flex-col space-y-4 p-7 md:hidden" >
      <div className="flex justify-between items-center pb-5">
        <div className="flex gap-2 items-center">
            <Image
              src={business.owner_info.photo_url || "/default-gray-photo.webp"}
              alt="user-profile"
              width={96}
              height={96}
              className="rounded-full w-[96px] h-[96px] object-scale-down border-blue-500 border-4"
            />
          <div className="flex gap-1 justify-center hover:cursor-pointer" onClick={handleProfileClick}>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-5xl font-normal text-b-two">
              {business.owner_info.fullname}
            </h2>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-800 font-semibold"> {`Recommended Business `} </p>
              <RiVerifiedBadgeFill className="text-blue-500" />
            </div>
          </div>
        </div>
        <Image
          src="/chevron-right.svg"
          alt="chevron-right"
          width={50}
          height={50}
        />
      </div>

      <div className="flex flex-col gap-3 hover:cursor-pointer overflow-auto max-h-[700px] hide-scrollbar" onClick={handleBusinessClick}>
        <Image
          src={business.photo_url || "/empty-business-image.png" }
          alt="business"
          width={980}
          height={500}
          className="w-full h-[55vh] max-w-full object-fill rounded-2xl pb-5"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold">{business.name}</h1>
          <div className="flex gap-3 items-center">
            <Rating name="size-small" defaultValue={business.avg_rating} readOnly />
            <p className="text-lg font-bold">
              {business.rating_list.length} pengulas
            </p>
          </div>
          <div className="flex gap-3 flex-wrap pb-5">
            {/* {business.tags.map((tag: string, index: number) => ( */}
            {business.category && (
              <p
                // key={index}
                className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two border-[1px] border-b-two rounded-full py-2 px-4 "
              >
                {business.category}
              </p>
            )}
            {/* ))} */}
          </div>
          <p 
          dangerouslySetInnerHTML={{ __html: (business?.description_list?.join("\n") || "").replace(/\n/g, "<br><br>") }} 
          className="text-xl font-normal text-justify"/>
        </div>
      </div>
    </div>
  );
};

// const BusinessCardList: React.FC<bisnisProps> = ({ filter, data }) => {
//   const filteredItems = data.filter(
//     (item) =>
//       filter.length === 0 ||
//       filter.some((f) => item.category.toLowerCase().includes(f.toLowerCase()))
//   );

//   return (
//     <div className="w-full flex flex-col gap-10">
//       {filteredItems.map((item, index) => (
//         <BusinessCard key={index} item={item} />
//       ))}
//     </div>
//   );
// };

export default BusinessCard;
