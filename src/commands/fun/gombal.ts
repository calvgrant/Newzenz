import {
  SlashCommandBuilder,
  ChatInputCommandInteraction
} from 'discord.js';

const gombalan = [
  "Kamu tau nggak bedanya kamu sama bintang? Bintang di langit, kalau kamu di hati aku.",
  "Aku nggak pintar matematika, tapi aku tahu kamu + aku = kita.",
  "Kalo kamu jadi senja, aku rela jadi sore biar kita bisa ketemu.",
  "Kalau kamu tanya kenapa aku suka kamu, aku juga bingung. Tapi hatiku selalu nunjuk kamu."
];

export const data = new SlashCommandBuilder()
  .setName('gombal')
  .setDescription('Dapatkan gombalan romantis');

export async function execute(interaction: ChatInputCommandInteraction) {
  const random = gombalan[Math.floor(Math.random() * gombalan.length)];
  await interaction.reply(random);
}
