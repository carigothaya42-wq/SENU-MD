const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["status", "online", "a"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const status = `
╭───〔 *💛𝐒𝐄𝐍𝐔-𝐌𝐃-𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒💛* 〕───◉
│✨ *ʙᴏᴛ ɪꜱ ᴀᴄᴛɪᴠᴇ & ᴏɴʟɪɴᴇ!*
│
│🧠 *ᴏᴡɴᴇʀ:* ${config.OWNER_NAME}
│⚡ *ᴠᴇʀꜱɪᴏɴ:* 4.0.0
│📝 *ᴘʀᴇꜰɪx:* [${config.PREFIX}]
│📳 *ᴍᴏᴅᴇ:* [${config.MODE}]
│💾 *ʀᴀᴍ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
│🖥️ *ʜᴏꜱᴛ:* ${os.hostname()}
│⌛ *ᴜᴘᴛɪᴍᴇ:* ${runtime(process.uptime())}
╰────────────────────◉
> ${config.DESCRIPTION}`;

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400734168271@newsletter',
                    newsletterName: '𝐉𝐄𝐒𝐓𝐄𝐑-𝐄𝐗𝐄',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
