import { ChangeEvent, FormEvent } from 'react';

export interface ICommission {
  selectedProperty: string;
  setSelectedProperty: (value: string) => void;
  selectedTransaction: string;
  setSelectedTransaction: (value: string) => void;
  salesOfferTypes: string[];
  transactionTypes: string[];
  amount: string | number;
  persent: number | null;
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
}

export interface ICommissionResult1 {
  amount: string | number;
  result: number;
  setShowResult1: (value: boolean) => void;
}

export interface ICommissionResult2 {
  amount: string | number;
  monthPrice: number;
  setShowResult2: (value: boolean) => void;
}
