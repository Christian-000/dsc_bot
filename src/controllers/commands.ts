import { Message, MessageEmbed } from "discord.js";
import { prefix } from "../config.json";
import axios from "axios";

class MsjCommands {
  constructor(message: Message) {
    if (message.author.bot) return;
    console.log(message.content);
    if (!message.content.startsWith(prefix)) return;
  }

  public async ping(str: string, message: Message) {
    if (str === prefix + "ping") message.channel.send("pong");
  }

  public async fc(str: string, message: Message) {
    if (str === prefix + "fc") {
      if (Math.round(Math.random())) return await message.channel.send("Cara");
      return message.channel.send("Cruz");
    }
  }

  public async waifu(str: string, message: Message) {
    if (str === prefix + "waifu") {
      axios.get("https://api.waifu.im/random").then((data) => {
        const embed: MessageEmbed = new MessageEmbed()
          .setTitle("Random Waifu")
          .setColor("RANDOM")
          .setImage(data.data.images[0].url);
        message.channel.send({ embeds: [embed] });
      });
    }
  }

  public async yugi(str: string, message: Message) {
    if (str === prefix + "Exodia Manifiestate" || str === prefix + "EM") {
      const embed: MessageEmbed = new MessageEmbed()
        .setTitle("¡OH NO! EXODIA SE ESTÁ MANIFESTANDO")
        .setColor("GOLD")
        .setImage("https://pbs.twimg.com/media/CgVpsNMUEAAXMLP.jpg");
      message.channel.send({ embeds: [embed] });
    }
  }

  public async fachaLevel(str: string, message: Message) {
    if (str.startsWith(prefix + "fachaLevel") || str.startsWith(prefix + "fl")){

        let random: number = 0 + Math.floor(Math.random() * 100);

        let user = message.mentions.users.first();
        if(!user) return;
        return await message.channel.send(`El nivel de facha de <@${user.id}> es del ${random}%`)    
    }    
  }
}

export default MsjCommands;
