
const Discord = require('discord.js');

const {prefix, token } = require('./config.json')

const fs = require('fs');

const { cpuUsage } = require('process');

const client = new Discord.Client();

client.commands = new Discord.Collection();

module.exports = {client}

const ytdl = require('ytdl-core');

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

        case "mkdir":
            client.commands.get("mkdir").execute(message, argOne)
                break;
        case "role":
            if (message.member.roles.cache.find(r => r.name === "admin")) {
                if (argOne==="add") {
                  if (!message.guild.roles.cache.find(r => r.name === argTwo)){
                    message.channel.send('this role doesnt exist')
                    break;
                  }


                }else if (argOne==="remove") {
                  message.channel.send('valid command recognised.');
                  if(!message.member.roles.cache.find(r => r.name === argTwo)){
                    message.channel.send('this user has no role')
                  }
                      break;
                }else{
                    message.channel.send('something went wrong')
                };
            }else{
                message.channel.send("u no root")
            }
        case "touch":
          client.commands.get('touch').execute(message, messageArray, message.guild)
          break;
        default:
            return
    }
});






client.login(token);
