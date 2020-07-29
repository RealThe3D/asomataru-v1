const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name:'dog',
    description:'Shows a doggo! Rawr!',
    aliases: ['doggo'],
    execute: async (message) => {
    const subReddits = ["dogs", "dog", "doggos"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage (img)
    .setTitle (`**__Who is a good doggo!__**`)
    .setURL (`https://reddit.com/${random}`)
    .setFooter (`From r/${random}`)

    message.channel.send(embed);
    },
};