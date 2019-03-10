const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541653142161457152")
setInterval(function() {
channel.send(`by [مجهول/NastO]:blush: :blush: :blush: :blush:  GG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);