"use client";
import { bisnisType } from "@/data/type";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"

type RecommendationProps = {
  data: bisnisType[];
  filter: string[];
  onClick: (id: string) => void;
  loading: boolean;
};

export default function Recommendation({
  data,
  filter,
  onClick,
  loading,
}: RecommendationProps) {
  if (loading) {
    return (
      <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-5 px-3 rounded-xl cursor-pointer border-separate border-2 md:hidden"
        >
          <div className="flex flex-col rounded-2xl gap-2">
            <Skeleton className="h-4 w-[17vw]" />
            <Skeleton className="h-4 w-[6vw]" />
          </div>
          <Skeleton className="w-[50px] h-[50px] rounded-2xl" />
        </div>
      ))}
    </>
    );
  }

  return (
    <div className="w-full md:hidden">
    <div className="flex flex-col overflow-auto max-h-[525px] hide-scrollbar justify-start gap-5 ">
      {data.map((business) => (
        <div
          key={business.id}
          className="p-4 rounded-lg flex flex-row justify-between items-center shadow-md cursor-pointer"
          onClick={() => onClick(business.id)}
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold">{business.name}</h3>
            {business.category && (
              <p className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two">
                #{business.category}
              </p>
            )}
          </div>
          <Image
            src="/chevron-right.svg"
            alt="chevron-right"
            width={50}
            height={50}
            className="flex-shrink-0"
          />
        </div>
      ))}
    </div>
  </div>
  );
}

