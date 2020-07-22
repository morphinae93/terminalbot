const ytdl = require("ytdl-core");

const queue = new Map();
module.exports = {
    name: 'youtube',
    description: 'executes the youtube commands',
    execute(message, messageArray) {
client.on("message", async message => {
  
  const serverQueue = queue.get(message.guild.id);

  if (messageArray[2] === 'play') {
    execute(message, serverQueue);
    return;
  } else if (messageArray[2] === 'skip') {
        skip(message, serverQueue);
        return;
  } else if (messageArray[2] === 'stop') {
        stop(message, serverQueue);
        return;
  } else if (messageArray[2] === 'join') {
        join(message);
  } else if (messageArray[2] === 'leave') {
        leave(message);
  } else if (messageArray[2] === 'add') {
        add(message, messageArray);
  }
    else {
    message.channel.send("You need to enter a valid command!");
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");
  
  function leave(message) {
    if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    return;
  }
  function add(message, messageArray) {
      
  }
  function join(message) {
    if (!message.member.voiceChannel) {
        message.channel.sendMessage("You must be in a voice channel for me to connect! Join a voice channel and try again!");
        return;
    }
    if (!message.guild.voiceConnection) message.member.voiceChannel.join();
    return;
    }
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) {
    message.channel.send("You need to be in a voice channel to play music!");
    return;
  }
    const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
         message.channel.send("I need the permissions to join and speak in your voice channel!");
         return;
  }

  const songInfo = await ytdl.getInfo(args[2]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    message.channel.send(`${song.title} has been added to the queue!`);
    return;
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    message.channel.send("You have to be in a voice channel to stop the music!");
    return;
    }
  if (!serverQueue) {
    message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
    return;
    }

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    message.channel.send("You have to be in a voice channel to stop the music!");
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
  return;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
     dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
     serverQueue.textChannel.send(`Start playing: **${song.title}**`);
        }
    return;
}
}