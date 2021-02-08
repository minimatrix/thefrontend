import React from 'react';
import { AuthProvider } from '@contexts';
import { SchemaProvider } from '@contexts';
import { CMSLayout } from '@components/layouts';
import { useSchema } from '@hooks';

export default function App() {
  let schema = {
    auth: {
      permissionCheckInterval: 60000,
    },
  };

  schema.env = Object.keys(process.env).reduce((acc, val) => {
    acc[val] = process.env[val];
    return acc;
  }, {});

  return (
    <SchemaProvider value={schema}>
      <AuthProvider schema={schema.auth}>
        <CMSLayout />
      </AuthProvider>
    </SchemaProvider>
  );
}
