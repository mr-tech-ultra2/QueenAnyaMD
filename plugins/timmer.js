//උස්සපන් උස්සපන් අමාරුවෙන් හැදුවෙ භල්ලො
const lusifar = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })
const sks = Config.WORKTYPE == 'public' ? false : true
const TT = 'Show timet'
lusifar.addCommand({pattern: 'XCX', fromMe: sks, desc: TT}, (async (message, match) => {
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

    var respoimage = await axios.get(`https://i.ibb.co/VBhmbnb/Comp-1-00000.jpg`, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `        
 *╭─「 NOW TIME 」*
 *├─────────●●►*
 *│🌼HEY,*  `+wish+` 
 *│Time⌚:* `+time+`
 *|ꜰʀᴏᴍ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*
 *╰──────────●●►*
`}) 

 }));
