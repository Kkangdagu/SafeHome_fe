import { ChangeEvent } from 'react';

export interface IRegisterUIProps {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirm: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeVeriCode: (e: ChangeEvent<HTMLInputElement>) => void;
  activePassedRegisterOne: () => void;
  onValidMail: () => void;
  email: string;
  passwordConfirm: string;
  isEmail: boolean;
  isPassword: boolean;
  isPasswordConfirm: boolean;
  isVeriCode: boolean;
  errorEmail: boolean;
  errorPassword: boolean;
  errorPasswordConfirm: boolean;
  activeOne: boolean;
}
