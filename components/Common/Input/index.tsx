import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  placeholder,
  label,
  type,
  id,
  className,
  onChange,
  onKeyDown,
}: IInput) {
  return (
    <div className="flex items-center">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`rounded-md p-[2px_3px] pl-[18px] focus:outline-none ${className}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}
