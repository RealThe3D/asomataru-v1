const { Client } = require("discord.js");
const Mongoose = require("mongoose");
const client = new Client();
const TOKEN = process.env.BOT_TOKEN;
const MongoDB_URI = process.env.MongoDB_URI;
client.config = require("./config.json");
    Mongoose.connect(MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
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