import { useState } from "react";
import Image from "next/image";
import ButtonList from "../ButtonList";
import { useRouter } from "next/navigation";
import { MyNeed } from "./types";
import useFetchNeeds from "../../hooks/useFetchNeeds";
import axios from "axios";
import { BASE_URL } from "@/utils/constant";
import toast from "react-hot-toast";
import CircularIndeterminate from '../BisniskuCardListUser/CircularIndeterminate';

const PermintaankuCardListUser = () => {
  const router = useRouter();
  const { needs, setNeeds, loadingNeeds, errorNeeds } = useFetchNeeds();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState<MyNeed | null>(null);

  const handleEditClick = (needId: string) => {
    router.push(`/edit-permintaan/${needId}`);
  };

  const handleDeleteClick = (need: MyNeed) => {
    setSelectedNeed(need);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    setIsModalVisible(false);
    const deleteNeed = async () => {
      if (selectedNeed) {
        try {
          const response = await axios.delete(`${BASE_URL}/user-need/hide/my-need/${selectedNeed.id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          });
          if (response.status === 204) {
            toast.success("Permintaan berhasil dihapus");
            setNeeds((needs || []).filter(need => need.id !== selectedNeed.id));
            router.push("/profile-user");
          } else {
            toast.error("Gagal menghapus permintaan");
            console.log(response);
            console.log(response.statusText);
            console.log(response.data);
          }
        } catch (error) {
          console.error("Error deleting need:", error);
          toast.error("Terjadi kesalahan saat menghapus permintaan");
        }
      }
    };
    deleteNeed();
  };

  const cancelDelete = () => {
    setIsModalVisible(false);
    setSelectedNeed(null);
  };

  return (
    <div className="flex flex-col gap-4 mb-10">
      {loadingNeeds ? (
        <div className="flex flex-col items-center mt-[-50px]">
            <CircularIndeterminate />
          </div>
      ) : errorNeeds ? (
        <div className="flex flex-col items-center gap-4">
          <Image src="/icon-error.png" alt="Error" width={100} height={100} />
          <p className="text-[20px] font-bold">Error: {errorNeeds}</p>
        </div>
      ) : needs?.filter(need => need.is_visible === true).length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-[20px] font-bold">
            Anda belum memiliki permintaan
          </p>
        </div>
      ) : (
        needs?.map((need: MyNeed) => (
          need?.is_visible ? (
            <div
              className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300"
              key={need.id}
            >
              <div className="flex items-center gap-8">
                <div>
                  <Image
                    className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover"
                    src={
                      need.user_info.user_profile_url ||
                      "/default-gray-photo.webp"
                    }
                    alt="Profile Picture"
                    width={150}
                    height={150}
                  />
                </div>

                <div className="flex flex-col gap-4 max-w-[700px] text-justify">
                  <h4 className="text-[28px] font-bold">{need.title}</h4>
                  <p className="text-[18px] text-[#525455]">{need.description}</p>
                  <p className="text-[18px] text-[#525455]">
                    Dibuat pada tanggal:{" "}
                    {new Date(need.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <ButtonList
                  label="Edit"
                  variant="Edit"
                  onClick={() => handleEditClick(need.id.toString())}
                />
                <ButtonList
                  label="Delete"
                  variant="Delete"
                  onClick={() => handleDeleteClick(need)}
                />
              </div>
            </div>
          ) : null
        ))
      )}

      {isModalVisible && selectedNeed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[300px] sm:w-[400px]">
            <h2 className="text-[20px] font-bold mb-4 ml-6">
              Konfirmasi Hapus
            </h2>
            <p className="text-[16px] mb-6 ml-6">
              Apakah Anda yakin ingin menghapus &quot;{selectedNeed.title}
              &quot;?
            </p>

            <div className="flex items-center justify-center gap-4 w-full">
              <button
                onClick={cancelDelete}
                className="bg-transparent text-[#005792] border-[#005792] border-2 py-2 px-4 rounded-md hover:bg-[#005792] hover:text-white transition-all duration-300"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="bg-[#FD5F00] text-[#F6FCEB] border-[#FD5F00] border-2 py-2 px-4 rounded-md hover:bg-[#FF7F32] hover:text-white hover:border-[#FF7F32] transition-all duration-300"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PermintaankuCardListUser;
