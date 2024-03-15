/* eslint-disable no-alert */

'use client';

import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

import { isLogin } from '@/utils/isLogin';

import RegisterOneUI from './Register.presenter_1';
import RegisterTwoUI from './Register.presenter2';

export default function RegisterDetail() {
  const router = useRouter();

  // 로그인 확인
  useEffect(() => {
    if (isLogin()) {
      redirect('/');
    }
  }, []);

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
  const [btnName, setBtnName] = useState('인증받기');

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isVeriCode, setIsVeriCode] = useState(false);

  // 에러
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState(false);
  const [errorVeriCode, setErrorVeriCode] = useState(false);
  const [codeMsg, setCodeMsg] = useState('');

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{3,10}$/;

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
    return isEmail && isPassword && isPasswordConfirm && !errorVeriCode
      ? setActiveOne(true)
      : setActiveOne(false);
  };

  // 로그인 버튼 활성화 함수
  const activePassedRegisterTwo = () => {
    return name && birth && phone && allAgreed
      ? setActiveTwo(true)
      : setActiveTwo(false);
  };

  // 이전 회원가입 페이지 이동
  const beforePage = () => {
    setVisible(true);
  };

  // 이메일 인증번호 보내기
  const onValidMail = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/emails/verification-requests?email=${email}`,
      )
      .then((res) => {
        alert('인증번호를 전송했습니다');
        setIsVeriCode(true);
        setBtnName('재전송');
        return res;
      })
      .catch((res) => {
        alert(res.response.data.head.resultMsg);
      });
  };

  // 인증번호 확인
  const onValidCode = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/emails/verifications`, {
        params: { email, code: veriCode },
      })
      .then((res) => {
        setCodeMsg('* 인증번호가 일치합니다.');
        setErrorVeriCode(false);
      })
      .catch((err) => {
        setCodeMsg('* 인증번호가 일치하지 않습니다.');
        setErrorVeriCode(true);
        return err;
      });
  };

  const nextRegister = () => {
    setVisible(false);
  };

  // 회원가입 정보 보내기 및 완료

  const onClickRegister = () => {
    const body = {
      email,
      password,
      name,
      dateOfBirth: birth,
      telNo: phone,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/signup`, body)
      .then((res) => {
        if (res.status === 200) {
          router.push('/login');
        }
      })
      .catch((err) => {
        return err;
      });
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
          onValidCode={onValidCode}
          onReset={onReset}
          nextRegister={nextRegister}
          isEmail={isEmail}
          isPassword={isPassword}
          errorEmail={errorEmail}
          errorPassword={errorPassword}
          errorVeriCode={errorVeriCode}
          errorPasswordConfirm={errorPasswordConfirm}
          activeOne={activeOne}
          isVeriCode={isVeriCode}
          codeMsg={codeMsg}
          btnName={btnName}
        />
      ) : (
        <RegisterTwoUI
          onChangeBirth={onChangeBirth}
          onChangeName={onChangeName}
          onChangePhone={onChangePhone}
          onClickRegister={onClickRegister}
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
