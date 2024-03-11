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
