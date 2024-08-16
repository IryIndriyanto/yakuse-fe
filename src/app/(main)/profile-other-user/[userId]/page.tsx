"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import useFetchProfileId from "../../../../hooks/useFetchProfileId";
import useFetchBusinessesId from "../../../../hooks/useFetchBusinessId";
import BisniskuCardListOtherUser from "../../../../components/BisniskuCardListOtherUser";
import PermintaankuCardListOtherUser from "../../../../components/PermintaankuCardListOtherUser";
import ProfileCardOtherUser from "../../../../components/ProfileCardOtherUser";
import Image from "next/image";

const ProfilePage = () => {
  const { userId } = useParams();

  const [activeSection, setActiveSection] = useState("Bisnisku");

  // Pastikan userId adalah string
  const validUserId = Array.isArray(userId) ? userId[0] : userId || "";

  const { profileId, fetchErrorId, loadingId } = useFetchProfileId(validUserId);
  const { businessesId, loadingBusinessId, errorBusinessId } =
    useFetchBusinessesId(validUserId);

  if (loadingId || loadingBusinessId) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[700px] gap-4">
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

  if (fetchErrorId) {
    return (
      <div className="bg-[#FCFCFC] w-full">
        <div className="flex justify-center items-center mt-10 h-[65vh]">
          <p className="text-[24px] font-bold">
            Error: {fetchErrorId}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFCFC] w-full">
      <div className="flex justify-center items-center mt-10">
        <ProfileCardOtherUser profileId={profileId} />
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
              <p className="text-[24px] font-bold">
                Error: {errorBusinessId}
              </p>
            </div>
          )}
          {!errorBusinessId && (
            <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
              <BisniskuCardListOtherUser businessesId={businessesId} />
            </div>
          )}
        </>
      )}

      {activeSection === "Permintaanku" && (
        <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
          <PermintaankuCardListOtherUser
            image="/image-bisnis-card-list.svg"
            title="PO Jagung Pipil"
            description="Butuh jagung pipil sebanyak 100 Kg selambatnya akhir Agustus 2024"
            postedAt="09 Agustus 2024"
          />
          <PermintaankuCardListOtherUser
            image="/image-bisnis-card-list.svg"
            title="PO Gula Pasir"
            description="Butuh gula pasir sebanyak 200 Kg selambatnya akhir Agustus 2024"
            postedAt="08 Agustus 2024"
          />
          <PermintaankuCardListOtherUser
            image="/image-bisnis-card-list.svg"
            title="PO Jagung Kering"
            description="Butuh jagung kering untuk pakan burung sebanyak 300 Kg selambatnya akhir Agustus 2024"
            postedAt="07 Agustus 2024"
          />
        </div>
      )}

      <div className="mt-10"></div>
    </div>
  );
};

export default ProfilePage;