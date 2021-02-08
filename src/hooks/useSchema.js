import { useContext } from 'react';
import { SchemaContext } from '@contexts';

const useSchema = () => useContext(SchemaContext);

export default useSchema;
