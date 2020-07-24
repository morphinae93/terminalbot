module.exports = {
    name: 'mkdir',
    description: "This create category",
    execute(message, messageArray, guild) {
      if (message.member.roles.cache.find(r => r.name === "root")) {
        if (!messageArray[2].length){
         return;
        }
        message.guild.channels.create(messageArray[2], {
          type: "category"
        })
        return;
      }
    }
}
