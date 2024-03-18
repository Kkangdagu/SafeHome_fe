export interface IPolicyLetterDetailUIProps {
  letterDetail?: IPolicyLetterItem;
}

export interface IPolicyLetterItem {
  id: number;
  title: string;
  viewCount: number;
  contentImgUrl: string;
  author: string;
  lastChngRegDttm: string;
  bookMarkYn: string | undefined;
}
