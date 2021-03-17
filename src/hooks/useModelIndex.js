import React, { useState, useEffect } from 'react';
import { usePrevious, useAPICall } from '../hooks';
import axios from 'axios';

const useModelIndex = ({ modelName, params }) => {
  const { status, performAPICall } = useAPICall({ axios });
  const [response, setResponse] = useState({});
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState();
  const [data, setData] = useState();
  const [pagination, setPagination] = useState({});
  const previousParams = usePrevious(params);

  const fetchData = (page = 1) => {
    performAPICall({
      method: 'get',
      path: modelName,
      data: { ...params, page: page },
      callback: response => {
        setResponse(response.data);
      },
    });
  };

  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(previousParams)) {
      fetchData();
    }
  }, [modelName, JSON.stringify(params)]);

  const refetch = page => fetchData(page);

  useEffect(() => {
    const { data, message, success } = response;
    const { data: outputData, ...others } = data ?? {};
    setPagination(others);
    setData(outputData);
    setMessage(message);
    setSuccess(success);
  }, [response]);

  return {
    data,
    message,
    success,
    pagination,
    status,
    refetch,
  };
};

export default useModelIndex;
