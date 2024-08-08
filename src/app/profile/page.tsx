import BisniskuCardList from "@/components/BisniskuCardList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";

const Profile = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div>
        <Navbar />
      </div>

      <div className="flex justify-center items-center mt-10">
        <ProfileCard />
      </div>

      <div className="flex justify-between items-center my-20 w-[1200px] mx-auto px-32">
        <p className="text-[24px] font-bold hover:text-[#FD5F00] transition-all duration-300">Bisnisku</p>
        <p className="text-[24px] font-bold hover:text-[#FD5F00] transition-all duration-300">Permintaanku</p>

      </div>

      <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
        <BisniskuCardList
          image="/image-bisnis-card-list.svg"
          title="Popcorn"
          category="#Kuliner"
          address="Jl. Raya Bogor No. 123, Kel. Ciracas, Kec. Ciracas, Jakarta Timur, DKI Jakarta 13740"
        />
        <BisniskuCardList
          image="/image-bisnis-card-list.svg"
          title="Caramel"
          category="#Kuliner"
          address="Jl. Raya Bogor Km. 30, Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat 16452"
        />
        <BisniskuCardList
          image="/image-bisnis-card-list.svg"
          title="Makanan Burung"
          category="#PakanHewan"
          address="Jl. Raya Serpong No. 89, Kel. Serpong, Kec. Serpong, Kota Tangerang Selatan, Banten 15310"
        />
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;