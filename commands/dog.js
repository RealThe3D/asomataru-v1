module.exports = {
    name:'dog',
    description:'Shows a doggo!',
    aliases: ['doggo', 'doge'],
    execute (message) {
        var randoDoggo = [
            'https://media3.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif?cid=ecf05e47k78tq2f3jnhl4muqx6kxrdq7y736ujxrzndybu33&rid=giphy.gif',
            'https://media3.giphy.com/media/QvBoMEcQ7DQXK/giphy.webp?cid=ecf05e47k78tq2f3jnhl4muqx6kxrdq7y736ujxrzndybu33&rid=giphy.webp',
            'https://media0.giphy.com/media/eeUJaTwsHh3tswkaYm/giphy.webp?cid=ecf05e47mvxixk260koh0j8uzpwpkjmdykif5t15bz8m3fmo&rid=giphy.webp',
            'https://media2.giphy.com/media/naXyAp2VYMR4k/200.webp?cid=ecf05e47mvxixk260koh0j8uzpwpkjmdykif5t15bz8m3fmo&rid=200.webp',
            'https://media1.giphy.com/media/bKqtxkyPXJv8I/200w.webp?cid=ecf05e47r0tcjsf17369ao8zrwr8e4odeiy8bi3lyapn9qoo&rid=200w.webp',//5
            'https://media0.giphy.com/media/AAmhvrZzLCz1m/giphy.webp?cid=ecf05e479r3183ww958rqbrwq7hl2a62mk2z80rxrtvmxusy&rid=giphy.webp'
        ]
        var dogResult = randoDoggo[Math.floor(Math.random() * randoDoggo.length)];
        var msgName = `**__Who's a good doggo!__**`;
      message.channel.send(msgName+' '+dogResult).then().catch(console.error);
    },
};