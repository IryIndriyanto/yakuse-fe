/* eslint-disable @next/next/no-img-element */
interface FormButtonProps {
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const FormButton = ({
  text,
  onClick,
  type,
  disabled,
  isLoading,
}: FormButtonProps) => {
  const spinner = (
    <img
      src="/assets/icons/spinner.gif"
      alt="spinner image"
      className="h-full"
    />
  );

  return (
    <div className="w-full">
      <button
        className={`w-full h-[34px] flex justify-center items-center rounded-[10px] ${disabled?'bg-gray-200' : 'bg-[#FD5F00] hover:bg-[#FD5F00]/80'} text-[18px] text-[#FFFFFF] `}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {isLoading ? spinner : text}
      </button>
    </div>
  );
};

export default FormButton;
