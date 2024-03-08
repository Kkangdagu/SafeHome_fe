import { ChangeEvent } from 'react';

export interface IEditPageUIProps {
  email: string | number | readonly string[] | undefined;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirthDate: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  editMember: () => void;
  deleteMember: () => void;
}
