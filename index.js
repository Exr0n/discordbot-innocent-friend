const Discord = require('discord.js');
const client = new Discord.Client();

const paths = {anime_gorl: './resources/anime_gorl.jpg', shrekk: './resources/shrekk.gif'};

client.on('ready', () => {
	console.log(`Bot logged in as ${client.user.tag} at ${Date()}!`);
	client.user.setActivity(`w/ some cat6e`).catch(console.error);
});

client.on('message', (msg) => {
	if (msg.author.bot) return;
	
	if (msg.content.trim().toLowerCase().includes('epic gamer')) {
		if (Math.random()*1000 < 1) {
			msg.channel.send('UwU', { files: [paths.anime_gorl] }).catch(console.error);
		} else {
			msg.channel.send('', { files: [paths.shrekk] }).catch(console.error);
		}
	}
});

client.login(require('./secrets.json').token);
