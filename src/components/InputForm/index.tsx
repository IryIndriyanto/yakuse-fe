import React from "react";

interface InputFormProps {
  id?: string;
  name?: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputForm = ({
  id,
  name,
  label,
  type,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
}: InputFormProps) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex flex-col gap-1">
        <label className="text-[#333333] font-bold">{label}</label>
        <input
          id={id}
          name={name}
          className="h-[35px] border-[1.5px] rounded-[10px] p-3 border-[#D9D9D9]"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default InputForm;
