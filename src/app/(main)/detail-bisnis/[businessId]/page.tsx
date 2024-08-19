"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";
import useFetchBusinessById from "../../../../hooks/useFetchBusinessById";
import { formatRupiah } from "../../../../utils/currencyFormatter";

const DetailBisnis = ({ params }: { params: { businessId: string } }) => {
  const { businessId } = params;
  const router = useRouter();
  const { business, loading, error } = useFetchBusinessById(businessId);

  const handleEdit = () => {
    router.push(`/edit-bisnis/${businessId}`);
  };

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <Image
          src="/loading-spinner-orange.gif"
          alt="loading"
          width={150}
          height={150}
        />
        <p className="text-[#40ABFF] text-[24px] font-bold">Loading</p>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#FCFCFC] font-serif">
      <div className="grid grid-cols-2 gap-20 p-10">
        <div>
          <Image
            className="sticky top-8"
            src={business?.photo_url || "/default-gray-photo.png"}
            alt="detail-bisnis-1"
            width={500}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="max-w-[400px]">
              <h1 className="text-5xl font-bold">{business?.name}</h1>
            </div>
            <div className="flex justify-center items-start gap-4">
              <Image
                className="cursor-pointer"
                src="/icon-pencil.svg"
                alt="icon-pencil"
                width={24}
                height={24}
                onClick={handleEdit}
              />
              <Image
                className="cursor-pointer"
                src="/icon-trash.svg"
                alt="icon-trash"
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px] font-bold">Omset</p>
              <Rating value={business?.rating} precision={0.5} readOnly />
            </div>

            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px]">
                {formatRupiah(business?.omset || 0)}
              </p>
              <p className="text-[18px]">
                {business?.rating}/5 dari {business?.total_rater} pengulas
              </p>
            </div>
          </div>
          <div>
            <p className="text-[18px] font-bold text-[#005792]">
              #{business?.category}
            </p>
          </div>

          <div className="w-[500px] text-justify">
            <p>{business?.description_list}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBisnis;
