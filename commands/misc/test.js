const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Did you know that the response is random?'),
	async execute(interaction) {
        let responses = ['Hi!', 'Hello!', 'Hiiii!', 'How are you?', 'You woke me up!', 'Listen here, I dont think you know who I am, I am the grand master of th-', "Wubbo Nation Rise Up!!!", "*yawn*", "Hi guys!", "Dont check the node_modules folder it is not worth it", "run.", "mmmh onions.. Wait what?", "Country roadssss Take me home!!!", "[onion] had to go through hell and back to find a hosting site!, metaphorically speaking ofcourse... unless?"]
        let random = Math.floor(Math.random() * responses.length)
		await interaction.reply(responses[random]);
	},
};