import axios from 'axios';

export default async function presignedUrlPart(
  presignedUrl: string,
  binary: File,
) {
  try {
    const response = await axios.put(presignedUrl, binary);
    return response.headers.etag.replace(/"/g, '');
  } catch (err) {
    return err;
  }
}
