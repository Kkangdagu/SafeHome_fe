'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import RegisterOneUI from './Register.presenter_1';
import RegisterTwoUI from './Register.presenter2';

export default function RegisterDetail() {
  const router = useRouter();

  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [visible, setVisible] = useState(true); // 컴포넌트 교체용

  // 초기값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [veriCode, setVeriCode] = useState('');

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [allAgreed, setAllAgreed] = useState(false);
  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isVeriCode, setIsVeriCode] = useState(false);

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState(false);

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

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const currentName = e.target.value;
    setName(currentName);
  };

  const onChangeBirth = (e: ChangeEvent<HTMLInputElement>) => {
    const currentBirth = e.target.value;
    setBirth(currentBirth);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
  };
  // 다음 버튼 활성화 함수
  const activePassedRegisterOne = () => {
    return isEmail && isPassword && isPasswordConfirm && veriCode.length === 6
      ? setActiveOne(true)
      : setActiveOne(false);
  };

  // 로그인 버튼 활성화 함수
  const activePassedRegisterTwo = () => {
    return name && birth && phone && allAgreed
      ? setActiveTwo(true)
      : setActiveTwo(false);
  };
  // 다음 회원가입페이지 이동
  const nextPage = () => {
    setVisible(false);
  };

  // 이전 회원가입 페이지 이동
  const beforePage = () => {
    setVisible(true);
  };

  // 이메일 인증번호 보내기
  const onValidMail = () => {
    const data = {
      email,
    };
    axios
      .post('http://43.200.250.18:8000/emails/verification-requests', data)
      .then((res) => {
        setIsVeriCode(true);
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  // const nextRegister = () => {
  //   const data = {
  //     email,
  //     code: veriCode,
  //   };
  //   axios
  //     .post('http://43.200.250.18:8000/emails/verifications', data)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setIsVeriCode(true);
  //       }
  //       if (res.status === 500) {
  //       }
  //     });
  // };

  // 회원가입 정보 보내기 및 완료

  const onClickRegsiter = () => {
    router.push('/');
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {visible ? (
        <RegisterOneUI
          email={email}
          passwordConfirm={passwordConfirm}
          activePassedRegisterOne={activePassedRegisterOne}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          onChangePasswordConfirm={onChangePasswordConfirm}
          onChangeVeriCode={onChangeVeriCode}
          onValidMail={onValidMail}
          nextPage={nextPage}
          onReset={onReset}
          isEmail={isEmail}
          isPassword={isPassword}
          isVeriCode={isVeriCode}
          errorEmail={errorEmail}
          errorPassword={errorPassword}
          errorPasswordConfirm={errorPasswordConfirm}
          activeOne={activeOne}
        />
      ) : (
        <RegisterTwoUI
          onChangeBirth={onChangeBirth}
          onChangeName={onChangeName}
          onChangePhone={onChangePhone}
          onClickRegister={onClickRegsiter}
          activeTwo={activeTwo}
          activePassedRegisterTwo={activePassedRegisterTwo}
          name={name}
          beforePage={beforePage}
          allAgreed={allAgreed}
          setAllAgreed={setAllAgreed}
        />
      )}
    </>
  );
}
