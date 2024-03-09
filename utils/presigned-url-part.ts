import instance from './intercepter';

export default async function presignedUrlPart(
  presignedUrl: string,
  binary: File,
) {
  try {
    const response = await instance.put(presignedUrl, binary);
    return response.headers.etag.replace(/"/g, '');
  } catch (err) {
    return err;
  }
}
