/* Import Modules */
const Discord = require('discord.js');

module.exports = {
    name: "say",
    category: "fun",
    description: "Command something in an embed.",
    aliases: [" "],
    usage: "say <message>",
    run: async(client, message, args) => {
        let toSay = args.join(" ");
        if(!toSay) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`You must provide a message`)
            .setColor("#fde69e"))
        }

        await message.delete();

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(toSay)
        .setColor("BLURPLE"))
    }
}