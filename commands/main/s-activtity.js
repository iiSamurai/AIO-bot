/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "setactivity",
    category: "main",
    description: "Command to change bot activity",
    aliases: ["sa", "s-activity"],
    usage: "setactivty <type> <status>",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_SERVER')) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`You don't have the required permission to use this command`)
            .setColor("#fde69e")
            .setFooter(message.author.username, message.author.displayAvatarURL()))    
            }

        if (args[0] === "listening"){
            types = 2
        } else if (args[0] === "streaming"){
            types = 1
        } else if (args[0] === "watching"){
            types = 3
        } else if (args[0] === "reset") {
            client.user.setPresence(" ")
        } else {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`This is not a valid type\n\nValid Types: \`listening\`, \`streaming\`, \`watching\`, \`reset\``)
            .setColor("#fde69e")
            .setFooter(message.author.username, message.author.displayAvatarURL()))
        }

        args.shift()
        content = args.join(" ")
        client.user.setPresence({
            activity: {
                name: content,
                type: types
            }
        })

        await message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Activity has been changed`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}