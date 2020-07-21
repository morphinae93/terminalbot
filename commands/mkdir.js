module.exports = {
    name: 'mkdir',
    description: "This gives this creates a category",
    execute(message, args) {

    function mkdirFunction(message, args) {
            message.channel.send('preparing to add directory...')
            if (message.member.roles.cache.find(r => r.name === "root")) {
             if (!argOne.length) return;
            
            const makeDir = argOne.shift().toLowerCase();
            Guild.createchannel(makeDir, {
                type: 'category',
            } )
            message.channel.send('succesfully created directory!');
            }  
        }
    }
}