export interface IMyPageUIProps {
  uploadItem?: IUpload;
  name: string;
  email: string | number | readonly string[] | undefined;
  visible: boolean;
}

export interface IUpload {
  data: IUploadItem[];
}
export interface IUploadItem {
  frstRegDttm: string;
  id: number;
  imageUrl: string;
  json: any;
  lastChngRegDttm: string;
}
