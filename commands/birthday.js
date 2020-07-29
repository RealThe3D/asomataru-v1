module.exports = {
    name: 'birthday',
    execute: async (message, args) => {
        const ID = "564755874736898048"; 
        const Owner = "327594208758202379";
        const Discord = require('discord.js');

        const bDayEmbed = new Discord.MessageEmbed()
        .setImage ("https://images.indianexpress.com/2017/01/happy-birthday-wish_1500_thinkstockphotos-531424610.jpg")
        .setTitle("**Happy Birthday, Koro!**")
        
        if (message.author.id === ID || Owner) {
            message.channel.send(bDayEmbed);
        } else {
            return message.channel.send("DM happy birthday to SpaceLives47#0463!");
            }
        },
    };