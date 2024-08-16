"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useFetchProfile from "../../../hooks/useFetchProfile";
import BisniskuCardListUser from "../../../components/BisniskuCardListUser";
import PermintaankuCardListUser from "../../../components/PermintaankuCardListUser";
import ProfileCardUser from "../../../components/ProfileCardUser";
import Image from "next/image";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("Bisnisku");
  const { profile, fetchError, loading } = useFetchProfile();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = () => {
    if (activeSection === "Bisnisku") {
      router.push("/daftarin-bisnis");
    } else {
      router.push("/need-form");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[700px]">
        <Image
          src="/loading-spinner-orange.gif"
          alt="Loading..."
          width={150}
          height={150}
        />
        <p className="text-[24px] font-bold">Loading</p>
      </div>
    );
  }

  if (fetchError || error) {
    return <div className="bg-[#FCFCFC] w-full">
      <div className="flex flex-col justify-center items-center mt-10 h-[65vh] gap-4">
        <Image src="/icon-error.png" alt="error" width={100} height={100} />
        <p className="text-[24px] font-bold text-red-500">Error: {fetchError || error}</p>
      </div>
    </div>;
  }

  return (
    <div className="bg-[#FCFCFC] w-full">
      <div className="flex justify-center items-center mt-10">
        <ProfileCardUser
          buttonLabel={activeSection === "Bisnisku" ? "Daftarin Bisnis" : "Daftarin Permintaan"}
          onClick={handleClick}
          setError={setError}
          profile={profile}
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
        <div className="flex flex-col gap-4 mt-10 mb-10 w-[1200px] mx-auto">
          <BisniskuCardListUser />
        </div>
      )}

      {activeSection === "Permintaanku" && (
        <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
          <PermintaankuCardListUser />
        </div>
      )}
    </div>
  );
};

export default Profile;