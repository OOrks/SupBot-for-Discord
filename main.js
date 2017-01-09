const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('ready', () =>{
  console.log("[LOG]I am ready");
})

bot.on('message', message => {

  let prefix = "/"

  if (!message.content.startsWith(prefix) || message.author.bot)
  {
    return;
    console.log("[LOG]Command found");
  }

  if (message.content === prefix + "ping")
  {
    message.channel.sendMessage("pong");
    console.log("[LOG]Ping done");
  }
})

bot.login("MjY4MDQ1MTAxMjgzMDE2NzA2.C1VmrQ.sgEnutBXuz9kkt1fmrRGhJl0seM");
