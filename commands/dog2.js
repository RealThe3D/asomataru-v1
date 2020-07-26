const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (message) => {
    const { body } = await superagent
    .get('http://random.dog/woof.json');

    let link = body.url;

    const embed = new Discord.MessageEmbed()
    .setColor('#ff9900')
    .setTitle('Whos a good doggo!')
    .setImage(link);

    message.channel.send({ embed });
};

exports.help = {
    enabled: true,
    name: 'dog2',
    aliases: ['doggo'],
    args: [],
    description: 'Sends a random doggy',
};