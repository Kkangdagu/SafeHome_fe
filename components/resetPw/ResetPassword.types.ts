import { ChangeEvent } from 'react';

export interface IResetPwUIProps {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirthDate: (e: ChangeEvent<HTMLInputElement>) => void;
  activeFindBtn: () => void;
  findPwd: () => void;
  activeBtn: boolean;
}
