module.exports = {
    name: 'avatar',
    aliases: ['icon', 'avt'],
    execute(message) {
        const Discord = require("discord.js");
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .setAuthor(`${user.username}'s Profile Picture`)
            .setImage(user.displayAvatarURL({format: 'jpg'}));
        message.channel.send(avatarEmbed);
    },
};