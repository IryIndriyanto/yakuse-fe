"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetchBusinesses from "../../hooks/useFetchBusiness";
import { MyBusiness } from "./types";

const BisniskuCardListUser = () => {
  const router = useRouter();
  const { businesses, loadingBusiness, errorBusiness } = useFetchBusinesses();

  const handleCardClick = (id: string) => {
    router.push(`/detail-bisnis/${id}`);
  };

  if (loadingBusiness)
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src="/loading-spinner-orange.gif" alt="loading" width={100} height={100} />
        <p className="text-[20px] font-bold">Loading</p>
      </div>
    );
  if (errorBusiness)
    return (
      <div className="flex flex-col justify-center items-center text-[20px] font-bold gap-4">
        {/* <Image src="/icon-error.png" alt="error" width={100} height={100} /> */}
        <p>Anda belum memiliki bisnis</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-4">
      {businesses?.map((business: MyBusiness) => (
        <div
          key={business.id}
          className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300"
          onClick={() => handleCardClick(business.id)}
        >
          <div className="flex items-center gap-8">
            <div>
              <Image
                className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover"
                src={business.photo_url}
                alt={business.name}
                width={150}
                height={150}
              />
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[28px] font-bold">{business.name}</h4>
              <p className="text-[18px] text-[#005792]">{business.category}</p>
              <p className="text-[18px] text-[#525455]">{business.location}</p>
            </div>
          </div>

          <div>
            <Image
              className="cursor-pointer"
              src="/chevron-right.svg"
              alt="chevron right"
              width={50}
              height={50}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BisniskuCardListUser;
