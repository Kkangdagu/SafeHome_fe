'use server';

import axios from 'axios';

export default async function initiateUpload(
  fileName: string,
  fileExtension: string,
) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/initiate-upload`,
      {
        originalFileName: fileName,
        fileType: fileExtension,
        fileSize: 5,
      },
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}
