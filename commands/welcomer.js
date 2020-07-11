const { token } = require("../config.json");
const Discord = require('discord.js');
const bot = new Discord.Client();
const { stripIndents } = require('common-tags');

bot.once('ready', () => {
    console.log('welcomer ready...');
  });
  

bot.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.cache.find(ch => ch.name === 'join-log');

  if (!channel) return;

  const welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#2F3136')
    .setDescription(stripIndents`
    User: **${member}**
    Account Created: ${member.user.createdAt}
    ID: ${member.user.id}
    `)
    .setThumbnail(member.user.avatarURL())
    channel.send(welcomeEmbed);

});

bot.login(token);
