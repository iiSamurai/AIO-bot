/* Import Modules */
const Discord = require('discord.js')

module.exports = { 
    name: "randomcolor",
    category: "util",
    description: "Command to generate random colors",
    aliases: [" "],
    usage: "randomcolor",
    run: async(client, message, args) => {
        let clr = '#'+Math.floor(Math.random()*16777215).toString(16);
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Hex: ${clr}`)
        .setColor(clr)
        .setFooter(message.author.username, message.author.displayAvatarURL()));
    }
}