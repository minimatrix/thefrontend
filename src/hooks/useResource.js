import { useState, useCallback } from 'react';

import * as moment from 'moment';
import axios from 'axios';

import { useSchema, useAuth } from '../hooks';

const useResource = ({ modelName, ...props }) => {
  const [status, setStatus] = useState('OK');
  const [error, setError] = useState();
  const [result, setResult] = useState({});

  const auth = useAuth();

  const token = auth.state.token;
  const schema = useSchema();

  const callAPI = async ({ id, method, data, ...props }) => {
    setStatus('LOADING');

    const baseUrl = `http://${schema.env.REACT_APP_API_URL}/api`;

    // if an ID is supplied then add it to the api path (for everything other than index fetching)
    const url = id
      ? `${baseUrl}/${modelName}/${id}`
      : `${baseUrl}/${modelName}`;

    try {
      const response = await axios({
        url,
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        data,
      });

      if (response !== undefined) {
        const payload = response.data;
        setStatus('OK');
      }
    } catch (e) {
      console.log({ err: e.message });
      const error = e.response;
      setError(error);
      setStatus('ERROR');
    }
  };

  return {
    callAPI,
    result,
    status,
  };
};

export default useResource;
