'use client';

import { ChangeEvent, useState } from 'react';

import RegisterOneUI from './Register.presenter_1';
import RegisterTwoUI from './Register.presenter_2';

export default function RegisterDetail() {
  const [show, setShow] = useState(true); // 컴포넌트 교체용

  // 초기값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [veriCode, setVeriCode] = useState('');

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);
  const [isVeriCode, setIsVeriCode] = useState(true);

  const [isname, setIsName] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const setVisible = (next: boolean) => {
    setShow(next);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }

    if (!currentEmail) {
      setIsEmail(true);
    }
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }

    if (!currentPassword) {
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setIsPasswordConfirm(false);
    } else {
      setIsPasswordConfirm(true);
    }

    if (!currentPasswordConfirm) {
      setIsPassword(true);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {show ? (
        <RegisterOneUI
          show={show}
          setVisible={setVisible}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          onChangePasswordConfirm={onChangePasswordConfirm}
          isEmail={isEmail}
          isPassword={isPassword}
          isPasswordConfirm={isPasswordConfirm}
          isVeriCode={isVeriCode}
        />
      ) : (
        <RegisterTwoUI />
      )}
    </>
  );
}
