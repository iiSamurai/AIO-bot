/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "iq",
    category: "fun",
    description: "Command to show your IQ.",
    aliases: [" "],
    usage: "iq",
    run: async(client, message, args) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let user = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${user} has an IQ of ${random(0, 300)}`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}