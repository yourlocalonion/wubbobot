const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unwubbo')
		.setDescription('Makes someone turn "normal".')
        .addUserOption(option => 
            option
                .setName('user')
                .setDescription('the user to turn "normal"')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
	async execute(interaction) {
        let user = interaction.guild.members.cache.get(`${interaction.options.getUser('user').id}`)
        let role = interaction.guild.roles.cache.find(role => role.name === "Wubbos");
        if (user.roles.cache.find(role => role.name === 'Wubbos')) {
            user.roles.remove(role)
            await interaction.reply('Made this user normal!')
        } else {
            await interaction.reply('This user is already normal!')
        }   
	},
};
