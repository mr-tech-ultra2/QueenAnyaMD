/**
* @project_name Queen Anya [MD]
* @Developer @MR Hex ULTRA Tech <https://github.com/Hex-ULTRA-Tech-Ofc>
* @description Power Full Whatsapp User Bot Queen Anya MD 
* @link <https://github.com/Hex-ULTRA-Tech-Ofc>
* @version V1

© 2023 MR Hex ULTRA Tech.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require('pg');
const { DATABASE_URL } = require('./anyaSettings')

let pool;
if (DATABASE_URL !== "local" && DATABASE_URL !== "vps") {
    const proConfig = {
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
    }

    pool = new Pool(proConfig);
}

module.exports = {
    query: (text, params) => pool.query(text, params)
}