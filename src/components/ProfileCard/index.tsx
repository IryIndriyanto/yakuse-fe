import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="w-[1200px] h-[693px] bg-[#E5F5FF] p-6 flex flex-col items-center space-y-4">
      <div className="w-[622px] h-[370px] bg-[#E5F5FF] rounded-lg flex">
        {/* Gambar */}
        <div className="w-[250px] h-[370px] relative">
          <Image
            src="/Pengusaha_UMKM.png"
            alt="Pengusaha UMKM"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Teks */}
        <div className="ml-8 flex flex-col font-serif">
          <h2 className="text-2xl font-bold mb-2">Jane Deo</h2>
          <p className="text-sm">Contact</p>
          <p className="text-lg">Email : JaneDeo@example.com</p>
          <p className="text-lg">Phone : (909) - 0000 8888</p>
          <p className="text-lg">#Kuliner</p>
          <p className="text-lg">5.0/5.0</p>
        </div>
      </div>
      <div className="w-[827px] h-[165px] bg-[#E5F5FF] p-4 font-serif">
        <h3 className="text-xl font-semibold ml-20 mb-3">Tentang Saya</h3>
        <p className="text-lg ml-20">
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
