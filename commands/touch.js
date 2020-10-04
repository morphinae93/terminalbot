module.exports = {
    name: 'touch',
    description: "This creates a channel",
    execute(message, messageArray, guild) {
      if (message.member.roles.cache.find(r => r.name === "root") && messageArray[1] === 'touch') {
        if (!messageArray[2].length){
         return;
        }
        let touchFile = messageArray[2];
        if (messageArray[3] === "text") {
          message.guild.channels.create(messageArray[2], {
            type: "text"
          })
          return;
        } else if (messageArray[3] ==="voice") {
          message.guild.channels.create(messageArray[2], {
            type: "voice"
          })
          return;
        } else {message.channel.send('invalid arguments.')};
        return;
      }
    }
  }
