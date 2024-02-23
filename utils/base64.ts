'use server';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export async function requestWithBase64(base64: string, ex: string) {
  const API_URL = process.env.NEXT_PUBLIC_INVOKE_URL;
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

  if (!API_URL) {
    throw new Error('잘못된 URL 입니다.');
  }
  try {
    const response = await axios.post(
      API_URL,
      {
        images: [
          {
            format: ex,
            name: 'test',
            data: base64,
          },
        ],
        enableTableDetection: true,
        requestId: uuidv4(),
        timestamp: new Date().getTime(),
        version: 'V2',
      },
      {
        headers: {
          'X-OCR-SECRET': SECRET_KEY,
        },
      },
    );
    return response.data.images[0].tables;
  } catch (error) {
    return error;
  }
}
