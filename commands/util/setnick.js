/* Import Modules */
const Discord = require('discord.js')

module.exports = { 
    name: "setnick",
    category: "util",
    description: "Change a user's nickname",
    aliases: ["sn"],
    usage: "setnick <user> <name>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_NICKNAMES')) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`You don't have the required permission to use this command`)
            .setColor("#fde69e")
            .setFooter(message.author.username, message.author.displayAvatarURL()))    
        }

        let user = message.mentions.members.first()
        
        if(!user) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("You must mention a user")
        .setColor("#fde69e")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
        
        let newNick = args.slice(1).join(" ")
        if(!newNick) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("You must enter a new name")
        .setColor("#fde69e")
        .setFooter(message.author.username, message.author.displayAvatarURL()))

        if(message.guild.me.roles.highest.position <= user.roles.highest.position) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`I can't edit this member's name because their highest role is higher or equal to my highest role`)
            .setColor("#fde69e")
            .setFooter(message.author.username, message.author.displayAvatarURL()))
        }

        try { 
            await user.setNickname(newNick)
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${message.mentions.users.first().username}'s name was changed to ${newNick}`)
            .setColor("BLURPLE")
            .setFooter(message.author.username, message.author.displayAvatarURL()))
        } catch {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`There was an error`)
            .setColor("#fde69e"))
        }
    }
}


