import Image from "next/image";

interface BisniskuCardListProps {
  image: string;
  title: string;
  category: string;
  address: string;
}

const BisniskuCardList = ({ image, title, category, address }: BisniskuCardListProps) => {
  return (
      <div className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4">
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
            <p className="text-[18px] text-[#525455]">
              {address}
            </p>
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
  );
};

export default BisniskuCardList;