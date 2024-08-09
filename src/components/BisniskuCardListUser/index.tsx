"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface BisniskuCardListUserProps {
  image: string;
  title: string;
  category: string;
  address: string;
}

const BisniskuCardListUser = ({
  image,
  title,
  category,
  address,
}: BisniskuCardListUserProps) => {
  const router = useRouter();

  const handleChevronClick = () => {
    router.push("/detail-bisnis");
  };

  return (
    <div className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-8">
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
          className="cursor-pointer"
          src="/chevron-right.svg"
          alt="chevron right"
          width={50}
          height={50}
          onClick={handleChevronClick}
        />
      </div>
    </div>
  );
};

export default BisniskuCardListUser;