const fs = require("fs");
const Discord = require("discord.js");
const { prefix } = require("./config.json");
const client = new Discord.Client();
const server = require("./server.js");
const cooldowns = new Discord.Collection();

// using env to store token
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;

const reactorModule = require('./commands/utils/comments_reactor');

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("200 OK!");
  client.user.setActivity("pup help", { type: "WATCHING" });
});

client.on("message", async message => {
  
  reactorModule.reactor(message);
  
  let msgLoCase = message.content.toLowerCase();

if (!msgLoCase.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  // cooldown

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }
  
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;
  
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(`you're on cooldown! ${timeLeft.toFixed(1)} more second(s) left.`);
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  
  // if (message.author.id == "617297062551224331") return message.channel.send("user blacklisted");
  
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("incorrect or missing argument!");
  }
  
  // send logs
  if (message.author.id == "568685551914582016" || !prefix.length) return console.log('[commands]isDev: true');
  const logChan = client.channels.cache.get('659676588928925697');
  const logEmbed = new Discord.MessageEmbed()
    .setColor("#cc1242")
    .setTitle(message.author.username)
    .setDescription(`Server: **${message.guild}**\nCommand: **${message.content}**\nChannel: ${message.channel}`)
    .addField("Reference", message.url)
    .setThumbnail(message.author.avatarURL())
  logChan.send(logEmbed);
});

client.login(token);
