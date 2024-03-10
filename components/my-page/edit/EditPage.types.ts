import { ChangeEvent } from 'react';

export interface IEditPageUIProps {
  name: string | number | readonly string[] | undefined;
  email: string | number | readonly string[] | undefined;
  logOut: () => void;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirthDate: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  editMember: () => void;
  deleteMember: () => void;
}
