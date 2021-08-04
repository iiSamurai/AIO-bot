/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "swag",
    category: "fun",
    description: "Command to show how much swag you have.",
    aliases: [" "],
    usage: "swag",
    run: async(client, message, args) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let user = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${user} has an swag level of ${random(0, 100)}%`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}