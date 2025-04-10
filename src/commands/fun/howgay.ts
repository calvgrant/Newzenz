import {
  SlashCommandBuilder,
  ChatInputCommandInteraction
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('howgay')
  .setDescription('Seberapa gay kamu?');

export async function execute(interaction: ChatInputCommandInteraction) {
  const percentage = Math.floor(Math.random() * 101);
  await interaction.reply(`Kamu ${percentage}% gay!`);
}
