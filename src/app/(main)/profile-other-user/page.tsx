"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import BisniskuCardListOtherUser from "../../../components/BisniskuCardListOtherUser";
import PermintaankuCardListOtherUser from "../../../components/PermintaankuCardListOtherUser";
import ProfileCardOtherUser from "../../../components/ProfileCardOtherUser";
import { BASE_URL } from "../../../utils/constant";
import Image from "next/image";
import { OtherUserProfile } from "../../../components/ProfileCardOtherUser/types";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("Bisnisku");
  const [errorId, setErrorId] = useState<string | null>(null);
  const [profileId, setProfileId] = useState<OtherUserProfile | null>(null);
  const [loadingId, setLoadingId] = useState<boolean>(true);

  // if (loadingId) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[700px]">
  //       <Image
  //         src="/loading-gear.gif"
  //         alt="Loading..."
  //         width={300}
  //         height={300}
  //       />
  //     </div>
  //   );
  // }

  if (errorId) {
    return (
      <div className="bg-[#FCFCFC] w-full">
        <div className="flex justify-center items-center mt-10 h-[65vh]">
          <p className="text-[24px] font-bold">Error: {errorId}</p>
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
        <div className="flex flex-col gap-4 mt-10 w-[1200px] mx-auto">
          <BisniskuCardListOtherUser />
        </div>
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
