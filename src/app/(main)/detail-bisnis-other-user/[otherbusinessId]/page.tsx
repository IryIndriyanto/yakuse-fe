"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import useFetchBusinessById from "../../../../hooks/useFetchBusinessById";
import { formatRupiah } from "../../../../utils/currencyFormatter";
import { useRouter } from "next/navigation";
import CircularIndeterminate from "@/components/BisniskuCardListUser/CircularIndeterminate";

const DetailBisnisOtherUser = ({
  params,
}: {
  params: { otherbusinessId: string };
}) => {
  const { otherbusinessId } = params;
  const { business, loading, error } = useFetchBusinessById(otherbusinessId);
  const router = useRouter();

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <CircularIndeterminate />
      </div>
    );
  if (error) return <p>{error}</p>;

  const handleContactClick = () => {
    router.push(`/profile-other-user/${business?.owner_info.user_id}`);
  };

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

          <div className="flex items-start max-w-[500px] gap-20">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px] font-bold">Omset</p>
              <Rating value={business?.avg_rating} precision={0.5} readOnly />
              <p className="text-[18px] font-bold">Alamat</p>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px]">
                {formatRupiah(business?.omset || 0)}
              </p>
              <p className="text-[18px]">
                {business?.avg_rating} dari {business?.total_rater} pengulas
              </p>
              <p className="text-[18px] text-justify">{business?.location}</p>
            </div>
          </div>
          <div>
            <p className="text-[18px] font-bold text-[#005792]">
              #{business?.category}
            </p>
          </div>

          <div className="w-[500px] text-justify">
          <p dangerouslySetInnerHTML={{ __html: (business?.description_list?.join("\n") || "").replace(/\n/g, "<br><br>") }} />
          </div>
          <button
            onClick={handleContactClick}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailBisnisOtherUser;
