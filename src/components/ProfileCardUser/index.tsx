import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonList from "../ButtonList";
import { UserProfile } from "./types";

interface ProfileCardProps {
  buttonLabel: string;
  onClick: () => void;
  setError: (error: string | null) => void;
  profile: UserProfile | null;
}

const ProfileCardUser = ({
  buttonLabel,
  onClick,
  profile,
}: ProfileCardProps) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditProfile = () => {
    setIsEditing(true);
    router.push("/edit-profile");
  };

  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div className="flex flex-col justify-between bg-[#E5F5FF] rounded-[10px] p-10 w-[1200px] font-serif min-h-[700px]">
      <div>
        <div>
          <div className="flex justify-between gap-10">
            <div className="flex justify-center gap-10">
              <div className="flex flex-col gap-2">
                <div>
                  <Image
                    src={profile.photo_url || "/default-gray-photo.webp"}
                    alt="foto-munaroh"
                    width={250}
                    height={250}
                  />
                </div>
                <div>
                  <p className="text-[14px] text-[#40ABFF] cursor-pointer">
                    #Kuliner #Fashion #Tech
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-[41px] font-bold">
                      {profile.fullname}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] font-bold text-[#40ABFF]">
                      Contact
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-[#40ABFF] cursor-pointer"
                      >
                        {profile.email}
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <a
                        href={`https://wa.me/${profile.phone}`}
                        className="text-[#40ABFF] cursor-pointer"
                      >
                        {profile.phone}
                      </a>
                    </p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <Image src="/star.svg" alt="star" width={50} height={50} />
                    <div className="flex items-end">
                      <p className="text-[41px] font-bold">
                        5.0<span className="text-[#FD5F00]">/</span>
                      </p>
                      <p className="text-[#FD5F00] text-[24px] font-bold">
                        5.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              {isEditing ? (
                <Image
                  src="/loading-spinner-orange.gif"
                  alt="Loading..."
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  className="cursor-pointer"
                  src="/icon-pencil.svg"
                  alt="icon-pencil"
                  width={24}
                  height={24}
                  onClick={handleEditProfile}
                />
              )}
            </div>
          </div>
        </div>

        <div className="font-serif my-5 min-h-64">
          <h3 className="text-xl font-semibold">Tentang Saya</h3>
          <p className="text-lg text-justify py-4">
            {profile.about_me_list.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </p>
        </div>

        <div className="flex justify-center items-center">
          {isEditing ? (
            <Image
              src="/loading-spinner-orange.gif"
              alt="Loading..."
              width={50}
              height={50}
            />
          ) : (
            <ButtonList
              onClick={onClick}
              label={buttonLabel}
              iconSrc="/icon-plus.svg"
              variant="Daftar"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCardUser;
