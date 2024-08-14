import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";

const BusinessCard = ({ business }: { business: any }) => {
  return (
    <div className="flex flex-col gap-5 bg-blue-200 rounded-2xl p-7 ml-20">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 justify-center items-center">
          <div className="flex flex-col gap-1 justify-center">
            <Image src={business.ownerImage} alt="user-profile" width={50} height={50} className="w-full h-20 border-blue-500 border-4 rounded-full" />
            <p className="text-sm text-center text-blue-950 font-light900 font-serif">Pemilik</p>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl font-semibold text-gray-400">{business.ownerName}</h2>
            <p className="text-sm text-center text-gray-800 font-semibold">{business.businessType}</p>
          </div>
        </div>
        <Image src="/vector.png" alt="vector" width={8} height={14} className="w-4 h-4" />
      </div>
      <div className="flex flex-col gap-3">
        <Image src={business.businessImage} alt="business" width={980} height={300} className="w-full h-auto max-w-full object-cover rounded-lg" />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold">{business.businessName}</h1>
          <div className="flex gap-3 items-center">
            <Rating name="size-small" defaultValue={business.rating} readOnly />
            <p className="text-lg font-bold">{business.reviewsCount} pengulas</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {business.tags.map((tag: string, index: number) => (
              <a key={index} href="#" className="text-blue-950 font-light">
                #{tag}
              </a>
            ))}
          </div>
          <p className="text-xl font-normal text-justify">{business.description}</p>
        </div>
      </div>
    </div>
  );
};

const BusinessCardList = () => {
  const businesses = [
    {
      ownerImage: "/profile.png",
      ownerName: "Jane Cienk",
      businessType: "Pedagang Arang",
      businessImage: "/bussiness-image-frame.png",
      businessName: "Jualan Nasi Padang",
      rating: 3,
      reviewsCount: 800,
      tags: ["kuliner", "makanan", "tradisional"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel id nisi.",
    },
    {
      ownerImage: "/profile.png",
      ownerName: "John Doe",
      businessType: "Pedagang Buah",
      businessImage: "/bussiness-image-frame.png",
      businessName: "Jualan Buah Segar",
      rating: 4,
      reviewsCount: 1200,
      tags: ["buah", "segar", "pasar"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel id nisi.",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {businesses.map((business, index) => (
        <BusinessCard key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessCardList;
