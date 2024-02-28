import { InputHTMLAttributes, useId } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  placeholder,
  label,
  type,
  className,
  onChange,
}: IInput) {
  const id = useId();

  return (
    <div className="flex items-center">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`rounded-md p-[2px_3px] focus:outline-none ${className}`}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}
