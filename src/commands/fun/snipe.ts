import {
  SlashCommandBuilder,
  ChatInputCommandInteraction
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('snipe')
  .setDescription('Melihat pesan terakhir yang dihapus (sementara placeholder)');

export async function execute(interaction: ChatInputCommandInteraction) {
  await interaction.reply('Fitur snipe belum tersedia di versi ini.');
}
