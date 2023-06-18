module.exports = {
    packages: {
      'ngx-qrcode2': {
        entryPoints: {
          '.': {
            override: {
              main: './index.js',
              typings: './index.d.ts'
            }
          }
        }
      }
    }
  };
  