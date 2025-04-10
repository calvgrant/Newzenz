import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  User
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ship')
  .setDescription('Ship dua orang!')
  .addUserOption(opt =>
    opt.setName('user1').setDescription('Orang pertama').setRequired(true))
  .addUserOption(opt =>
    opt.setName('user2').setDescription('Orang kedua').setRequired(true));

export async function execute(interaction: ChatInputCommandInteraction) {
  const user1 = interaction.options.getUser('user1', true);
  const user2 = interaction.options.getUser('user2', true);
  const percentage = Math.floor(Math.random() * 101);

  await interaction.reply(`${user1.username} ❤️ ${user2.username} = ${percentage}% cocok!`);
}
