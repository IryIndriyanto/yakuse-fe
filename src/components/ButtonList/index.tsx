interface ButtonListProps {
  label: string;
  variant: "Edit" | "Delete";
}

const ButtonList = ({ label, variant }: ButtonListProps) => {
  const buttonStyles =
    variant === "Edit"
      ? "bg-transparent text-[#005792] border-[#005792] border-2 py-2 px-10 rounded-md hover:bg-[#005792] hover:text-white transition-all duration-300"
      : "bg-[#FD5F00] text-[#F6FCEB] border-[#FD5F00] border-2 py-2 px-10 rounded-md hover:bg-[#FF7F32] hover:text-white hover:border-[#FF7F32] transition-all duration-300";

  return <button className={buttonStyles}>{label}</button>;
};

export default ButtonList;
