/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "autism",
    category: "fun",
    description: "Command to show how autistic you are.",
    aliases: [" "],
    usage: "autism",
    run: async(client, message, args) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let user = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${user} is ${random(0, 100)}% autistic`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}