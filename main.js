
const Discord = require('discord.js');

const {prefix, token } = require('./config.json')

const fs = require('fs');

const { cpuUsage } = require('process');

const client = new Discord.Client();

client.commands = new Discord.Collection();

module.exports = {client}

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    }

client.once('ready', () => {
    console.log('terminalbot == online');
    });



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[1];
    let argOne = messageArray[2];
    let argTwo = messageArray[3];
    let argThree = messageArray[4];
    let argFour = messageArray[5];

    switch(command) {
        case "su":
            client.commands.get('su').execute(message);
              break;
        case "kick":
            client.commands.get('kick').execute(message, messageArray, guild);
                break;
        case "rm":
            client.commands.get('rm').execute(message, messageArray, message.guild);
                break;
        case "mkdir":
            client.commands.get('mkdir').execute(message, messageArray, message.guild);
              break;
        case "touch":
            client.commands.get('touch').execute(message, messageArray, message.guild);
              break;
        case "role":
            client.commands.get('role').execute(message, messageArray, message.guild);
              break;
        
        default:
            message.channel.send('syntax error.');
            return;
    }
});






client.login(token);
