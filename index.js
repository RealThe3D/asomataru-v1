const { Client } = require("discord.js");
const Mongoose = require("mongoose");
const client = new Client();
const TOKEN = process.env.BOT_TOKEN;
const MongoDB_URI = process.env.MongoDB_URI;
client.config = require("./config.json");
client.mongoose = require('./utils/mongoose');
client.mongoose.init();
client.database = Mongoose.connection;
client.database.on("error", (err) => {
    throw err;
});
client.database.once("open", async () => {
    require("./models");
    require("./handlers/eventHandler")(client);
    require("./handlers/moduleHandler")(client);
    client.login(TOKEN);
});