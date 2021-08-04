/* Import Modules */
const Discord = require('discord.js')
const newJoke = require('give-me-a-joke')

module.exports = {
    name: "dadjoke",
    category: "fun",
    description: "Command to give you a random joke.",
    aliases: ["joke"],
    usage: "dadjoke",
    run: async(client, message, args) => {
        newJoke.getRandomDadJoke(function(newJoke) {
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(newJoke)
            .setColor("BLURPLE")
            .setFooter(message.author.username, message.author.displayAvatarURL()))
        })
    }
}