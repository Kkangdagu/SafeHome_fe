import { RefObject } from 'react';

export interface IHomePresenter {
  onBoarding: IOnBoarding;
  onLatestPolicy?: ILatestPolicy;
  isModal?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  modalRef?: RefObject<HTMLDivElement>;
}

export interface IHomeContainerProps {
  onBoarding: IOnBoarding;
  onLatestPolicy: ILatestPolicy;
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

interface ILatestPolicy {
  body: {
    list: ILatestPolicyItem[];
  };
}

interface ILatestPolicyItem {
  enterTitle: string;
  enterUrl: string;
}
