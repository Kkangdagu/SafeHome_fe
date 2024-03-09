import instance from './intercepter';

export default async function presignedUrl(
  key: string,
  uploadId: string,
  partNum: string,
) {
  try {
    const response = await instance.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/presigned-url`,
      {
        key,
        uploadId,
        partNumber: partNum,
      },
    );
    return response.data.body;
  } catch (err) {
    return err;
  }
}
