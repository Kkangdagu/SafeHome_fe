'use client';

import axios from 'axios';
import { useState } from 'react';
import { ChangeEvent } from 'react';

import ResetPasswordUI from './ResetPassword.presenter';
import ResetPasswordSuccessUI from './ResetPasswordSuccess.presenter';

export default function ResetPasswordContainer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const currentName = e.target.value;
    setName(currentName);
  };
  const onChangeBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
    const currentBirthDate = e.target.value;
    setBirthDate(currentBirthDate);
  };
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
  };

  const activeFindBtn = () => {
    return email && name && birthDate && phone
      ? setActiveBtn(true)
      : setActiveBtn(false);
  };

  const findPwd = () => {
    const body = {
      email,
      dateOfBirth: birthDate,
      name,
      telNo: phone,
    };
    axios({
      method: 'post',
      url: 'http://43.200.250.18:8000/findPassword',
      data: body,
    })
      .then((res) => {
        setSuccessVisible(true);
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {successVisible ? (
        <ResetPasswordSuccessUI />
      ) : (
        <ResetPasswordUI
          onChangeEmail={onChangeEmail}
          onChangeName={onChangeName}
          onChangeBirthDate={onChangeBirthDate}
          onChangePhone={onChangePhone}
          activeFindBtn={activeFindBtn}
          findPwd={findPwd}
          activeBtn={activeBtn}
        />
      )}
    </>
  );
}
