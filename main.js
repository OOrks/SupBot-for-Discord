const Discord = require('discord.js');
const bot = new Discord.Client();
const tools = require('./tools');




bot.on('ready', () =>{
  console.log("[LOG]I am ready");
})

bot.on('message', message => {

  let prefix = "/"

  if (!message.content.startsWith(prefix) || message.author.bot)
  {
    return;
    console.log("[LOG]No Command found");
  }

  if (message.content === prefix + "ping")
  {
    message.channel.sendMessage("pong");
    console.log("[LOG]Ping done");
  }

  if (message.content.startsWith(prefix + "emojify"))
  {
    var returnedMessage = "";

    var txt = message.content.split(" ").slice(1);

    for (var i = 0; i < txt.length; i++) {
      returnedMessage += tools.convertTextToEmoji(txt[i]);
    }

    message.channel.sendMessage(returnedMessage);
    console.log("[LOG]emojifying done");
  }
})

bot.login("MjY4MDQ1MTAxMjgzMDE2NzA2.C1VmrQ.sgEnutBXuz9kkt1fmrRGhJl0seM");
