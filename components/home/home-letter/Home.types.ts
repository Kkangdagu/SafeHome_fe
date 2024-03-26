export interface IHomeLetterProps {
  data: {
    body: IHomeLetterItem[];
  };
}

interface IHomeLetterItem {
  id: number;
  title: string;
  thumbnailImgUrl: string;
}
