/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "pp",
    category: "fun",
    description: "Command to show your big your penis is.",
    aliases: [" "],
    usage: "pp",
    run: async(client, message, args) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let user = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${user} has a ${random(0, 30)} inch penis`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}