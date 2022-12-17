/*@project_name Queen Anya [MD]
* @Developer @MR Hex ULTRA Tech <https://github.com/Hex-ULTRA-Tech-Ofc>
* @description Power Full Whatsapp User Bot Queen Anya MD 
* @link <https://github.com/Hex-ULTRA-Tech-Ofc>
* @version V1

© 2023 MR Hex ULTRA Tech All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const { ANYA, anyaDB, _default, _default_list_sections, Language, restore } = require('queen_amdi_core/dist/scripts')
const { addStarRates, checkJID, getStarRates, resetRates } = anyaDB.rateDB
const { inputSettings, resetconnectionDB, getSettingsList, resetSettingsDB } = anyaDB.settingsDB
const { getGrpSettingsList, resetGrpSettingsDB } = anyaDB.grpSetDB
const { getMiscData } = anyaDB.miscDB
const { getAllDelJids, getBanJidList, resetBanDB, resetDelAllDB } = anyaDB.ban_jidDB
const { getAllWelcome, getAllBye, resetWelcomeDB, resetByeDB } = anyaDB.greetingsDB
const { rateList, resetLIST, rateText } = _default_list_sections
const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` };
const fs = require('fs');
const { writeFile } = require('fs/promises');
const Lang = Language.getString('botCTRL');

ANYA({ cmd: "restart", desc: "Restart the bot", type: "profile", react: "🔃" }, (async (anyaWA) => {
    let { reply, restart } = anyaWA.msgLayout

    await reply('*Restarting...*');
    await restart();
}));

Anya({ cmd: "stop", desc: "Stop the bot", type: "profile", react: "📴" }, (async (anyaWA) => {
    let { reply, restart } = anyaWA.msgLayout

    await reply('*Bot is shutting down...*\n\n_(You have to manually turn on the bot!)_');
    process.exit(1);
}));


ANYA({ cmd: "backup", desc: Lang.backupDESC, type: "profile", react: "📤" }, (async (anyaWA) => {
    let { sendDocument } = anyaWA.msgLayout
    
    try {    
        const settingsDB = await getSettingsList();
        const settingsFILE = `SettingsBackup_${anyaWA.msg.messageTimestamp}.anya`
        const contentset = JSON.stringify(settingsDB)
        let bufferset = Buffer.from(contentset)
        await writeFile(settingsFILE, bufferset);
        await sendDocument(fs.readFileSync('./' + settingsFILE), { mimetype: _default.anyaMIMETYPE, fileName: settingsFILE, quoted: true });

        const grpsettingsDB = await getGrpSettingsList();
        const grpsettingsFILE = `GroupSettingsBackup_${anyaWA.msg.messageTimestamp}.anya`
        const grpcontentset = JSON.stringify(grpsettingsDB)
        let buffergrpset = Buffer.from(grpcontentset)
        await writeFile(grpsettingsFILE, buffergrpset);
        await sendDocument(fs.readFileSync('./' + grpsettingsFILE), { mimetype: _default.anyaMIMETYPE, fileName: grpsettingsFILE, quoted: true });

        const ratingsDB = await getStarRates();
        const ratingsFILE = `RatesBackup_${anyaWA.msg.messageTimestamp}.anya`
        const ratingscontent = JSON.stringify(ratingsDB)
        let bufferratings = Buffer.from(ratingscontent)
        await writeFile(ratingsFILE, bufferratings);
        await sendDocument(fs.readFileSync('./' + ratingsFILE), { mimetype: _default.anyaMIMETYPE, fileName: ratingsFILE, quoted: true });

        const delallDB = await getAllDelJids();
        const delallFILE = `DelAllJIDBackup_${anyaWA.msg.messageTimestamp}.anya`
        const contentdel = JSON.stringify(delallDB)
        let bufferdel = Buffer.from(contentdel)
        await writeFile(delallFILE, bufferdel);
        await sendDocument(fs.readFileSync('./' + delallFILE), { mimetype: _default.anyaMIMETYPE, fileName: delallFILE, quoted: true });

        const banDB = await getBanJidList();
        const banFILE = `BanJIDBackup_${anyaWA.msg.messageTimestamp}.anya`
        const contentban = JSON.stringify(banDB)
        let bufferban = Buffer.from(contentban)
        await writeFile(banFILE, bufferban);
        await sendDocument(fs.readFileSync('./' + banFILE), { mimetype: _default.anyaMIMETYPE, fileName: banFILE, quoted: true });

        const welcomeDB = await getAllWelcome();
        const welcomeFILE = `WelcomeNoteBackup_${anyaWA.msg.messageTimestamp}.anya`
        const contentwelcome = JSON.stringify(welcomeDB)
        let bufferwelcome = Buffer.from(contentwelcome)
        await writeFile(welcomeFILE, bufferwelcome);
        await sendDocument(fs.readFileSync('./' + welcomeFILE), { mimetype: _default.anyaMIMETYPE, fileName: welcomeFILE, quoted: true });

        const byeDB = await getAllBye();
        const byeFILE = `ByeNoteBackup_${anyaWA.msg.messageTimestamp}.anya`
        const contentbye = JSON.stringify(byeDB)
        let bufferbye = Buffer.from(contentbye)
        await writeFile(byeFILE, bufferbye);
        return await sendDocument(fs.readFileSync('./' + byeFILE), { mimetype: _default.anyaMIMETYPE, fileName: byeFILE, quoted: true });
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


ANYA({ cmd: "restore", desc: Lang.restoreDESC, type: "profile", react: "📥" }, (async (anyaWA) => {
    await restore();
}));


ANYA({ cmd: "reset", desc: Lang.resetDESC, type: "profile", react: "🚮" }, (async (anyaWA) => {
    let { input, prefix, reply, sendListMsg } = anyaWA.msgLayout

    try {
        switch (input) { 
            default:
                var listInfo = {}
                listInfo.title = Lang.resetDBtitle
                listInfo.text = Lang.resetDBtxt
                listInfo.buttonTXT = 'default'  
                await sendListMsg(listInfo, resetLIST(prefix));
            break;

            case 'connectionDB': 
                await reply(Lang.resetted.format(input), "✔️");
                await reply('Bot disconnected!', "❌")
                await resetconnectionDB();
            break;
            
            case 'BanDB': 
                await resetBanDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'DellAllDB': 
                await resetDelAllDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'WelcomeDB': 
                await resetWelcomeDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'ByeDB': 
                await resetByeDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'SettingsDB': 
                await resetSettingsDB();
                await inputSettings('WORK_TYPE', 'private');
                await inputSettings('PREFIX', '.');
                await inputSettings('MODERATOR', 'no moderators added')
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'GroupSettingsDB': 
                await resetGrpSettingsDB();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'RatesDB': 
                await resetRates();
                await reply(Lang.resetted.format(input), "✔️");
            break;
            
            case 'allDB':
                await resetBanDB();
                await resetDelAllDB();
                await resetWelcomeDB();
                await resetGrpSettingsDB();
                await resetByeDB();
                await resetSettingsDB();
                await resetRates();
                await reply(Lang.allDB, "✔️");
                await resetconnectionDB();
            break;
        };
    } catch (e) {
        console.log(e);
        return await reply("Error".fetchError(e), "❌", 1);
    }
}));


ANYA({ cmd: "rate", desc: Lang.rateDESC, type: "primary", react: "✨" }, (async (anyaWA) => {
    let { input, prefix, reply, sender, sendButtonMsg, sendListMsg } = anyaWA.msgLayout

    if (process.env.DATABASE_URL === 'local' || process.env.DATABASE_URL === 'vps') return reply('Rating feature is not available for local databases! :(');

    if (!input) {
        const botname = await getMiscData('BOTNAME');
        let BOTNAME = !botname.data ? 'Queen Anya' : botname.data

        var listInfo = {}
        listInfo.title = Lang.ratesTitle.format(BOTNAME)
        listInfo.buttonTXT = 'default' 
        listInfo.text = await rateText();
        return await sendListMsg(listInfo, rateList(prefix));
    }

    switch (input) { case 'one': case 'two': case 'three': case 'four': case 'five':
            const isRated = await checkJID(sender, input);
            if (isRated) return await reply(Lang.alreadyRATED.format(input));
            await addStarRates(sender, input);
            await reply(Lang.rated.format(input), "✔️");
            //await sendButtonMsg(yesorno(prefix, 'rate', 'thankyou'), Lang.rated.format(input), tagMsg = true);
        break;
    };
}));