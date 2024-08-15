import Image from "next/image";

interface PermintaankuCardListOtherUserProps {
  image: string;
  title: string;
  description: string;
  postedAt: string;
}

const PermintaankuCardListOtherUser = ({
  image,
  title,
  description,
  postedAt,
}: PermintaankuCardListOtherUserProps) => {
  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <div className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center gap-8">
          <div>
            <Image
              className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover"
              src={image}
              alt={title}
              width={150}
              height={150}
            />
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[28px] font-bold">{title}</h4>
            <p className="text-[18px] text-[#525455]">{description}</p>
            <p className="text-[18px] text-[#525455]">
              Dibuat pada tanggal: {postedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermintaankuCardListOtherUser;
