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
        className={`rounded-3xl px-3 py-2 focus:outline-none ${className}`}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}
