module.exports = {
    name: 'mkdir',
    description: "This create category",
    execute(message, messageArray, guild) {
      if (message.member.roles.cache.find(r => r.name === "root") && messageArray[1] === 'mkdir') {
        if (!messageArray[2].length){
         return;
        }
        let directoryName = messageArray[2];
        message.guild.channels.create(directoryName, {
          type: "category"
        })
      }
    }
}
