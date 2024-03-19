import { Dispatch, SetStateAction } from 'react';

export interface IPolicyLetterListUIProps {
  letterList?: IPolicyLetter | any;
  bookmarkList: boolean[];
  setBookmarkList: Dispatch<SetStateAction<boolean[]>>;
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
  viewCount: number;
  memberId: any;
}
