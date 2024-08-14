import Image from "next/image";
interface ButtonListProps {
  label: string;
  variant: "Edit" | "Delete" | "Daftar";
  iconSrc?: string;
  onClick?: () => void;
}

const ButtonList = ({ label, variant, iconSrc, onClick }: ButtonListProps) => {
  const buttonStyles =
    variant === "Edit"
      ? "bg-transparent text-[#005792] border-[#005792] border-2 py-2 px-10 rounded-md hover:bg-[#005792] hover:text-white transition-all duration-300"
      : variant === "Delete"
      ? "bg-[#FD5F00] text-[#F6FCEB] border-[#FD5F00] border-2 py-2 px-10 rounded-md hover:bg-[#FF7F32] hover:text-white hover:border-[#FF7F32] transition-all duration-300"
      : "bg-transparent text-[#FD5F00] border-[#FD5F00] border-2 py-2 px-10 min-w-[300px] rounded-md hover:bg-[#FF7F32] hover:text-white hover:border-[#FF7F32] transition-all duration-300";

  return (
    <button
      className={`${buttonStyles} flex justify-center items-center gap-2`}
      onClick={onClick}
    >
      {label}
      {iconSrc && <Image src={iconSrc} alt="icon" width={24} height={40} />}
    </button>
  );
};

export default ButtonList;
