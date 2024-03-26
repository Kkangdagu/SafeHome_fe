import { RefObject } from 'react';

export interface IHomePresenter {
  onBoarding?: () => Promise<void>;
  currentPage?: number;
  startPage?: number;
  endPage?: number;
  isModal?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  modalRef?: RefObject<HTMLDivElement>;
  date?: string;
  prevBtn?: () => void;
  nextBtn?: () => void;
  onPageClick?: (pageNumber: number) => void;
  data: ILatestPolicy;
}

export interface IOnBoarding {
  body: IOnBoardingItem[];
}

interface IOnBoardingItem {
  thumbnailImgUrl: string;
  contentImgUrl: string;
  useYn?: 'Y' | 'N';
  lastChngRegDttm?: string;
}

export interface ILatestPolicy {
  body: ILatestPolicyBody;
}

interface ILatestPolicyBody {
  startPage: string;
  endPage: string;
  list: ILatestPolicyList[];
}

interface ILatestPolicyList {
  enterTitle: string;
  enterUrl: string;
  regDate: string;
}

export interface IPolicyLetter {
  body: IPolicyLetterItem[];
}

export interface IPolicyLetterItem {
  id: number;
  title: string;
  thumbnailImgUrl: string;
  contentImgUrl: string;
  author: string;
  lastChngRegDttm: string;
}
