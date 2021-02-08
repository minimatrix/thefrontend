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
    100: '#DFE5F7',
    200: '#91ABF7',
    300: '#4E7AF9',
    400: '#2E62F7',
    500: '#0146FD',
    600: '#0146FD',
    700: '#173384',
    800: '#173384',
    900: '#173384',
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
