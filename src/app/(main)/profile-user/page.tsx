"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useFetchProfile from "../../../hooks/useFetchProfile";
import BisniskuCardListUser from "../../../components/BisniskuCardListUser";
import PermintaankuCardListUser from "../../../components/PermintaankuCardListUser";
import ProfileCardUser from "../../../components/ProfileCardUser";
import Image from "next/image";
import CircularIndeterminate from "@/components/BisniskuCardListUser/CircularIndeterminate";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("Bisnisku");
  const { profile, fetchError, loading } = useFetchProfile();
  const [error, setError] = useState<string | null>(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (fetchError || error) {
      setErrorModalOpen(true);
    }
  }, [fetchError, error]);

  const handleClick = () => {
    try {
      if (activeSection === "Bisnisku") {
        router.push("/daftarin-bisnis");
      } else {
        router.push("/need-form");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengarahkan halaman.");
    }
  };

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
    if (fetchError?.includes("Unauthorized") || fetchError?.includes("Forbidden")) {
      router.push("/login");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[75vh]">
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <div className="bg-[#FCFCFC] w-full">
      <div className="flex justify-center items-center mt-10">
        <ProfileCardUser
          buttonLabel={
            activeSection === "Bisnisku"
              ? "Daftarin Bisnis"
              : "Daftarin Permintaan"
          }
          onClick={handleClick}
          setError={setError}
          profile={profile}
          business={null}
        />
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
        <div className="flex flex-col gap-4 mt-10 mb-10 w-[1200px] mx-auto cursor-pointer">
          <BisniskuCardListUser />
        </div>
      )}

      {activeSection === "Permintaanku" && (
        <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
          <PermintaankuCardListUser />
        </div>
      )}

      <Modal open={errorModalOpen} onClose={handleErrorModalClose}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Error</h2>
            <p className="mb-6">{fetchError || error}</p>
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

export default Profile;
