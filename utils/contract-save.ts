import instance from './intercepter';

export default async function SaveOne(
  userId: string,
  image: string,
  data: string,
) {
  try {
    const response = await instance.post('/member/contract/saveOne', {
      email: userId,
      imageUrl: image,
      json: data,
    });
    return response.data;
  } catch (err) {
    return err;
  }
}
