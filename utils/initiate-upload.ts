import { v4 as uuidv4 } from 'uuid';

import instance from './intercepter';

const id = uuidv4();

export default async function initiateUpload(
  fileName: string,
  fileExtension: string,
) {
  try {
    const response = await instance.post('/initiate-upload', {
      originalFileName: `${id}.${fileExtension}`,
      fileType: fileName,
      fileSize: 5,
    });
    return response.data.body;
  } catch (err) {
    return err;
  }
}
