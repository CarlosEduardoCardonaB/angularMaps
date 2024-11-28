const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envFileContent = `
  export const environment = {
      mapbox_key: "${process.env['MAPBOX_KEY']}",
  };
`;

//Con recursive: true se evalua que si existe la carpeta entonces la sobreescribe
mkdirSync('./src/environments', {recursive: true});

writeFileSync( targetPath, envFileContent );
