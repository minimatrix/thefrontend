import { useState } from 'react';
import { useSchema, useAxiosWrapper } from '../hooks';

const useAPICall = ({ axios } = {}) => {
  const axiosWrapper = useAxiosWrapper();

  const schema = useSchema();
  const baseUrl = schema.env.REACT_APP_API_URL;
  const [status, setStatus] = useState('OK');

  const performAPICall = ({ method, path, data, callback, errorCallback }) => {
    return axiosWrapper({
      url: `${baseUrl}/api/${path}`,
      method,
      [method == 'get' ? 'params' : 'data']: data,
    })
      .then(response => {
        console.log({ response });
        callback && callback(response);
        setStatus('OK');
      })
      .catch(error => {
        if (error?.response?.data) {
          errorCallback && errorCallback(error?.response.data?.error);
        }
        //errors in response.data.errors
      });
  };

  return { status, performAPICall };
};

export default useAPICall;
