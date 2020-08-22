Bot template with multi language support prepared using DiscordJS v12
---

- Easy to use bot template that can be installed and customized quickly. Now with MongoDB support!
- You just need to edit `config.json` file
- If you are using DiscordJS v11 don't worry you can use the [v11 template](https://github.com/Project-Hammer/discordjs-v11-template) of the same code

Get live support
---
- You can quickly find me on [my Discord server](https://bariscodes.me/discord)

Installation
--- 
- You need [Node.js](https://nodejs.org/) V12 or higher.
- Clone or fork this repository
- Edit `config.json` file
- Run `npm install` command
- Run `npm start` command

Contributing
---
- Feel free to open PRs

Quick Documentation
---

<b>Q:</b> How can I add more languages?<br>
<b>A:</b> To add more languages just copy one of the `en.json` file and translate it. <b>Do not change the key names</b>.

<b>Q:</b> Can I use this codes with DiscordJS v11?<br>
<b>A:</b> Basicly, you can't. But you can use the [v11 template](https://github.com/Project-Hammer/discordjs-v11-template) of the same code!

<b>Q:</b> I want to add new command, but how can I use language system?<br>
<b>A:</b> Just add you new command and use `message.guild.language.TEXT_KEY`. And don't forget to add `TEXT_KEY` and its value to all language files. 
