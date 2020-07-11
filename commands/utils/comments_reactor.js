
const reactor = async (message) => {
  if (!message.author.bot) return;

  if (message.channel.id == "707082767648686111") {
      try {
        await message.react('⬆');
        await message.react('⬇');
        await message.react('⚠');
      } catch (error) {
        console.error('One of the emojis failed to react.');
      }
  };
}

module.exports.reactor = reactor;