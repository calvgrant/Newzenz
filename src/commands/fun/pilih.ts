import {
  SlashCommandBuilder,
  ChatInputCommandInteraction
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('pilih')
  .setDescription('Pilih antara dua opsi')
  .addStringOption(option =>
    option.setName('opsi')
      .setDescription('Contoh: makan / tidur')
      .setRequired(true)
  );

export async function execute(interaction: ChatInputCommandInteraction) {
  const input = interaction.options.getString('opsi', true);
  const choices = input.split('/').map(s => s.trim());
  if (choices.length !== 2) {
    await interaction.reply('Format harus: pilihan1 / pilihan2');
    return;
  }

  const chosen = choices[Math.floor(Math.random() * choices.length)];
  await interaction.reply(`Aku pilih: **${chosen}**`);
}
