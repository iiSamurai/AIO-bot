const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: "github",
    description: "Command to display github profile information.",
    aliases: ["gitsearch"],
    category: "info",
    usage: "github <user>",
    run: async(client, message, args) => {
        const name = args.join(" ")
        if(!name) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('You must add a username to search for')
        .setColor("#fde69e")
        .setFooter(message.author.username, message.author.displayAvatarURL()))  

        const url = `https://api.github.com/users/${name}`

        let response 
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`There was an error`)
            .setColor("#fde69e")
            .setFooter(message.author.username, message.author.displayAvatarURL()))  
        }

        message.channel.send(new Discord.MessageEmbed()
        .setTitle(response.login ? response.login : "This user does not exist")
        .setURL(response.html_url)
        .setThumbnail(`https://github.com/synesta.png`)
        .addField("Public Repositories:", response.public_repos ? response.public_repos : "No Public Repositories")
        .addField("Followers:", response.followers ? response.followers : "0")
        .addField("Following:", response.following ? response.following : "0")
        .addField("Email:", response.email ? response.email : "No Email")
        .addField("Company:", response.company ? response.company : "No Company")
        .addField("Location:", response.location ? response.location : "No Location")
        .addField("Avatar:", `https://github.com/${name}.png`)
        .setColor("BLURPLE"))
    }
}