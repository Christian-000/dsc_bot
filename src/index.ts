import { Client, Intents, Message } from "discord.js";
import MsjCommands from "./controllers/commands";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

require("dotenv").config();

client.on("ready", () => {
  //console.log(`Logged in as ${client.user.tag}!`);
  console.log("bot on");
});


client.on("messageCreate", async (message: Message) => {
  const commands = new MsjCommands(message);
  const usrInput = message.content;
  
  //Commands
  commands.fc(usrInput, message);
  commands.waifu(usrInput, message);
  commands.ping(usrInput, message);
  commands.yugi(usrInput, message);
  commands.fachaLevel(usrInput, message);
  commands.jojo(usrInput, message);
});

client.login(process.env.TOKEN);
