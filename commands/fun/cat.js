/* Import Modules */
const Discord = require('discord.js')
const api = require("imageapi.js");

module.exports = { 
    name: "cat",
    category: "fun",
    description: "Command to send randon pictures of cats",
    aliases: [" "],
    usage: "cat",
    run: async(client, message, args) => {
        const toSearch = "cats"
        const search = toSearch[Math.floor(Math.random() * (toSearch.length))];
        const cat = await api.advanced(toSearch);

            message.channel.send(new Discord.MessageEmbed()
            .setURL(`https://reddit.com/r/${toSearch}`)
            .setImage(cat.img)
            .setColor("BLURPLE")
            .setFooter(`👍 ${cat.upvotes}  |  👎 ${cat.downvotes}`))
    }
}

