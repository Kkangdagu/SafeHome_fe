import { ChangeEvent, FormEvent } from 'react';

export interface ICommission {
  selectedProperty: string;
  setSelectedProperty: (value: string) => void;
  selectedTransaction: string;
  setSelectedTransaction: (value: string) => void;
  salesOfferTypes: string[];
  transactionTypes: string[];
  amount: number;
  persent: number;
  monthPrice: number;
  onAmountInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onPersentInput: (e: ChangeEvent<HTMLInputElement>) => void;
  displayAmount: string;
  onResetButton: () => void;
  onMonthPrice: (e: ChangeEvent<HTMLInputElement>) => void;
  displayMonthPrice: string;
  onCalculatorCommission: (e: FormEvent<HTMLFormElement>) => void;
  result: number;
  showResult1: boolean;
  setShowResult1: (value: boolean) => void;
  showResult2: boolean;
  setShowResult2: (value: boolean) => void;
  onCalculatorMonth: (e: FormEvent<HTMLFormElement>) => void;
  moreInfo: boolean;
  setMoreInfo: (value: boolean) => void;
  displayPersent: string;
}

export interface ICommissionResult1 {
  amount: number;
  result: number;
  persent: number;
  setShowResult1: (value: boolean) => void;
}

export interface ICommissionResult2 {
  amount: number;
  result: number;
  monthPrice: number;
  persent: number;
  setShowResult2: (value: boolean) => void;
}
