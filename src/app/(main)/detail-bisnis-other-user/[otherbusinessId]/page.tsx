"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import useFetchBusinessById from "../../../../hooks/useFetchBusinessById";
import { formatRupiah } from "../../../../utils/currencyFormatter";

const DetailBisnisOtherUser = ({
  params,
}: {
  params: { otherbusinessId: string };
}) => {
  const { otherbusinessId } = params;
  const { business, loading, error } = useFetchBusinessById(otherbusinessId);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <Image
          src="/loading-spinner-orange.gif"
          alt="loading"
          width={150}
          height={150}
        />
        <p className="text-[#40ABFF] text-[24px] font-bold">Loading</p>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#FCFCFC] font-serif">
      <div className="grid grid-cols-2 gap-20 p-10">
        <div>
          <Image
            className="sticky top-8"
            src={business?.photo_url || "/default-gray-photo.png"}
            alt="detail-bisnis-1"
            width={500}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="max-w-[400px]">
              <h1 className="text-5xl font-bold">{business?.name}</h1>
            </div>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px] font-bold">Omset</p>
              <Rating value={business?.rating} precision={0.5} readOnly />
            </div>

            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px]">
                {formatRupiah(business?.omset || 0)}
              </p>
              <p className="text-[18px]">
                {business?.rating}/5 dari {business?.total_rater} pengulas
              </p>
            </div>
          </div>
          <div>
            <p className="text-[18px] font-bold text-[#005792]">
              #{business?.category}
            </p>
          </div>

          <div className="w-[500px] text-justify">
            <p>{business?.description_list}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBisnisOtherUser;

// import Navbar from "../../../../components/Navbar";
// import Footer from "../../../../components/Footer";
// import Image from "next/image";
// import Rating from "@mui/material/Rating";

// const DetailBisnis = () => {
//   return (
//     <div className="bg-[#FCFCFC] font-serif">
//       <div>
//         <Navbar />
//       </div>

//       <div className="flex justify-center gap-20 p-10">
//         <div>
//           <Image
//             src="/image-bisnis-card-list.svg"
//             alt="detail-bisnis-1"
//             width={500}
//             height={300}
//           />
//         </div>

//         <div className="flex flex-col gap-6">
//           <div className="flex justify-between">
//             <h1 className="text-5xl font-bold">Jualan Jagung</h1>
//           </div>

//           <div className="flex gap-20">
//             <div className="flex flex-col justify-center gap-2">
//               <p className="text-[18px] font-bold">Harga</p>
//               <Rating defaultValue={5} precision={0.5} readOnly />
//               {/* <p className="text-[18px] font-bold">Terjual</p> */}
//             </div>

//             <div className="flex flex-col justify-center gap-2">
//               <p className="text-[18px]">Rp. 14.000 / Kg</p>
//               <p className="text-[18px]">5/5 dari 1000 pengulas</p>
//               {/* <p className="text-[18px]">1000</p> */}
//             </div>
//           </div>
//           <div>
//             <p className="text-[18px] font-bold text-[#005792]">#Kuliner</p>
//           </div>

//           <div className="w-[500px] text-justify">
//             <p>
//               Deskripsi Produk Jagung Manis Segar Jagung Manis Segar dari Petani
//               Lokal - Pilihan Terbaik untuk Keluarga Anda! 🍃 Asal & Kualitas:
//               Ditanam dengan penuh cinta di ladang-ladang subur Indonesia.
//               Dipanen pada puncak kematangan untuk memastikan rasa manis dan
//               tekstur renyah yang sempurna. 🍂 Keunggulan Produk: 100% Organik
//               dan Bebas Pestisida. Rasanya Manis Alami, tidak perlu tambahan
//               gula. Cocok untuk berbagai jenis masakan, seperti jagung rebus,
//               bakar, sup, dan salad.Cocok untuk berbagai jenis masakan, seperti
//               jagung rebus, bakar, sup, dan salad. 🌽 Manfaat Kesehatan: Kaya
//               akan serat yang baik untuk pencernaan. Sumber Vitamin B dan C yang
//               tinggi. Mengandung antioksidan yang membantu melindungi tubuh dari
//               radikal bebas. 📦 Kemasan & Pengiriman: Dikemas rapi dan higienis
//               untuk menjaga kesegaran. Pengiriman cepat dan aman, langsung dari
//               ladang ke rumah Anda. 📣 Promo & Penawaran Khusus: Diskon spesial
//               untuk pembelian grosir. Garansi kepuasan atau uang kembali. Kenapa
//               Memilih Jagung Kami? Jagung kami ditanam dengan metode pertanian
//               berkelanjutan yang menghormati alam. Kami bekerja sama langsung
//               dengan petani lokal untuk memastikan bahwa setiap butir jagung
//               yang Anda nikmati adalah hasil terbaik dari bumi Indonesia.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default DetailBisnis;
