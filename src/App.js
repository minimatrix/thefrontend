import React from 'react';
import AuthProvider from './contexts/AuthProvider';
import { SchemaProvider } from './contexts';
import { useSchema } from './hooks';

const Test = () => {
  const schema = useSchema();
  return <div>hey</div>;
};

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
      <Test />
      <AuthProvider schema={schema.auth}>
        <div>Authenticated :)</div>
      </AuthProvider>
    </SchemaProvider>
  );
}
