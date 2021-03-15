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
    100: '#C6F6D5',
    200: '#9AE6B4',
    300: '#68D391',
    400: '#48BB78',
    500: '#38A169',
    600: '#2F855A',
    700: '#276749',
    800: '#22543D',
    900: '#1C4532',
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
