'use client';

import { ChangeEvent, useState } from 'react';

import axios from 'axios';
import RegisterOneUI from './Register.presenter_1';

export default function RegisterDetail() {
  const [activeOne, setActiveOne] = useState(false); // 컴포넌트 교체용

  // 초기값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [veriCode, setVeriCode] = useState('');

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isVeriCode, setIsVeriCode] = useState(false);

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState(false);

  const [isname, setIsName] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setIsEmail(false);
      setErrorEmail(true);
    } else {
      setIsEmail(true);
      setErrorEmail(false);
    }

    if (!currentEmail) {
      setIsEmail(false);
      setErrorEmail(false);
    }
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setIsPassword(false);
      setErrorPassword(true);
    } else {
      setIsPassword(true);
      setErrorPassword(false);
    }

    if (!currentPassword) {
      setIsPassword(false);
      setErrorPassword(false);
    }
  };

  const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setIsPasswordConfirm(false);
      setErrorPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(true);
      setErrorPasswordConfirm(false);
    }

    if (!currentPasswordConfirm) {
      setIsPasswordConfirm(false);
      setErrorPasswordConfirm(false);
    }
  };

  const onChangeVeriCode = (e: ChangeEvent<HTMLInputElement>) => {
    const currentVeriCode = e.target.value;
    setVeriCode(currentVeriCode);
  };

  const onReset = () => {
    setEmail('');
  };

  const activePassedRegisterOne = () => {
    return isEmail && isPassword && isPasswordConfirm && veriCode.length === 6
      ? setActiveOne(true)
      : setActiveOne(false);
  };

  const onValidMail = () => {
    const data = {
      email,
    };
    axios.post('http://43.200.250.18:8000/emails/verification-requests', data);
  };

  const nextRegister = () => {
    const data = {
      email,
      code: veriCode,
    };
    axios
      .post('http://43.200.250.18:8000/emails/verifications', data)
      .then((res) => {
        if (res.status === 200) {
          setIsVeriCode(true);
        }
        if (res.status === 500) {
        }
      });
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <RegisterOneUI
        email={email}
        passwordConfirm={passwordConfirm}
        activePassedRegisterOne={activePassedRegisterOne}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onChangePasswordConfirm={onChangePasswordConfirm}
        onChangeVeriCode={onChangeVeriCode}
        onReset={onReset}
        isEmail={isEmail}
        isPassword={isPassword}
        isPasswordConfirm={isPasswordConfirm}
        isVeriCode={isVeriCode}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
        errorPasswordConfirm={errorPasswordConfirm}
        activeOne={activeOne}
      />
    </>
  );
}
