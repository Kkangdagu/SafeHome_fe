import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

instance.interceptors.request.use(function axiosIntercepter(config) {
  const token = localStorage.getItem('access-token');
  const copyConfig = { ...config };

  if (token) {
    copyConfig.headers.Authorization = `Bearer ${token}`;
  }

  return copyConfig;
});

export default instance;
