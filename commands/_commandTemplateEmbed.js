module.exports = {
    name: 'tempembed',
    aliases: ['tempe','tempembed'],
    execute(message) {
        const Discord = require("discord.js"); // use need to do this in order to use embed!
        const embedTemplate = new Discord.MessageEmbed() // make a variable using this. 
            .setColor("FFFFFF") // hex code for the color on the left side of the message.
            .setTitle(`Temp Embed!`) // Huge text at the top of the embed.
            .setDescription("Testing Embed, https://discordjs.guide/popular-topics/embeds.html#using-the-richembedmessageembed-constructor") // small text in the middle of embed.
            .setFooter("Footer Example") // little text at the bottom of the embed. (OPTIONAL)
            // There are more than just this, but some where left out becuase they are usually optional.
            // To find the rest, go to https://discordjs.guide/popular-topics/embeds.html#using-the-richembedmessageembed-constructor
        message.channel.send(embedTemplate); // send Embed in chat.
    },
};
