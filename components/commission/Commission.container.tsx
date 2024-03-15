'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { notify } from '../Common/Toast';
import CommissionUI from './Commission.presenter';

export default function CommissionContainer() {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [amount, setAmount] = useState(0);
  const [displayAmount, setDisplayAmount] = useState('');
  const [persent, setPersent] = useState(0);
  const [displayPersent, setDisplayPersent] = useState('');
  const [monthPrice, setMonthPrice] = useState(0);
  const [displayMonthPrice, setDisplayMonthPrice] = useState('');
  const [result, setResult] = useState(0);
  const [showResult1, setShowResult1] = useState(false);
  const [showResult2, setShowResult2] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  const salesOfferTypes = ['매매/교환', '전세', '월세'];
  const transactionTypes = ['주택', '오피스텔', '기타'];

  const onAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    const onlyNums = v.replace(/[^0-9]/g, '');
    const format = onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setDisplayAmount(format);
    setAmount(parseInt(onlyNums, 10));
  };

  const onMonthPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    const onlyNums = v.replace(/[^0-9]/g, '');
    const format = onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setDisplayMonthPrice(format);
    setMonthPrice(parseInt(onlyNums, 10));
  };

  const onPersentInput = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    let onlyNumsAndDot = v.replace(/[^0-9.]/g, '');

    if (onlyNumsAndDot.includes('.')) {
      const parts = onlyNumsAndDot.split('.');

      if (parseInt(parts[0], 10) === 0) {
        parts[0] = '0';
      }
      onlyNumsAndDot = parts.join('.');
    } else {
      onlyNumsAndDot = onlyNumsAndDot.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    setDisplayPersent(onlyNumsAndDot);
    setPersent(parseFloat(onlyNumsAndDot));
  };

  const onResetButton = () => {
    setSelectedProperty('');
    setSelectedTransaction('');
    setDisplayAmount('');
    setAmount(0);
    setMonthPrice(0);
    setDisplayMonthPrice('');
    setDisplayPersent('');
    setPersent(0);
  };

  const onCalculatorCommission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount === 0) {
      notify('warning', '거래금액을 입력해주세요.');
    }
    if (amount !== 0 && selectedProperty === '' && selectedTransaction !== '') {
      notify('warning', '거래종류를 선택해주세요.');
    }
    if (amount !== 0 && selectedProperty !== '' && selectedTransaction === '') {
      notify('warning', '매물종류를 선택해주세요.');
    }
    if (amount !== 0 && selectedProperty === '' && selectedTransaction === '') {
      notify('warning', '매물 및 거래종류를 선택해주세요.');
    }

    if (selectedProperty !== '' && selectedTransaction !== '' && amount !== 0) {
      if (amount < 50000000) {
        if (persent === 0 || persent > 0.6) {
          setResult(amount * 0.006);
        } else if (persent !== 0 && persent <= 0.6) {
          setResult(Math.floor((amount * persent) / 100));
        }
      } else if (amount >= 50000000 && amount < 200000000) {
        if (persent === 0 || persent > 0.5) {
          setResult(amount * 0.005);
        } else if (persent !== 0 && persent <= 0.5) {
          setResult(Math.floor((amount * persent) / 100));
        }
      } else if (amount >= 200000000 && amount < 900000000) {
        if (persent === 0 || persent > 0.4) {
          setResult(amount * 0.004);
        } else if (persent !== 0 && persent <= 0.4) {
          setResult(Math.floor((amount * persent) / 100));
        }
      } else if (amount >= 900000000 && amount < 1200000000) {
        if (persent === 0 || persent > 0.5) {
          setResult(amount * 0.005);
        } else if (persent !== 0 && persent <= 0.5) {
          setResult(Math.floor((amount * persent) / 100));
        }
      } else if (amount >= 1200000000 && amount < 1500000000) {
        if (persent === 0 || persent > 0.6) {
          setResult(amount * 0.006);
        } else if (persent !== 0 && persent <= 0.6) {
          setResult(Math.floor((amount * persent) / 100));
        }
      } else if (amount >= 1500000000) {
        if (persent === 0 || persent > 0.7) {
          setResult(amount * 0.007);
        } else if (persent !== 0 && persent <= 0.7) {
          setResult(Math.floor((amount * persent) / 100));
        }
      }
      setShowResult1(true);
    }
  };

  const onCalculatorMonth = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount === 0) {
      notify('warning', '보증금을 입력해주세요.');
    }
    if (amount !== 0 && monthPrice === 0) {
      notify('warning', '월세를 입력해주세요.');
    }
    if (amount !== 0 && monthPrice !== 0 && selectedTransaction === '') {
      notify('warning', '매물종류를 선택해주세요.');
    }

    if (
      amount !== 0 &&
      monthPrice !== 0 &&
      selectedTransaction !== '' &&
      selectedProperty !== ''
    ) {
      if (amount + monthPrice * 70 < 50000000) {
        if (persent === 0 || persent > 0.5) {
          setResult(Math.floor(((amount + monthPrice * 70) * 0.005) / 100));
        } else if (persent > 0 && persent <= 0.5) {
          setResult(Math.floor(((amount + monthPrice * 70) * persent) / 100));
        }
      }

      if (
        amount + monthPrice * 70 >= 50000000 &&
        amount + monthPrice * 100 < 100000000
      ) {
        if (persent === 0 || persent > 0.4) {
          setResult(Math.floor(((amount + monthPrice * 100) * 0.004) / 100));
        } else if (persent > 0 && persent <= 0.4) {
          setResult(Math.floor(((amount + monthPrice * 100) * persent) / 100));
        }
      }

      if (
        amount + monthPrice * 100 >= 100000000 &&
        amount + monthPrice * 100 < 600000000
      ) {
        if (persent === 0 || persent > 0.3) {
          setResult(Math.floor(((amount + monthPrice * 100) * 0.003) / 100));
        } else if (persent > 0 && persent <= 0.3) {
          setResult(Math.floor(((amount + monthPrice * 100) * persent) / 100));
        }
      }

      if (
        amount + monthPrice * 100 >= 600000000 &&
        amount + monthPrice * 100 < 1200000000
      ) {
        if (persent === 0 || persent > 0.4) {
          setResult(Math.floor(((amount + monthPrice * 100) * 0.004) / 100));
        } else if (persent > 0 && persent <= 0.4) {
          setResult(Math.floor(((amount + monthPrice * 100) * persent) / 100));
        }
      }

      if (
        amount + monthPrice * 100 >= 1200000000 &&
        amount + monthPrice * 100 < 1500000000
      ) {
        if (persent === 0 || persent > 0.5) {
          setResult(Math.floor(((amount + monthPrice * 100) * 0.005) / 100));
        } else if (persent > 0 && persent <= 0.5) {
          setResult(Math.floor(((amount + monthPrice * 100) * persent) / 100));
        }
      }

      if (amount + monthPrice * 100 >= 1500000000) {
        if (persent === 0 || persent > 0.6) {
          setResult(Math.floor(((amount + monthPrice * 100) * 0.006) / 100));
        } else if (persent > 0 && persent <= 0.6) {
          setResult(Math.floor(((amount + monthPrice * 100) * persent) / 100));
        }
      }
      setShowResult2(true);
    }
  };

  useEffect(() => {
    setAmount(0);
    setMonthPrice(0);
    setPersent(0);
    setDisplayAmount('');
    setDisplayMonthPrice('');
    setDisplayPersent('');
  }, [selectedProperty]);

  return (
    <CommissionUI
      selectedProperty={selectedProperty}
      setSelectedProperty={setSelectedProperty}
      selectedTransaction={selectedTransaction}
      setSelectedTransaction={setSelectedTransaction}
      salesOfferTypes={salesOfferTypes}
      transactionTypes={transactionTypes}
      amount={amount}
      result={result}
      persent={persent}
      monthPrice={monthPrice}
      onAmountInput={onAmountInput}
      onPersentInput={onPersentInput}
      displayAmount={displayAmount}
      onResetButton={onResetButton}
      onMonthPrice={onMonthPrice}
      displayMonthPrice={displayMonthPrice}
      onCalculatorCommission={onCalculatorCommission}
      showResult1={showResult1}
      setShowResult1={setShowResult1}
      showResult2={showResult2}
      setShowResult2={setShowResult2}
      onCalculatorMonth={onCalculatorMonth}
      moreInfo={moreInfo}
      setMoreInfo={setMoreInfo}
      displayPersent={displayPersent}
    />
  );
}
