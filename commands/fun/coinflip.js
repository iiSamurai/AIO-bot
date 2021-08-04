/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "coinflip",
    category: "fun",
    description: "Command to flip a coin.",
    aliases: ["cf", "flip"],
    usage: "coinflip",
    run: async(client, message, args) => {
        let responses = ["heads","tails" ]
        let response = responses[Math.floor(Math.random() * responses.length)];

        await message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${message.author} flipped ${response}`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}