import { extendTheme } from '@chakra-ui/react';

const colors = {
  // primary: {
  //   100: '#E5FCF1',
  //   200: '#27EF96',
  //   300: '#10DE82',
  //   400: '#0EBE6F',
  //   500: '#0CA25F',
  //   600: '#0A864F',
  //   700: '#086F42',
  //   800: '#075C37',
  //   900: '#064C2E',
  // },
  primary: {
    100: '#E9F9F9',
    200: '#C4F3F3',
    300: '#9CE5E6',
    400: '#68D9DA',
    500: '#40B9B8',
    600: '#3EB9B8',
    700: '#2F8C8C',
    800: '#205D5D',
    900: '#102F2F',
  },
};

const customTheme = extendTheme({
  colors,
  fonts: {
    heading: 'PT Sans',
    body: 'PT Sans',
  },
});

export default customTheme;
