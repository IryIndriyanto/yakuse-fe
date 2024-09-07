import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonList from "../ButtonList";
import { UserProfile } from "./types";
import { MyBusiness } from "../BisniskuCardListUser/types";
import CircularIndeterminate from "../BisniskuCardListUser/CircularIndeterminate";
import DOMPurify from 'dompurify';

interface ProfileCardProps {
  buttonLabel: string;
  onClick: () => void;
  setError: (error: string | null) => void;
  profile: UserProfile | null;
  business: MyBusiness | null;
}

const ProfileCardUser = ({
  buttonLabel,
  onClick,
  profile,
  business,
}: ProfileCardProps) => {
  const router = useRouter();
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsButtonLoading(true);
    onClick();
  };

  const handleEditProfile = () => {
    router.push("/edit-profile");
  };

  if (!profile) {
    return <div>No profile data available</div>;
  }

  const sanitizedAboutMe = DOMPurify.sanitize(
    (profile.about_me_list?.join("\n") || "").replace(/\n/g, "<br><br>")
  );

  return (
    <div className="flex flex-col justify-between bg-[#E5F5FF] rounded-[10px] p-10 w-[1200px] font-serif min-h-[500px]">
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
                <div className="flex gap-2 items-center">
                  <Image src="/star.svg" alt="star" width={40} height={40} />
                  <div className="flex items-end">
                    <p className="text-[41px] font-bold">
                      {business?.avg_rating !== undefined ? business.avg_rating : "0"}
                      {/* <span className="text-[#FD5F00]">/</span> */}
                    </p>
                    <p className="text-[#FD5F00] text-[24px] font-bold">/5</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-[41px] font-bold">{profile.fullname}</h1>
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
                          <a href={`mailto:${profile.email}`}>
                            {profile.email}
                          </a>
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <p className="w-20">Phone:</p>
                        <p className="text-[#40ABFF]">
                          {profile.phone ? (
                            <a href={`https://wa.me/${profile.phone}`}>
                              {profile.phone}
                            </a>
                          ) : (
                            <span style={{ color: 'black' }}>-</span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <p className="w-20">Alamat:</p>
                        <p className="max-w-[500px] text-justify">{profile.address || "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Image
                className="cursor-pointer"
                src="/icon-pencil.svg"
                alt="icon-pencil"
                width={24}
                height={24}
                onClick={handleEditProfile}
              />
            </div>
          </div>
        </div>

        <div className="font-serif my-5">
          <h3 className="text-xl font-semibold">Tentang Saya</h3>
          <p
            className="text-lg text-justify py-4"
            dangerouslySetInnerHTML={{ __html: sanitizedAboutMe }}
          />
        </div>
        <div className="flex justify-center items-center">
          {isButtonLoading ? (
            <CircularIndeterminate />
          ) : (
            <ButtonList
              onClick={handleButtonClick}
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
