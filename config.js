const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.port= process.env.PORT || 5000
global.email = 'queen-anya-md@gmain.com'
global.github = 'https://github.com/Hex-ULTRA-Tech-Ofc/QueenAnyaMD'
global.location = 'Sultanpur IN'
global.sudo = process.env.SUDO || '94711449492'
global.devs = '94711449492';
global.website = 'https://github.com/Hex-ULTRA-Tech-Ofc/QueenAnyaMD' //wa.me/+94000000000000
module.exports = {
  botname: process.env.BOT_NAME || 'Qᴜᴇᴇɴ 𝙰𝚗𝚢𝚊 ᴍᴅ',
  ownername:process.env.OWNER_NAME || 'ᴹᴿ ʜᴇx ᴜʟᴛʀᴀ ᴛᴇᴄʜ',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'false',
  pmpermit: process.env.PMPERMIT || "false",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'master',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
