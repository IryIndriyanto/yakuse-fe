import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonList from "../ButtonList";
import { useRouter } from "next/navigation";
import { MyNeed } from "./types";

const dummyNeeds: MyNeed[] = [
  {
    id: 1,
    title: "Bantuan Dana Pendidikan",
    user_info: {
      user_id: "1",
      fullname: "Ahmad Fauzi",
      username: "ahmad_fauzi",
      user_profile_url: "/default-gray-photo.webp",
    },
    description: "Membutuhkan dana untuk biaya kuliah semester depan.",
    is_visible: true,
    category: {
      id: 1,
      name: "Pendidikan",
    },
    created_at: "2023-09-15",
    updated_at: "2023-09-15",
  },
  {
    id: 2,
    title: "Donasi Buku Bacaan",
    user_info: {
      user_id: "2",
      fullname: "Siti Nurhaliza",
      username: "siti_nurhaliza",
      user_profile_url: "/default-gray-photo.webp",
    },
    description: "Mengumpulkan buku bacaan untuk perpustakaan desa.",
    is_visible: true,
    category: {
      id: 2,
      name: "Sosial",
    },
    created_at: "2023-09-20",
    updated_at: "2023-09-20",
  },
  {
    id: 3,
    title: "Bantuan Medis",
    user_info: {
      user_id: "3",
      fullname: "Budi Santoso",
      username: "budi_santoso",
      user_profile_url: "/default-gray-photo.webp",
    },
    description: "Membutuhkan bantuan untuk biaya operasi darurat.",
    is_visible: true,
    category: {
      id: 3,
      name: "Kesehatan",
    },
    created_at: "2023-09-25",
    updated_at: "2023-09-25",
  },
  {
    id: 4,
    title: "Penggalangan Dana Bencana",
    user_info: {
      user_id: "4",
      fullname: "Rina Sari",
      username: "rina_sari",
      user_profile_url: "/default-gray-photo.webp",
    },
    description: "Menggalang dana untuk korban bencana alam di daerah X.",
    is_visible: true,
    category: {
      id: 4,
      name: "Bencana Alam",
    },
    created_at: "2023-09-30",
    updated_at: "2023-09-30",
  },
  {
    id: 5,
    title: "Bantuan Modal Usaha",
    user_info: {
      user_id: "5",
      fullname: "Dewi Lestari",
      username: "dewi_lestari",
      user_profile_url: "/default-gray-photo.webp",
    },
    description: "Membutuhkan modal untuk memulai usaha kecil.",
    is_visible: true,
    category: {
      id: 5,
      name: "Ekonomi",
    },
    created_at: "2023-10-05",
    updated_at: "2023-10-05",
  },
];

const PermintaankuCardListUser = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [needs, setNeeds] = useState<MyNeed[] | null>(null);
  const [loadingNeeds, setLoadingNeeds] = useState(true);
  const [errorNeeds, setErrorNeeds] = useState<string | null>(null);
  const [selectedNeed, setSelectedNeed] = useState<MyNeed | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNeeds(dummyNeeds);
      setLoadingNeeds(false);
    }, 1000);
  }, []);

  const handleEditClick = () => {
    router.push("/belum-ada-nih");
  };

  const handleDeleteClick = (need: MyNeed) => {
    setSelectedNeed(need);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    setIsModalVisible(false);
    console.log("Pake API delete bro");
    // Here you can call your delete API
  };

  const cancelDelete = () => {
    setIsModalVisible(false);
    setSelectedNeed(null);
  };

  return (
    <div className="flex flex-col gap-4 mb-10">
      {loadingNeeds ? (
        <div className="flex flex-col items-center gap-4">
          <Image src="/loading-spinner-orange.gif" alt="Loading..." width={100} height={100} />
          <p className="text-[20px] font-bold">Loading</p>
        </div>
      ) : errorNeeds ? (
        <div className="flex flex-col items-center gap-4">
          <Image src="/icon-error.png" alt="Error" width={100} height={100} />
          <p className="text-[20px] font-bold">Error: {errorNeeds}</p>
        </div>
      ) : needs === null ? (
        <p>Data tidak tersedia</p>
      ) : (
        needs?.map((need: MyNeed) => (
          <div className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300" key={need.id}>
            <div className="flex items-center gap-8">
              <div>
                <Image
                  className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover"
                  src={need.user_info.user_profile_url}
                  alt="Profile Picture"
                  width={150}
                  height={150}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[28px] font-bold">{need.title}</h4>
                <p className="text-[18px] text-[#525455]">{need.description}</p>
                <p className="text-[18px] text-[#525455]">
                  Dibuat pada tanggal: {new Date(need.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ButtonList label="Edit" variant="Edit" onClick={handleEditClick} />
              <ButtonList
                label="Delete"
                variant="Delete"
                onClick={() => handleDeleteClick(need)}
              />
            </div>
          </div>
        ))
      )}

      {isModalVisible && selectedNeed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[300px] sm:w-[400px]">
            <h2 className="text-[20px] font-bold mb-4 ml-6">
              Konfirmasi Hapus
            </h2>
            <p className="text-[16px] mb-6 ml-6">
              Apakah Anda yakin ingin menghapus &quot;{selectedNeed.title}&quot;?
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