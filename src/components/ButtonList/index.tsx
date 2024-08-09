<<<<<<< HEAD
interface ButtonListProps {
  label: string;
  variant: "Edit" | "Delete";
}

const ButtonList = ({ label, variant }: ButtonListProps) => {
=======
import Image from "next/image";
interface ButtonListProps {
  label: string;
  variant: "Edit" | "Delete" | "Daftar";
  iconSrc?: string;
}

const ButtonList = ({ label, variant, iconSrc }: ButtonListProps) => {
>>>>>>> d2ee105fce46038c9ceb7aefec93435673e7c619
  const buttonStyles =
    variant === "Edit"
      ? "bg-transparent text-[#005792] border-[#005792] border-2 py-2 px-10 rounded-md hover:bg-[#005792] hover:text-white transition-all duration-300"
      : "bg-[#FD5F00] text-[#F6FCEB] border-[#FD5F00] border-2 py-2 px-10 rounded-md hover:bg-[#FF7F32] hover:text-white hover:border-[#FF7F32] transition-all duration-300";

<<<<<<< HEAD
  return <button className={buttonStyles}>{label}</button>;
=======
  return (
    <button
      className={`${buttonStyles} flex justify-center items-center gap-2`}
    >
      {label}
      {iconSrc && <Image src={iconSrc} alt="icon" width={24} height={40} />}
    </button>
  );
>>>>>>> d2ee105fce46038c9ceb7aefec93435673e7c619
};

export default ButtonList;
