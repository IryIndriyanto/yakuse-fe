import Image from "next/image";
import ButtonList from "../ButtonList";

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-between bg-[#E5F5FF] rounded-[10px] p-10 w-[1200px] h-[700px] font-serif">
      <div className="flex gap-10 ml-80">
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
                #Kuliner
              </p>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <Image src="/star.svg" alt="star" width={50} height={50} />
              <h1 className="text-6xl font-bold">
                5.0/<span className="text-[#40ABFF] text-4xl">5.0</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[827px] h-[165px] bg-[#E5F5FF] font-serif mt-6">
        <h3 className="text-xl font-semibold mb-3 ml-80">Tentang Saya</h3>
        <p className="text-lg ml-80">
          Saya adalah pengusaha yang gigih dimulai sejak saat saya masih
          dibangku sekolah, maka dari itu, bisnis yang saya dirikan tentunya
          memiliki kualitas produk yang sangat baik dan tidak akan mengecewakan
          pelanggan.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
