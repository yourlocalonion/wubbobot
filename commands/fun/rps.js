const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Classic rock paper scissors')
        .addStringOption(option =>
            option
                .setName('your-choice')
                .setDescription('rock paper or scissors')
                .setRequired(true)
                .addChoices(
                    { name: 'rock', value: 'rock' },
                    { name: 'paper', value: 'paper' },
                    { name: 'scissors', value: 'scissors' },
                )),
	async execute(interaction) {
        let responses = ["I choose Rock!,", "I choose Paper!,", "I choose Scissors!,"]
        let random = Math.floor(Math.random() * responses.length)
        let userchoice = interaction.options.getString('your-choice')

        let message = `uninitialized`

        switch (userchoice) {
            case 'rock':
                switch (responses[random]) {
                    case responses[0]: // rock
                        message = `${responses[random]} You chose ${userchoice}. Its a tie!`
                        break
                    case responses[1]: // paper
                        message = `${responses[random]} You chose ${userchoice}. I win!`
                        break
                    case responses[2]: // scissors
                        message = `${responses[random]} You chose ${userchoice}. I lost!`
                        break
                }
                break;
            case 'paper':
                switch (responses[random]) {
                    case responses[0]: // rock
                        message = `${responses[random]} You chose ${userchoice}. I lost!`
                        break
                    case responses[1]: // paper
                        message = `${responses[random]} You chose ${userchoice}. Its a tie!`
                        break
                    case responses[2]: // scissors
                        message = `${responses[random]} You chose ${userchoice}. I win!`
                        break
                }
                break;
            case 'scissors':
                switch (responses[random]) {
                    case responses[0]: // rock
                        message = `${responses[random]} You chose ${userchoice}. I win!`
                        break
                    case responses[1]: // paper
                        message = `${responses[random]} You chose ${userchoice}. I lost!`
                        break
                    case responses[2]: // scissors
                        message = `${responses[random]} You chose ${userchoice}. Its a tie!`
                        break
                }
                break;
        }

		await interaction.reply(message);
	},
};