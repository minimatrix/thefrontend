import { useState, useEffect } from 'react';
import { usePrevious, useAPICall } from '../hooks';
import { createStandaloneToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { singular } from 'pluralize';

import axios from 'axios';

const useModel = ({ modelName }) => {
  let history = useHistory();
  const toast = createStandaloneToast();
  const singularModelName = singular(modelName);

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

  const deleteModelInstance = ({ id }) =>
    performAPICall({
      method: 'delete',
      path: `${modelName}/${id}`,
      callback: response => {
        toast({
          title: 'Success.',
          description: `${singularModelName} was deleted successfully.`,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
        history.push(`/${modelName}`);
      },
    });

  const createModelInstance = ({ inputs }) =>
    performAPICall({
      method: 'post',
      path: `${modelName}`,
      data: inputs,
      callback: response => {
        setResponse(response.data);
        toast({
          title: 'Success.',
          description: `${singularModelName} created successfully.`,
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top',
        });
      },
      errorCallback: error => {
        toast({
          title: 'An error occurred.',
          description: `Unable to create ${singularModelName} - ${error}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        });
      },
    });

  const updateModelInstance = ({ id, data }) =>
    performAPICall({
      method: 'put',
      path: `${modelName}/${id}`,
      data,
      callback: response => {
        setResponse(response.data);
        toast({
          title: 'Success.',
          description: `${singularModelName} updated successfully.`,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      },
    });

  useEffect(() => {
    setModel(response);
  }, [response]);

  return {
    getModelInstance,
    createModelInstance,
    updateModelInstance,
    deleteModelInstance,
    model,
    message,
    success,
    status,
  };
};

export default useModel;
