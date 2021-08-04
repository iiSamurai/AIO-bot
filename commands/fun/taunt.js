/* Import Modules */
const Discord = require('discord.js')
const insulter = require('insult');

module.exports = { 
    name: "taunt",
    category: "fun",
    description: "Command to insult a user.",
    aliases: ["insult"],
    usage: "taunt",
    run: async(client, message, args) => {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(insulter.Insult())
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}