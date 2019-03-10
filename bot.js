const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541653142161457152")
setInterval(function() {
channel.send(`by [love :heart:  my :heart: love`);
}, 30)
})

client.login(process.env.BOT_TOKEN);