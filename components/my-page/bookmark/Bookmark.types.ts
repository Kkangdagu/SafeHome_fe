export interface IBookmarkListUIProps {
  bookmarkList?: IPolicyLetter | any;
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
