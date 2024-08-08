import BisniskuCardList from "@/components/BisniskuCardList";
import PermintaankuCardList from "@/components/PermintaankuCardList";

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
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

      <div className="flex flex-col gap-4">
        <PermintaankuCardList
          image="/foto-munaroh.svg"
          title="PO Jagung"
          description="Membutuhkan 100Kg Jagung secepatnya sebelum bulan Desember"
          postedAt="8 Agustus 2024"
        />
        <PermintaankuCardList
          image="/foto-munaroh.svg"
          title="PO Beras"
          description="Membutuhkan 500Kg Beras untuk acara pernikahan"
          postedAt="15 September 2023"
        />
        <PermintaankuCardList
          image="/foto-munaroh.svg"
          title="PO Telur Ayam"
          description="Mencari 1000 butir telur ayam untuk industri kue"
          postedAt="3 November 2023"
        />
      </div>
    </div>
  );
};

export default Profile;
