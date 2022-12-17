/**
/*@project_name Queen Anya [MD]
* @Developer @MR Hex ULTRA Tech <https://github.com/Hex-ULTRA-Tech-Ofc>
* @description Power Full Whatsapp User Bot Queen Anya MD 
* @link <https://github.com/Hex-ULTRA-Tech-Ofc>
* @version V1

© 2023 MR Hex ULTRA Tech.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const anyaWA = require('queen_anya_core/dist/anyaCore');

anyaWA.start()

const events = async () => {
    const WASocket = await anyaWA.ev.on("open.connection");
    
    anyaWA.ev.on("connection.update", WASocket);
    anyaWA.ev.on("auth.update", WASocket);
    anyaWA.ev.on("messages.upsert", WASocket);
    
    anyaWA.ev.on("group.updates", WASocket);
    anyaWA.ev.on("call.manage", WASocket);
}
events();

const console_info = console.info
console.info = function() {
    if(!require("util").format(...arguments).includes("SessionEntry")){
        return console_info(...arguments)
    }
}