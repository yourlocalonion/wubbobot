const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pfpmoji')
		.setDescription('Turns the specified user\'s avatar as an emoji.')
        .addUserOption(option => 
            option
                .setName('user')
                .setDescription('the user to turn into an emoji')
                .setRequired(true))
        .addBooleanOption(option =>
            option
                .setName('automated-tag')
                .setDescription('adds "_automated" to the end of the emoji name'))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
	async execute(interaction) {
        let user = interaction.options.getUser('user')
        let addtag = interaction.options.getBoolean('automated-tag') ?? false
        let avatar = user.avatarURL()
        let guild = interaction.guild
        let emojiname

        console.log(avatar)

        if (addtag) {
            emojiname = `${user.username}_automated`
        } else {
            emojiname = user.username
        }
        guild.emojis.create({ attachment: avatar, name: emojiname })
            .then(emoji => {
                let returnembed = new EmbedBuilder()
                    .setColor('#bf42f5')
                    .setTitle('PFPMoji | Wubbobot')
                    .setDescription(`Created emoji: <:${emoji.name}:${emoji.id}>`)
                    .setFooter({
                        text: `user: ${user.username} | created by: ${interaction.user.username}`, 
                        iconURL: interaction.user.displayAvatarURL()
                    })
                interaction.channel.send({ embeds:[returnembed] })
            })
            .catch(console.error)
		await interaction.reply(`Created emoji with name: ${emojiname}.`);
	},
};