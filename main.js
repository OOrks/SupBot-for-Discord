const Discord = require('discord.js');
const bot = new Discord.Client();
const tools = require('./tools');
const Config = require('./config.json')

console.log(Config);

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
	if(!checkAuthorisations("ping",message))
	{
		return;
	}
    message.channel.sendMessage("pong");
    console.log("[LOG]Ping done");
  }

  if (message.content === prefix + "channelid")
  {
	  if(!checkAuthorisations("channelid",message))
  	{
  		return;
  	}
    message.channel.sendMessage(message.channel.id);
  }

  if (message.content.startsWith(prefix + "emojify"))
  {
	  if(!checkAuthorisations("emojify",message))
  	{
  		return;
  	}
    var returnedMessage = "";

    var txt = message.content.split(" ").slice(1);

    for (var i = 0; i < txt.length; i++) {
		var tempConvert = tools.convertTextToEmoji(txt[i])
		if (tempConvert != ""){
			returnedMessage += tempConvert + "     ";
		}
    }

	if (returnedMessage == "") return;
	if (returnedMessage.length > 2000){
		message.channel.sendMessage("Trop long j'ai la flemme.");
		return;
	}

    message.channel.sendMessage(returnedMessage);
    console.log("[LOG]emojifying done");
  }
});


// Fonction pour checker les authorisation PAR CHANNEL
function checkAuthorisations(commandName,message)
{
	var authLevel;

	//On recupere le niveau d'auth de la commande
	for (var i = 0; i < Config.commands.length; i++) {
		if(Config.commands[i].name == commandName)
		{
			 authLevel = Config.commands[i].authorisationChannels;
		}
	}

	//on check si elle est dispo
	if(authLevel === "all")
	{
		return true;
	}
	else if(authLevel === "dev")
	{
		return Config.channels.dev.includes(message.channel.id);
	}
	else if(authLevel === "admin")
	{
		return Config.channels.admin.includes(message.channel.id);
	}
}




bot.login("MjY4MDQ1MTAxMjgzMDE2NzA2.C1YtxQ.BCCUB40uBvToGJQ6qfZ5fRiWwdo");
