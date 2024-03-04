import { ChangeEvent } from 'react';

export interface IRegisterTwoUIProps {
  activePassedRegisterTwo: () => void;
  onChangeBirth: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  beforePage: () => void;
  onClickRegister: () => void;
  setAllAgreed: React.Dispatch<React.SetStateAction<boolean>>;
  allAgreed: boolean;
  name: string;
  activeTwo: boolean;
}
