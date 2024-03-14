'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import CommissionUI from './Commission.presenter';

export default function CommissionContainer() {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [amount, setAmount] = useState(0);
  const [displayAmount, setDisplayAmount] = useState('');
  const [persent, setPersent] = useState<number | null>(null);
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
    const onlyNums = v.replace(/[^0-9]/g, '');
    if (onlyNums === '') {
      setPersent(null);
    } else {
      setPersent(parseInt(onlyNums, 10));
    }
  };

  const onResetButton = () => {
    setDisplayAmount('');
    setAmount(0);
    setMonthPrice(0);
    setDisplayMonthPrice('');
    setPersent(null);
  };

  const onCalculatorCommission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount < 50000000) {
      setResult(amount * 0.006);
    } else if (amount >= 50000000 && amount < 200000000) {
      setResult(amount * 0.005);
    } else if (amount >= 200000000 && amount < 900000000) {
      setResult(amount * 0.004);
    } else if (amount >= 900000000 && amount < 1200000000) {
      setResult(amount * 0.005);
    } else if (amount >= 1200000000 && amount < 1500000000) {
      setResult(amount * 0.006);
    } else if (amount >= 1500000000) {
      setResult(amount * 0.007);
    }

    setShowResult1(true);
  };

  const onCalculatorMonth = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount < 50000000) {
      setResult(amount * 0.005);
    } else if (amount >= 50000000 && amount < 100000000) {
      setResult(amount * 0.004);
    } else if (amount >= 100000000 && amount < 600000000) {
      setResult(amount * 0.003);
    } else if (amount >= 600000000 && amount < 1200000000) {
      setResult(amount * 0.004);
    } else if (amount >= 1200000000 && amount < 1500000000) {
      setResult(amount * 0.005);
    } else if (amount >= 1500000000) {
      setResult(amount * 0.006);
    }

    setShowResult2(true);
  };

  useEffect(() => {
    setAmount(0);
    setDisplayAmount('');
    setPersent(null);
    setMonthPrice(0);
    setDisplayMonthPrice('');
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
    />
  );
}
