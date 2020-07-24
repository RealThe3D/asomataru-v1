module.exports = {
    name:'cat',
    description:'Shows a cat! UwU',
    aliases: ['meow'],
    execute (message) {
        var randoMeow = [
            'https://media1.giphy.com/media/v6aOjy0Qo1fIA/giphy.webp?cid=ecf05e47on8h8wlq3hrvt5vdz3pqme8bto2hiu2i0pi950pa&rid=giphy.webp',
            'https://media2.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.webp?cid=ecf05e47on8h8wlq3hrvt5vdz3pqme8bto2hiu2i0pi950pa&rid=giphy.webp',
            'https://media0.giphy.com/media/MWSRkVoNaC30A/giphy.webp?cid=ecf05e47tdjugmp1biy7dzz17eavrd06ctkorf2kzhb2lay5&rid=giphy.webp',
            'https://media3.giphy.com/media/Nm8ZPAGOwZUQM/200.webp?cid=ecf05e47on8h8wlq3hrvt5vdz3pqme8bto2hiu2i0pi950pa&rid=200.webp',
            'https://media2.giphy.com/media/ORBjACSOzSYq4/giphy.webp?cid=ecf05e4720yu0745bxjjsi8h52034567crq2pdkw83dfe2dh&rid=giphy.webp',//5
            'https://media1.giphy.com/media/q5D43XCcHr8v6/200.webp?cid=ecf05e47w3jjity21hiln7dcytfzhb9zztasrm3iux22417s&rid=200.webp',
            'https://https://media3.giphy.com/media/WYEWpk4lRPDq0/200w.webp?cid=ecf05e47wnb03uskuhnspniq5s60nqcezk9bq74h6723xp4f&rid=200w.webp'
        ]
        var catResult = randoMeow[Math.floor(Math.random() * randoMeow.length)];
        var msgName = `**__Who's a good cuddly kitten!__**`;
      message.channel.send(msgName+' '+catResult).then().catch(console.error);
    },
};