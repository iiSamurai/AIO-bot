/* Import Modules */
const Discord = require('discord.js')

module.exports = { 
    name: "addrole",
    category: "util",
    description: "Command to add/create roles",
    aliases: ["ar", "cr"],
    usage: "addrole <name> <color>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_ROLES')) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`You don't have the required permission to use this command`)
            .setColor("#fde69e")
            .setFooter(message.author.username, message.author.displayAvatarURL()))    
        }

        let roleName = args[0];

        if(!roleName) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("You must add a role name")
        .setColor("#fde69e")
        .setFooter(message.author.username, message.author.displayAvatarURL()))    

        let roleColor = args[1];
        if(!roleColor) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("You must add a role color")
        .setColor("#fde69e")
        .setFooter(message.author.username, message.author.displayAvatarURL()))

        try {
            await message.guild.roles.create({
                data: {
                    name: roleName,
                    color: roleColor
                }
            })
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`Created "**${roleName}**"`)
            .setColor(roleColor)
            .setFooter(message.author.username, message.author.displayAvatarURL()))
        } catch {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`There was an error`)
            .setColor("#fde69e"))
        }
    }
}