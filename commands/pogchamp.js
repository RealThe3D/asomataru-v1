const Discord = require("discord.js");

module.exports = {
    name:'pogchamp',
    description:'Show pogchamp!',
    aliases: ['pog', 'poggers'],
    execute (message) {
    const pogLink = "https://img.pngio.com/emote-pogchamp-twitchtv-greenbluerup-emoticon-png-clipart-pogchamp-emote-discord-728_508.jpg";
    const embed = new Discord.MessageEmbed()
    .setImage (pogLink)
    .setTitle (`**Poggers!**`)
    .setFooter (`POGGERS!`)

    message.channel.send(embed);
    },
};