import Image from "next/image";
import { permintaanType } from "../../data/type";
import { useRouter } from "next/router";

interface userDetailProps {
  username: string;
  userProfile: string;
  // userDetail: string;
  onClick: () => void;
}

interface permintaanDetailProps {
  item: permintaanType;
}

export function ProfilePelanggan({ username, userProfile, onClick }: userDetailProps) {
  return (
    <div className="w-full h-auto p-6 md:p-5 space-x-4 md:space-x-3 flex flex-row items-center" onClick={onClick}>
      <Image
        src={userProfile}
        alt="profile"
        width={60}
        height={60}
        className="w-14 md:w-12 h-14 md:h-12 rounded-full"
      />
      <div className="w-auto h-auto space-y-1 flex flex-col justify-center">
        <h2 className="font-normal text-3xl md:text-3xl text-b-two">{username}</h2>
        {/* <p className="font-normal text-[14px] text-b-two">{userDetail}</p> */}
      </div>
    </div>
  );
}

export default function PermintaanCard({ item }: permintaanDetailProps) {
  const handleProfileClick = () => {
    window.location.href = `/profile-other-user/${item.user_info.user_id}`;
  };

  return (
    <div className="w-full h-auto bg-w-two rounded-xl" onClick={handleProfileClick}>
      <ProfilePelanggan
        username={item.user_info.username}
        // userDetail={item.profile.description}
        userProfile={item.user_info.user_profile_url || "/default-gray-photo.webp"}
        onClick={handleProfileClick}
      />
      <div className="w-full h-auto pb-9 px-9 space-y-5 md:space-y-3">
        <div>
          <p className="font-normal text-5xl md:text-3xl text-black">{item.title}</p>
          <p className="font-thin text-[14px] md:text-xs text-black">
            {new Date(item.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <p className="font-normal text-lg md:text-[16px] text-b-two">{item.description}</p>
        <div className="flex flex-row flex-wrap gap-3">
          {/* {item.tags.map((tag, index) => ( */}
          <p
            // key={index}
            className="w-fit h-fit font-normal text-[14px] md:text-[14px] text-orangered  "
          >
            #{item.category.name}
          </p>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}
