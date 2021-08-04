/* Import Modules */
const Discord = require('discord.js')
const api = require("imageapi.js");

module.exports = { 
    name: "dog",
    category: "fun",
    description: "Command to send randon pictures of dogs",
    aliases: [" "],
    usage: "dog",
    run: async(client, message, args) => {
        const toSearch = "puppy"
        const search = toSearch[Math.floor(Math.random() * (toSearch.length))];
        const dog = await api.advanced(toSearch);

            message.channel.send(new Discord.MessageEmbed()
            .setURL(`https://reddit.com/r/${toSearch}`)
            .setImage(dog.img)
            .setColor("BLURPLE")
            .setFooter(`👍 ${dog.upvotes}  |  👎 ${dog.downvotes}`))
    }
}

