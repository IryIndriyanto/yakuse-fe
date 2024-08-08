import Image from "next/image";

const Navbar = () => {
  return (
    <div className="font-serif bg-[#FCFCFC] p-4 flex justify-between px-[50px]">
      <div className="flex flex-col justify-center gap-4">
        <div>
          <h1 className="text-5xl font-bold text-[#40ABFF]">YAKUSE</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/move-left.svg" alt="move-left" width={24} height={24} />
          <p className="text-[#FD5F00] text-[23px] font-bold">
            Jelajahi Komunitas
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ul className="flex items-center gap-4">
          <li className="text-[18px] cursor-pointer hover:text-[#FD5F00] transition-all duration-300">
            Temukan Kebutuhan
          </li>
          <li className="text-[18px] cursor-pointer hover:text-[#FD5F00] transition-all duration-300">
            Temukan Pembeli
          </li>
          <li className="text-[18px] cursor-pointer hover:text-[#FD5F00] transition-all duration-300">
            Temukan Partner
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-16">
        <div className="cursor-pointer">
          <p className="text-[18px] font-bold">Jane Deo</p>
          <p className="text-[12px]">Pedagang Jagung</p>
        </div>

        <div>
          <Image
            className="rounded-full w-[40px] h-[40px] bg-image bg-cover bg-center object-cover cursor-pointer"
            src="/foto-munaroh.svg"
            alt="user"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
