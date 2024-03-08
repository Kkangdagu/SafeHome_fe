'use server';

import axios from 'axios';

export default async function presignedUrl(key: string, uploadId: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/presigned-url`,
      {
        key,
        uploadId,
        partNumber: '3',
      },
    );
    return response.data.body;
  } catch (err) {
    return err;
  }
}
