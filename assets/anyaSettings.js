/**
/*@project_name Queen Anya [MD]
* @Developer @MR Hex ULTRA Tech <https://github.com/Hex-ULTRA-Tech-Ofc>
* @description Power Full Whatsapp User Bot Queen Anya MD 
* @link <https://github.com/Hex-ULTRA-Tech-Ofc>
* @version V1

© 2023 MR Hex ULTRA Tech.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const fs = require('fs');
if (fs.existsSync('anyaSettings.env')) require('dotenv').config({ path: './assets/anyaSettings.env' });

module.exports = {
    VERSION: 'Queen Anya MD V1',
    DATABASE_URL: process.env.DATABASE_URL ===  undefined ? 'local' : process.env.DATABASE_URL,
    LANGUAGE: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE,
    isHEROKU: process.env.HEROKU === undefined ? '' : process.env.HEROKU,
    HEROKU_APP: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
}