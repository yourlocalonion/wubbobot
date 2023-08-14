const { SlashCommandBuilder } = require('discord.js');

let currentversion = "0.7.0"
let vernote = "Added the wubbo and unwubbo command."

module.exports = {
	currentversion,
	vernote,
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('Returns the current version with the version note.'),
	async execute(interaction) {
		await interaction.reply(`Wubbobot version ${currentversion}, ${vernote}`);
	},
};
