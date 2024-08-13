import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonList from "../ButtonList";

interface ProfileCardProps {
  buttonLabel: string;
  onClick: () => void;
}

const ProfileCard = ({ buttonLabel, onClick }: ProfileCardProps) => {
  const router = useRouter();
  const handleEditProfile = () => {
    router.push("/edit-profile");
  };

  return (
    <div className="flex flex-col justify-between bg-[#E5F5FF] rounded-[10px] p-10 w-[1200px] font-serif min-h-[700px]">
      <div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src="/foto-munaroh.svg"
                alt="foto-munaroh"
                width={250}
                height={250}
              />
            </div>
            <div>
              <p className="text-[14px] text-[#40ABFF] cursor-pointer">
                #Kuliner #Fashion #Tech
              </p>
            </div>
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
                  <a
                    href="mailto:jane.deo@gmail.com"
                    className="text-[#40ABFF] cursor-pointer"
                  >
                    jane.deo@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="https://wa.me/6281234567890"
                    className="text-[#40ABFF] cursor-pointer"
                  >
                    081234567890
                  </a>
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <Image src="/star.svg" alt="star" width={50} height={50} />
                <div className="flex items-end">
                  <p className="text-[41px] font-bold">
                    5.0<span className="text-[#FD5F00]">/</span>
                  </p>
                  <p className="text-[#FD5F00] text-[24px] font-bold">5.0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 pl-[500px]">
            <Image
              className="cursor-pointer"
              src="/icon-pencil.svg"
              alt="icon-pencil"
              width={24}
              height={24}
              onClick={handleEditProfile}
            />
          </div>
        </div>
      </div>

      <div className="font-serif my-5">
        <h3 className="text-xl font-semibold">Tentang Saya</h3>
        <p className="text-lg text-justify py-4">
          Saya adalah pengusaha yang gigih, memulai perjalanan bisnis saya sejak
          masih di bangku sekolah. Dengan dedikasi dan kerja keras, saya telah
          berhasil membangun bisnis yang selalu mengedepankan kualitas produk
          dan kepuasan pelanggan. Saya percaya bahwa setiap produk yang saya
          tawarkan tidak hanya harus memenuhi, tetapi juga melampaui ekspektasi
          pelanggan. Melalui inovasi dan pelayanan yang luar biasa, saya terus
          berusaha untuk memberikan yang terbaik dalam setiap aspek bisnis yang
          saya jalankan.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <ButtonList
          onClick={onClick}
          label={buttonLabel}
          iconSrc="/icon-plus.svg"
          variant="Daftar"
        />
      </div>
    </div>
  );
};

export default ProfileCard;