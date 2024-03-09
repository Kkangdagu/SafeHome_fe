import instance from './intercepter';

export default async function initiateUpload(fileName: string) {
  try {
    const response = await instance.post(
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
