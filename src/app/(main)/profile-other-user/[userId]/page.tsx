"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import useFetchProfileId from "../../../../hooks/useFetchProfileId";
import useFetchBusinessesId from "../../../../hooks/useFetchBusinessId";
import useFetchNeedsId from "../../../../hooks/useFetchNeedsId";
import BisniskuCardListOtherUser from "../../../../components/BisniskuCardListOtherUser";
import PermintaankuCardListOtherUser from "../../../../components/PermintaankuCardListOtherUser";
import ProfileCardOtherUser from "../../../../components/ProfileCardOtherUser";
import Image from "next/image";
import CircularIndeterminate from "@/components/BisniskuCardListUser/CircularIndeterminate";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const ProfilePage = () => {
  const { userId } = useParams();
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("Bisnisku");
  const [error, setError] = useState<string | null>(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  // Pastikan userId adalah string
  const validUserId = Array.isArray(userId) ? userId[0] : userId || "";

  const { profileId, fetchErrorId, loadingId } = useFetchProfileId(validUserId);
  const { businessesId, loadingBusinessId, errorBusinessId } =
    useFetchBusinessesId(validUserId);
  const { needsId, loadingNeedsId, errorNeedsId } =
    useFetchNeedsId(validUserId);

  useEffect(() => {
    if (fetchErrorId || errorBusinessId || errorNeedsId || error) {
      setErrorModalOpen(true);
    }
  }, [fetchErrorId, errorBusinessId, errorNeedsId, error]);

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
    if (
      fetchErrorId?.includes("Unauthorized") ||
      fetchErrorId?.includes("Forbidden")
    ) {
      router.push("/login");
    }
  };

  if (loadingId || loadingBusinessId || loadingNeedsId) {
    return (
      <div className="flex flex-col justify-center items-center h-[75vh]">
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <div className="bg-[#FCFCFC] w-full">
      <div className="flex justify-center items-center mt-10">
        <ProfileCardOtherUser profileId={profileId} business={null} />
      </div>
      <div className="my-20 w-[1200px] mx-auto">
        <div className="flex justify-between w-[800px] mx-auto pb-4">
          <p
            className={`text-[24px] font-bold cursor-pointer transition-all duration-300 relative ${
              activeSection === "Bisnisku" ? "text-[#FD5F00]" : "text-black"
            }`}
            onClick={() => setActiveSection("Bisnisku")}
          >
            Bisnisku
            {activeSection === "Bisnisku" && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FD5F00] transition-all duration-300"></span>
            )}
          </p>
          <p
            className={`text-[24px] font-bold cursor-pointer transition-all duration-300 relative ${
              activeSection === "Permintaanku" ? "text-[#FD5F00]" : "text-black"
            }`}
            onClick={() => setActiveSection("Permintaanku")}
          >
            Permintaanku
            {activeSection === "Permintaanku" && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FD5F00] transition-all duration-300"></span>
            )}
          </p>
        </div>
      </div>

      {activeSection === "Bisnisku" && (
        <>
          {errorBusinessId && (
            <div className="flex flex-col justify-center items-center mt-10 gap-4">
              <Image
                src="/icon-error.png"
                alt="Error"
                width={100}
                height={100}
              />
              <p className="text-[24px] font-bold">Error: {errorBusinessId}</p>
            </div>
          )}
          {!errorBusinessId && (
            <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
              <BisniskuCardListOtherUser businessesId={businessesId || []} />
            </div>
          )}
        </>
      )}

      {activeSection === "Permintaanku" && (
        <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
          <PermintaankuCardListOtherUser needsId={needsId || []} />
        </div>
      )}

      <div className="mt-10"></div>

      <Modal open={errorModalOpen} onClose={handleErrorModalClose}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Error</h2>
            <p className="mb-6">
              {fetchErrorId || errorBusinessId || errorNeedsId || error}
            </p>
            <div className="flex justify-end">
              <Button onClick={handleErrorModalClose} variant="outlined">
                Tutup
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
