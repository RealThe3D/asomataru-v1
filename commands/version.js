module.exports = {
    name: 'version',
    aliases: 'v',
    execute: async (message, args) => {
        const Discord = require("discord.js");
        const package = require('../package.json');
        const version = (package.version)
        const embed = new Discord.MessageEmbed()
        .setColor("006400")
        .setTitle("Asomataru Bot")
        .setDescription(`I'm on version ${version}`)
        .setFooter("Made by The3D#9801.")
        message.channel.send(embed);
    },
}