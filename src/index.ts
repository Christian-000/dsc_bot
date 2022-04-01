import { Client, Intents, Message, MessageEmbed } from "discord.js";
import { prefix } from "./config.json";
import axios from "axios";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
require("dotenv").config();

client.on("ready", () => {
  //console.log(`Logged in as ${client.user.tag}!`);
  console.log("bot on");
});

client.on("messageCreate", async (message: Message) => {
  if (message.author.bot) return;
  console.log(message.content);

  if (!message.content.startsWith(prefix)) return;

  const args: string[] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift()?.toLowerCase();

  if (command === "ping") message.channel.send("pong");
  //Spawnea una waifu aleatoria
  if (command === "waifu") {
    axios.get("https://api.waifu.im/random").then((data) => {
      const embed: MessageEmbed = new MessageEmbed()
        .setTitle("Random Waifu")
        .setColor("RANDOM")
        .setImage(data.data.images[0].url);
      message.channel.send({ embeds: [embed] });
    });
  }
  //flip coin
  if (command === "fc") {
    if (Math.round(Math.random())) {
      message.channel.send("Cara");
    } else {
      message.channel.send("Cruz");
    }
  }
});

client.login(process.env.TOKEN);
