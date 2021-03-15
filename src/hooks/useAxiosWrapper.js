import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { useSchema, useAuth } from '../hooks';

const useAxiosWrapper = () => {
  const auth = useAuth();
  const history = useHistory();

  function logOut() {
    auth.dispatch({ type: 'clear' });
    history.push('/');
  }

  const axiosWrapper = useCallback(async config => {
    let token = auth.state.token;

    return axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ...config,
    }).catch(error => {
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        logOut();
      }
      throw error;
    });
  }, []);
  return axiosWrapper;
};

export default useAxiosWrapper;
