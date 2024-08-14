import React from "react";

interface TextAreaProps {
  id?: string;
  name?: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  id,
  name,
  label,
  placeholder,
  className,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <div className={`flex flex-col w-full h-full ${className}`}>
      <div className="flex flex-col gap-2 h-full">
        <label>{label}</label>
        <textarea
          id={id}
          name={name}
          className="h-full border-[1.5px] rounded-[10px] p-3 border-[#D9D9D9]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextArea;
