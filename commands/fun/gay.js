/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "gay",
    category: "fun",
    description: "Command to show how gay you are.",
    aliases: ["gr", "gayrate"],
    usage: "gay",
    run: async(client, message, args) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let user = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${user} has a gay rate of ${random(0, 100)}%`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}