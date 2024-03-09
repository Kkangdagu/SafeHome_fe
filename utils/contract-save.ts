import axios from 'axios';

export default async function SaveOne(
  userId: string,
  image: string,
  data: string,
) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/member/contract/saveOne`,
      {
        id: userId,
        imageUrl: image,
        json: data,
      },
    );
    return response.data;
  } catch (err) {
    return err;
  }
}
