module.exports = {
    name: "anime", // set command name
    aliases: ['animegirl','animegirls','ag','kawaii'], // set command aliases
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 0, // in seconds
    exec: async (client, message, args) => {
        const randomPuppy = require('random-puppy');
        const Discord = require('discord.js');
        const subReddits = ["awwnime"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed = new Discord.MessageEmbed()
        .setImage (img)
        .setTitle (`**__This command is much better than Aka's!__**`)
        .setURL (`https://reddit.com/${random}`)
        .setFooter (`From r/${random}`)
    
        message.channel.send(embed);
        },
};