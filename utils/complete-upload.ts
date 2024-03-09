import axios from 'axios';

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
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/complete-upload`,
      {
        key,
        uploadId,
        parts,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      },
    );
    return response.data.body.location;
  } catch (err) {
    return err;
  }
}
