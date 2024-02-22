import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariants = 'primary' | 'small';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariants;
}

const variants = {
  primary:
    'w-[168px] h-[48px] flex justify-center items-center rounded-3xl bg-blue-0 text-white-0 disabled:bg-gray-0 disabled:text-gray-1',
  small:
    'w-[124px] h-[48px] flex justify-center items-center rounded-3xl bg-gray-0 text-gray-1',
};

export default function Button({
  children,
  type,
  variant = 'primary',
  className,
  disabled,
  onClick,
}: IButton) {
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
}
