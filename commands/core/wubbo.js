const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wubbo')
		.setDescription('Makes someone a wubbo.')
        .addUserOption(option => 
            option
                .setName('user')
                .setDescription('the user to turn into a wubbo')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
	async execute(interaction) {
        let user = interaction.guild.members.cache.get(`${interaction.options.getUser('user').id}`)
        let role = interaction.guild.roles.cache.find(role => role.name === "Wubbos");
        if (!user.roles.cache.find(role => role.name === 'Wubbos')) {
            user.roles.add(role)
            await interaction.reply('Made this user a wubbo!')
        } else {
            await interaction.reply('This user is already a wubbo!')
        }   
	},
};
