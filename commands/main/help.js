/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "help",
    category: "main",
    description: "Command to display all commands",
    aliases: ["h"],
    usage: "help",
    run: async(client, message, args) => {
        message.channel.send(new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription(`
        **__# FUN__**
        - autism / coinflip / dadjoke / gay / iq / pp / roll / swag / taunt

        **__# IMAGES__**__
        - cat / dog / sus / meme
    
        **__# MAIN__**
        - help / s-activity

        **__# MOD__**
        - ban / kick / mute / nuke / purge / unmute
    
        **__# UTIL__**
        - addrole / avatar / randomcolor / say / serverinfo / setnick / whois`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}