const Discord = require('discord.js');
const superagent = require('superagent');

modules.exports = {
    name:'dog2',
    description:'Shows a doggo!',
    aliases: ['doggo', 'doge'],
    execute (message) {

    const { body } = await superagent
    .get('http://random.dog/woof.json');

    let link = body.url;

    const embed = new Discord.MessageEmbed()
    .setColor('#ff9900')
    .setTitle('Whos a good doggo!')
    .setImage(link);

    message.channel.send({ embed });
    },
};
