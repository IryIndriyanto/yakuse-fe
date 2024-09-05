"use client";
import Image from "next/image";
import { MyNeedId } from "./types";
import CircularIndeterminate from "../BisniskuCardListUser/CircularIndeterminate";

interface PermintaankuCardListOtherUserProps {
  needsId: MyNeedId[] | null;
}

const handleCardClick = (id: string) => {
  console.log(`Card with id ${id} clicked`);
};

const PermintaankuCardListOtherUser = ({
  needsId,
}: PermintaankuCardListOtherUserProps) => {
  if (!needsId) {
    return (
      <div className="flex flex-col items-center mt-[-50px]">
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mb-10">
      {needsId.map((needsId: MyNeedId) => (
        <div
          key={needsId.id}
          className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300"
          onClick={() => handleCardClick(needsId.id.toString())} // Convert id to string
        >
          <div className="flex items-center gap-8">
            <div>
              <Image
                className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover"
                src={needsId.user_info.user_profile_url}
                alt="Profile Picture"
                width={150}
                height={150}
              />
            </div>

            <div className="flex flex-col gap-4 max-w-[700px] text-justify">
              <h4 className="text-[28px] font-bold">{needsId.title}</h4>
              <p className="text-[18px] text-[#525455]">
                {needsId.description}
              </p>
              <p className="text-[18px] text-[#525455]">
                Dibuat pada tanggal:{" "}
                {new Date(needsId.created_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PermintaankuCardListOtherUser;
