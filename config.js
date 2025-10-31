const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝐒𝐄𝐍𝐔-𝐌𝐃=DBkyTChD#jGlxCAU73MhCiQu8sZGJU6-9AuabyCWk8DASYjsXsoY", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "mongodb://mongo:cfWaBZIdEJVxOhUHDnXaGrmFZHkVgWsY@gondola.proxy.rlwy.net:51807", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/bjPrbF84/3174.jpg",
BOT_NAME: process.env.BOT_NAME || "𝐒𝐄𝐍𝐔-𝐌𝐃",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
