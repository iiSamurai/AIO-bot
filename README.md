### Setup
- <a href="https://classic.yarnpkg.com/en/docs/install#windows-stable">Install yarn</a>
- Clone the repository
- Open the cloned repository on your machine in a shell and write `yarn` to install depedencies
- Change the prefix / token values in `config.json`
- Start the bot with `node .`

# Command base
```js
/* Import Modules */

module.exports = { 
    name: "",
    category: "",
    description: "",
    aliases: [" "],
    usage: "",
    run: async(client, message, args) => {

    }
}
```

# Example 
```js
/* Import Modules */
const Discord = require('discord.js')

module.exports = {
    name: "roll",
    category: "fun",
    description: "Command that rolls a dice",
    aliases: [" "],
    usage: "roll",
    run: async(client, message, args) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let user = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${user} rolled ${random(0, 8)}`)
        .setColor("BLURPLE")
        .setFooter(message.author.username, message.author.displayAvatarURL()))
    }
}
```
## Invite 
- [Invite the bot to your server](https://discord.com/api/oauth2/authorize?client_id=871202316542414848&permissions=8&scope=bot)

## Credits 
- <a href="https://github.com/synesta">synesta</a>
- <a href="https://github.com/rayzdev">rayz</a>

## Support
If you need any assistance, you can join our <a href="https://discord.gg/r454v4mbur">support</a> server.
