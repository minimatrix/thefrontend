import { useState, useEffect } from 'react';
import { usePrevious, useAPICall } from '../hooks';
import axios from 'axios';

const useModel = ({ modelName }) => {
  const { status, performAPICall } = useAPICall({ axios });
  const [response, setResponse] = useState({});
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState();
  const [model, setModel] = useState();

  const getModelInstance = ({ id }) =>
    performAPICall({
      method: 'get',
      path: `${modelName}/${id}`,
      callback: response => {
        setResponse(response.data);
      },
    });

  const createModelInstance = ({ inputs }) =>
    performAPICall({
      method: 'post',
      path: `${modelName}`,
      data: inputs,
      callback: response => {
        setResponse(response.data);
      },
    });

  useEffect(() => {
    const { data, message, success } = response;
    const { data: outputData, ...others } = data ?? {};
    setModel(outputData);
    setMessage(message);
    setSuccess(success);
  }, [response]);

  return {
    getModelInstance,
    createModelInstance,
    model,
    message,
    success,
    status,
  };
};

export default useModel;
