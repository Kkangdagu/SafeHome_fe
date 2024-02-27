import { ChangeEvent } from 'react';

export interface IRegisterUIProps {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  setVisible: (arg0: boolean) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirm: (e: ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  isEmail: boolean;
  isPassword: boolean;
  isPasswordConfirm: boolean;
  isVeriCode: boolean;
}
