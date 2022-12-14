const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('test').setDescription('test').addStringOption(option => option.setName('prompt').setDescription('prompt')),
	new SlashCommandBuilder().setName('test2').setDescription('test2').addStringOption(option => option.setName('prompt').setDescription('prompt')),
	new SlashCommandBuilder().setName('ls').setDescription('ls')

]
	
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
