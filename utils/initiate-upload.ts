import axios from 'axios';

export default async function initiateUpload(fileName: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/initiate-upload`,
      {
        originalFileName: fileName,
        fileType: fileName,
        fileSize: 5,
      },
    );
    return response.data.body;
  } catch (err) {
    return err;
  }
}
