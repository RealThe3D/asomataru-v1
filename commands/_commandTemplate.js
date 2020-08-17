module.exports = {
    name:'template', // name of command
    description:'Flip a coin!', // description (optional)
    aliases: ['tmp', 'temp'], // other names for the commands to be called by
    execute (message) {
// code goes here
    message.channel.send("Refer to ./commands/.commandTemplate.js for info on this!").then().catch(console.error); //example
    },
};

// look at ./commands/_commandTemplateEmbed.js if you want embed in your commmands.