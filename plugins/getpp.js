const { cmd } = require("../command");
const axios = require("axios");
const fs = require("fs");

cmd({
    pattern: "getpp",
    desc: "Fetch the profile picture of a tagged or replied user.",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { quoted, isGroup, sender, participants, reply }) => {
    try {
        // Determine the target user
        const targetJid = quoted ? quoted.sender : sender;

        if (!targetJid) return reply("⚠️ Please reply to a message to fetch the profile picture.");

        // Fetch the user's profile picture URL
        const userPicUrl = await conn.profilePictureUrl(targetJid, "image").catch(() => null);

        if (!userPicUrl) return reply("⚠️ No profile picture found for the specified user.");

        // Send the user's profile picture
        await conn.sendMessage(m.chat, {
            image: { url: userPicUrl },
            caption: "🖼️ ʜᴇʀᴇ ɪꜱ ᴛʜᴇ ᴘʀᴏꜰɪʟᴇ ᴘɪᴄᴛᴜʀᴇ ᴏꜰ ᴛʜᴇ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴜꜱᴇʀ.\n\n> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐒𝐄𝐍𝐔_𝐌𝐃 💛"
        });
    } catch (e) {
        console.error("Error fetching user profile picture:", e);
        reply("❌ An error occurred while fetching the profile picture. Please try again later.");
    }
});
