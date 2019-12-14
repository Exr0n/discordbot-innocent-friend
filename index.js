const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Bot logged in as ${client.user.tag} at ${Date()}!`);
	client.user.setActivity(`Playin w/ some cat6e`).catch(console.error);
});

client.on('message', (msg) => {
	if (msg.author.bot) return;
	
	if (msg.content.trim().toLowerCase().includes('epic gamer') {
		if (Math.random()*1000|0 < 1) {
			msg.channel.send('UwU', { files: [paths.anime_gorl] }).catch(console.error);
		} else {
			msg.channel.send('', { files: [paths.shrekk] }).catch(console.error);
		}
	}
}

client.login(require('./secrets.json').token);
