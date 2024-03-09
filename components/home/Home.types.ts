import { RefObject } from 'react';

export interface IHomePresenter {
  onBoarding?: () => Promise<void>;
  latestPolicy?: ILatestPolicy;
  policyLetter?: IPolicyLetter;
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
  body: {
    list: ILatestPolicyItem[];
  };
}

interface ILatestPolicyItem {
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
