import { ChangeEvent } from 'react';

export interface ILoginUIProps {
  onClickKakao: () => void;
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePw: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickGoogle: () => void;
  onClickEmailLogin: () => void;
  activeLoginBtn: () => void;
  active: boolean;
}
