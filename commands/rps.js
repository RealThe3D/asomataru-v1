module.exports = {
    name:'rps',
    description:'Flip a coin!',
    aliases: ['tmp', 'temp'],
if (command === 'rps') { 
    const Answer = ['Rock', 'Paper', 'Scissors'];
   const random = Math.floor((Math.random() * Answer.length));
   const Response = Answer[random];
   
   const choice = args[0];
   if (!choice) return message.channel.send('How to play: \'${prefix}rps <Rock/Paper/Scissors>\'');
   if (!Answer.includes(choice)) return message.channel.send('Only these responses will be recognized: \'${Answer.join(', ')}\'');
   
   console.log('Bot Result:', Response);
   if (Response == Answer) return message.reply("We tied? Once more!");
   
   switch(Response) {
   
   case 'Rock': {
   if(Answer === 'Paper') return message.reply("I win! Better luck next time!");
   else return message.reply("I-I lost? How could this be?");
   }
   
   case 'Paper': {
   if(Answer === 'Rock') return message.reply("I win! Better luck next time!");
   else return message.reply("I-I lost? How could this be?");
   }
   
   case 'Scissors': {
   if(Answer === 'Paper') return message.reply("I win! Better luck next time!");
   else return message.reply("I-I lost? How could this be?");
   }
   
   default: {
   return message.channel.send('`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
   }
   }
   }
   });