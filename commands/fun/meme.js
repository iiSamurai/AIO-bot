/* Import Modules */
const Discord = require('discord.js')
const api = require("imageapi.js");

module.exports = {
    name : 'meme',
    description: "Command to post memes from reddit.",
    category: "fun",
    aliases: [" "],
    usage: "meme",
    run: async(client, message, args) => {
        const subreddits = ["meme", "dankmemes", "memes", "funny", "lmao", "lol"];
        const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))];
        const meme = await api.advanced(subreddit);

            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setImage(meme.img)
            .setColor("BLURPLE")
            .setFooter(`👍 ${meme.upvotes}  |  👎 ${meme.downvotes}`))
    }
}