module.exports = {
  name: 'role',
  description: "This add/remove role",
  execute(message, messageArray, guild) {
    //verify if user is root
    if (message.member.roles.cache.find(r => r.name === "root")) {
        //check if it should add a role
        if (messageArray[2]==="add") {
          //check if role exist
          if (!message.guild.roles.cache.find(r => r.name === messageArray[3])){
            message.channel.send('this role doesnt exist')
          }
          //if it exists asign it
          else {
            const role = message.guild.roles.cache.find(r => r.name === messageArray[3]);
            let member = message.mentions.members.first()
            member.roles.add([role])
            message.channel.send('role added')
          }
         }
        //check if it needs to remove a role
        else if (messageArray[2]==="remove") {

          //check if the user has the role
          if (!message.mentions.members.first().roles.cache.find(r => r.name === messageArray[3])){
            message.channel.send('this user doesnt have this role already')
          }
          //if he has it we remove it, we dont check if the role exist because
          //if the user has it, we remove it, else we exit
          else if (message.mentions.members.first().roles.cache.find(r => r.name ===messageArray[3])){
            const role = message.guild.roles.cache.find(r => r.name === messageArray[3]);
            let member = message.mentions.members.first()
            member.roles.remove([role])
            message.channel.send('role removed')
          }
        }else{
            message.channel.send('~~some~~*no*thing went wrong with *you*~~r command~~')
        };

    }
  }}
