interface FormButtonProps {
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const FormButton = ({ text, onClick, type }: FormButtonProps) => {
  return (
    <div className="w-full">
      <button
        className="w-full h-[34px] rounded-[10px] bg-[#FD5F00] text-[18px] text-[#FFFFFF] hover:bg-[#FD5F00]/80"
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default FormButton;
