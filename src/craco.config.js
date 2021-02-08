const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
