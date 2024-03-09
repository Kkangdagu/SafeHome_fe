import instance from './intercepter';

type Parts = {
  partNumber: number;
  etag: string;
};

export default async function CompleteUpload(
  key: string,
  uploadId: string,
  parts: Parts[],
) {
  try {
    const response = await instance.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/complete-upload`,
      {
        key,
        uploadId,
        parts,
      },
    );
    return response.data.body.location;
  } catch (err) {
    return err;
  }
}
