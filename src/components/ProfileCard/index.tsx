import Image from "next/image";
import ButtonList from "../ButtonList";

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-between bg-[#E5F5FF] rounded-[10px] p-10 w-[1200px] h-[700px] font-serif">
      <div className="flex gap-10">
        <div>
          <Image
            src="/foto-munaroh.svg"
            alt="foto-munaroh"
            width={250}
            height={250}
          />
        </div>

        <div className="flex">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[41px] font-bold">Jane Deo</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-bold text-[#40ABFF]">Contact</p>
              <p>
                Email:{" "}
                <span className="text-[#40ABFF] cursor-pointer">
                  jane.deo@gmail.com
                </span>
              </p>
              <p>
                Phone:{" "}
                <span className="text-[#40ABFF] cursor-pointer">
                  081234567890
                </span>
              </p>
              <p className="text-[14px] text-[#40ABFF] cursor-pointer">
                #Kuliner #Fashion #Tech
              </p>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <Image src="/star.svg" alt="star" width={50} height={50} />
              <h1 className="text-6xl font-bold">
                5.0/<span className="text-[#40ABFF] text-4xl">5.0</span>
              </h1>
            </div>
          </div>

          <div className="pt-4 pl-[500px]">
            <Image
              className="cursor-pointer"
              src="/icon-pencil.svg"
              alt="icon-pencil"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <ButtonList
          label="Daftarin Bisnis"
          iconSrc="/icon-plus.svg"
          variant="Daftar"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
