"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface BisniskuCardListOtherUserProps {
  image: string;
  title: string;
  category: string;
  address: string;
}

const BisniskuCardListOtherUser = ({
  image,
  title,
  category,
  address,
}: BisniskuCardListOtherUserProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/detail-bisnis-user-2");
  };

  return (
    <div className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-8" onClick={handleCardClick}>
        <div>
          <Image
            className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover"
            src={image}
            alt="bisnisku logo"
            width={150}
            height={150}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[28px] font-bold">{title}</h4>
          <p className="text-[18px] text-[#005792]">{category}</p>
          <p className="text-[18px] text-[#525455]">{address}</p>
        </div>
      </div>

      <div>
        <Image
          src="/chevron-right.svg"
          alt="chevron right"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default BisniskuCardListOtherUser;
