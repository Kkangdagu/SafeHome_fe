import instance from './intercepter';

export default async function presignedUrl(
  key: string,
  uploadId: string,
  partNum: string,
) {
  try {
    const response = await instance.post('/presigned-url', {
      key,
      uploadId,
      partNumber: partNum,
    });
    return response.data.body;
  } catch (err) {
    return err;
  }
}
