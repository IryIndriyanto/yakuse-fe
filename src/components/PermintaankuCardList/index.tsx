import Image from "next/image";
import ButtonList from "../ButtonList";

interface PermintaankuCardListProps {
  image: string;
  title: string;
  description: string;
  postedAt: string;
}

const PermintaankuCardList = ({
  image,
  title,
  description,
  postedAt,
}: PermintaankuCardListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4">
        <div className="flex items-center gap-8">
          <div>
            <Image
              className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover"
              src={image}
              alt={title}
              width={100}
              height={100}
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

        <div className="flex items-center gap-4">
          <ButtonList label="Edit" variant="Edit" />
          <ButtonList label="Delete" variant="Delete" />
        </div>
      </div>
    </div>
  );
};

export default PermintaankuCardList;