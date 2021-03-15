import React, { useEffect } from 'react';
import { useModel } from '../../hooks';
import { Box } from '@chakra-ui/react';

export default function Users({ id }) {
  const { model, getModelInstance } = useModelInstance({ modelName: 'users' });

  useEffect(() => {
    getModelInstance({ id });
  }, []);

  return <Box>{model && JSON.stringify(model)}</Box>;
}
