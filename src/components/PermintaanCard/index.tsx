import Image from "next/image";
import { permintaanType } from "../../data/type";

interface userDetailProps {
  username: string;
  userProfile: string;
  // userDetail: string;
}

interface permintaanDetailProps {
  item: permintaanType;
}

export function ProfilePelanggan({ username, userProfile }: userDetailProps) {
  return (
    <div className="w-full h-auto p-7 md:p-6 space-x-4 md:space-x-3 flex flex-row items-center">
      <Image
        src={userProfile}
        alt="profile"
        width={60}
        height={60}
        className="w-14 md:w-12 h-14 md:h-12"
      />
      <div className="w-auto h-auto space-y-1 flex flex-col justify-center">
        <h2 className="font-normal text-5xl md:text-3xl text-b-two">{username}</h2>
        {/* <p className="font-normal text-[14px] text-b-two">{userDetail}</p> */}
      </div>
    </div>
  );
}

export default function PermintaanCard({ item }: permintaanDetailProps) {
  return (
    <div className="w-full h-auto bg-w-two rounded-xl">
      <ProfilePelanggan
        username={item.user_info.owner_username}
        // userDetail={item.profile.description}
        userProfile={item.user_info.user_profile_url}
      />
      <div className="w-full h-auto pb-9 px-9 space-y-5 md:space-y-3">
        <div>
          <p className="font-normal text-5xl md:text-3xl text-black">{item.title}</p>
          <p className="font-thin text-[14px] md:text-xs text-black">date</p>
        </div>
        <p className="font-normal text-lg md:text-[16px] text-b-two">{item.description}</p>
        <div className="flex flex-row flex-wrap gap-3">
          {/* {item.tags.map((tag, index) => ( */}
          <p
            // key={index}
            className="w-fit h-fit font-normal text-[16px] md:text-[14px] text-b-two border-[1px] border-b-two rounded-full py-2 px-4"
          >
            {item.category.name}
          </p>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}
