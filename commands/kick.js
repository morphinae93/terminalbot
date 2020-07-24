module.exports = {
    name: 'kick',
    description: "This kicks a user for free, cyberbullying :check:",
    execute(message, messageArray, guild) {
      if (message.member.roles.cache.find(r => r.name === "root")) {
        let why = "we're most likely abusing our power";
        if (messageArray[3] === undefined){
          const user = message.mentions.users.first();
          user.kick;
          message.channel.send(`${user} has been kicked from the server because ${why}`);
          return;
        } else if (messageArray[3] === 'reason'){
          why = messageArray[4];
          const user = message.mentions.users.first();
          user.kick;
          message.channel.send(`${user} has been kicked from the server because ${why}`);
        return;
      } else if (!messageArray[3] === 'reason') {
        message.channel.send('syntax error');
        return;
    }
  }
  if (!message.member.roles.cache.find(r => r.name === 'root')) {
    message.channel.send('You are not in the sudoers file. This incident will be reported!');
    return;
  }
    }
}
