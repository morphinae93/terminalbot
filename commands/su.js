module.exports = {
    name: 'su',
    description: "This gives root",
    execute(message) {

function suFunction(message) {
    message.channel.send('valid command recognised.');
    if (message.member.roles.cache.find(r => r.name === "admin")) {
        const role = message.guild.roles.cache.find(r => r.name === 'root');
        let member = message.member;
        member.roles.add(role);
        message.channel.send('uid=o, root');
    }
    else
        message.channel.send('You are not in the sudoers file. This incident will be reported!');
        }
    }
}