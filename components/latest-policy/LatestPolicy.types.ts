export interface IPolicyContainer {
  policy: IPolicy | null;
  page: number;
  prevBtn: () => void;
  nextBtn: () => void;
}

interface IPolicy {
  body: {
    totalSize: string;
    startPage: string;
    endPage: string;
    list: IPolicyList[];
  };
}

interface IPolicyList {
  enterTitle: string;
  enterUrl: string;
}
