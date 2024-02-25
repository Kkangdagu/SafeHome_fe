import { ChangeEvent } from 'react';

export interface IRegisterUIProps {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  setVisible: (arg0: boolean) => void;
  show: boolean;
  isEmail: boolean;
}
