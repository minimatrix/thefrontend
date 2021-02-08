import { useState } from 'react';
import { useSchema, useAxiosWrapper } from '../hooks';

const useAPICall = ({ axios } = {}) => {
  const axiosRefresh = useAxiosWrapper();

  const schema = useSchema();
  const baseUrl = schema.env.REACT_APP_API_URL;
  const [status, setStatus] = useState('OK');

  const performAPICall = ({ method, path, data, callback }) => {
    const dataForSubmission = {
      ...data,
    };

    return axios({
      url: `${baseUrl}/api/${path}`,
      method,
      [method == 'get' ? 'params' : 'data']: dataForSubmission,
    })
      .then(response => {
        callback && callback(response);
        setStatus('OK');
      })
      .catch(error => {
        setStatus('ERROR');

        //errors in response.data.errors
      });
  };

  return { status, performAPICall };
};

export default useAPICall;
