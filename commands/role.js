module.exports = {
    name: 'role',
    description: "This adds/removes roles",
    execute(message, messageArray, guild) {
      if (message.member.roles.cache.find(r => r.name === "root")) {
          if (messageArray[2]==="add") {
            if (!message.guild.roles.cache.find(r => r.name === messageArray[3])){
              message.channel.send('this role doesnt exist')
            } else if ( user = message.guild.members.fetch({query: messageArray[5], limit: 1})) {
              member.addRole(messageArray[3]);
           }
          } 
           if (messageArray[2]==="remove") {
            message.channel.send('valid command recognised.');
            if(!message.member.roles.cache.find(r => r.name === messageArray[3])){
              message.channel.send('this user has no role');
            } else {
              member.removeRole(messageArray[3]);
            } 
          } else message.channel.send('~~some~~*no*thing went wrong');
          }
        }
      }
    
  