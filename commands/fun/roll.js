/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "roll",
    category: "fun",
    description: "Command that rolls a dice.",
    aliases: [" "],
    usage: "roll",
    run: async(client, message, args) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let user = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${user} rolled ${random(0, 8)}`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}