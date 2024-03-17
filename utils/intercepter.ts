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

instance.interceptors.response.use(
  function responseFn(response) {
    return response;
  },
  async function errorFn(error) {
    const requestRetry = error.config;
    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 401) {
      // eslint-disable-next-line no-underscore-dangle
      requestRetry._retry = true;
      const refreshToken = localStorage.getItem('refresh-token');
      const accessToken = localStorage.getItem('access-token');
      return (
        axios
          .post(`${process.env.NEXT_PUBLIC_BASE_URL}/reissue`, {
            accessToken,
            refreshToken,
          })
          // eslint-disable-next-line consistent-return
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem('access-token', res.data.accessToken);
              requestRetry.headers.Authorization = `Bearer ${res.data.accessToken}`;
              return instance(requestRetry);
            }
          })
          .catch((err) => {
            return err;
          })
      );
    }
    return Promise.reject(error);
  },
);

export default instance;
