import Image from "next/image";
import { OtherUserProfile, OtherUserBusiness } from "./types";

interface ProfileCardOtherUserProps {
  profileId: OtherUserProfile | null;
  business: OtherUserBusiness | null;
}

const ProfileCardOtherUser = ({ profileId, business }: ProfileCardOtherUserProps) => {
  if (!profileId) {
    return <div>No profile data available</div>;
  }

  return (
    <div className="flex flex-col justify-between bg-[#E5F5FF] rounded-[10px] p-10 w-[1200px] font-serif min-h-[500px]">
      <div>
        <div>
          <div className="flex justify-between gap-10">
            <div className="flex justify-center gap-10">
              <div className="flex flex-col gap-2">
                <div>
                  <Image
                    src={profileId?.photo_url || "/default-gray-photo.webp"}
                    alt="foto-user"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <Image src="/star.svg" alt="star" width={50} height={50} />
                  <div className="flex items-end">
                    <p className="text-[41px] font-bold">
                      {business?.avg_rating !== undefined ? business.avg_rating : "0.0"}
                      <span className="text-[#FD5F00]">/</span>
                    </p>
                    <p className="text-[#FD5F00] text-[24px] font-bold">5.0</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-[41px] font-bold">{profileId?.fullname}</h1>
                </div>
                <div className="flex">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[#40ABFF] font-bold">
                        Contact
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <p className="w-20">Email:</p>
                        <p className="text-[#40ABFF]">
                          <a href={`mailto:${profileId?.email}`}>
                            {profileId?.email}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <p className="w-20">Phone:</p>
                        <p className="text-[#40ABFF]">
                          {profileId?.phone ? (
                            <a href={`https://wa.me/${profileId?.phone}`}>
                              {profileId?.phone}
                            </a>
                          ) : (
                            <span style={{ color: 'black' }}>-</span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <p className="w-20">Alamat:</p>
                        <p className="max-w-[500px]">{profileId?.address || "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-serif my-5">
          <h3 className="text-xl font-semibold">Tentang Saya</h3>
          <p className="text-lg text-justify py-4">
            {profileId?.about_me_list ? profileId?.about_me_list : "Belum ada informasi tentang saya."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardOtherUser;
