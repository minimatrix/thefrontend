import { useState, useCallback } from 'react';
import * as moment from 'moment';
import axios from 'axios';

import { useSchema, useAuth } from '../hooks';

const useLogin = () => {
  const [status, setStatus] = useState('OK');
  const [error, setError] = useState();
  const { dispatch } = useAuth();

  const schema = useSchema();

  const handleLogin = async ({ email, password }) => {
    // console.log({ email, password });
    setStatus('LOADING');
    const credentials = { email, password };

    try {
      const response = await axios({
        url: `${schema.env.REACT_APP_API_URL}/login`,
        method: 'post',
        headers: {
          Accept: 'application/json',
        },
        data: credentials,
      });

      if (response !== undefined) {
        const payload = response.data;
        // var now = moment();
        // payload.expires_at = now.add(payload.expires_in, 's').format('X'); // X is unix timestamp

        setStatus('OK');
        dispatch({
          type: 'update',
          payload,
        });
      }
    } catch (e) {
      console.log({ err: e.message });
      const error = e.response;
      setError(error);
      setStatus('ERROR');
    }
  };

  return {
    handleLogin,
    status,
  };
};

export default useLogin;
