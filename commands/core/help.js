const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { currentversion } = require('../misc/update');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Help about commands in WubboBot.'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#bf42f5')
            .setTitle('Help | Wubbobot')
            .addFields(
                { name: 'help', value: 'brings up this embed.' },
                { name: 'test', value: 'test command to check if bot is online.' },
                { name: 'version', value: 'sends the current version of the bot with the version note.' },
                { name: 'pfpmoji', value: 'turns {user} into an emoji.' },
                { name: 'rps', value: 'classic rock paper scissors.' },
                { name: 'wubbo', value: 'turns {user} into a wubbo.' },
                { name: 'unwubbo', value: 'turns {user} into normal.' }
            )
            .setFooter({ text: `Wubbot Version ${currentversionversion}` })
		await interaction.channel.send({ embeds:[embed] });
	},
};
