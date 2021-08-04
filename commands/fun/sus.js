/* Import Modoules */
const Discord = require('discord.js');
const Canvas = require("canvas");

module.exports = {
    name: "sus",
    description: "This command is sus.",
    category: "fun",
    aliases: [" "],
    usage: "sus",
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.author;
        const canvas = Canvas.createCanvas(867, 892);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://i.imgur.com/OopLtL2.jpeg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));

        ctx.drawImage(avatar, 350, 350, 300, 300);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `img_${user.username}.jpg`);
        message.reply({ files: [attachment], allowedMentions: { repliedUser: true } });
    }
}