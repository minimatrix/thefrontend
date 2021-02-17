import { useState, useEffect } from 'react';
import { usePrevious, useAPICall } from '../hooks';
import axios from 'axios';

const useModelIndex = ({ modelName, params }) => {
  const { status, performAPICall } = useAPICall({ axios });
  const [response, setResponse] = useState([]);
  const previousParams = usePrevious(params);

  const fetchData = () =>
    performAPICall({
      method: 'get',
      path: modelName,
      params,
      callback: response => {
        setResponse(response.data);
      },
    });

  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(previousParams)) {
      fetchData();
    }
  }, [modelName, JSON.stringify(params)]);

  const refetch = fetchData;

  return {
    data: response,
    status,
    refetch,
  };
};

export default useModelIndex;
