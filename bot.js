const Discord = require("discord.js");
const package = require('./package.json');
const version = (package.version)
const fs = require("fs");
const TOKEN = process.env.BOT_TOKEN;
const prefix = process.env.BOT_PREFIX;

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


bot.once('ready', () => {
    console.log(`Bot is ready and working in ${bot.guilds.cache.size} servers with ${bot.users.cache.size} users! The bot is on version ${version}`);
    bot.user.setPresence(`Asomataru v1.1.8!`);
    console.log('Ready!');
});

bot.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${bot.memberCount} members!`);
    console.log(`I am now working in ${bot.guilds.size} servers with ${bot.users.size} users!`)
});

bot.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    console.log(`I am now working in ${bot.guilds.size} servers with ${bot.users.size} users!`)
});

bot.on('message', async (message) => {
	if (message.channel.type === "dm") return;
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command =
		bot.commands.get(commandName) ||
		bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply("I can't execute that command inside DMs!");
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});
bot.login(TOKEN);