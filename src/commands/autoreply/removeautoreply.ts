import { SlashCommandBuilder, ChatInputCommandInteraction, SlashCommandStringOption } from 'discord.js';
import { AutoReply } from '../../models/AutoReply';

export const data = new SlashCommandBuilder()
  .setName('removeautoreply')
  .setDescription('Hapus auto-reply berdasarkan trigger')
  .addStringOption((opt: SlashCommandStringOption) =>
    opt.setName('trigger')
      .setDescription('Trigger yang ingin dihapus')
      .setRequired(true)
  );

export async function execute(interaction: ChatInputCommandInteraction) {
  const trigger = interaction.options.getString('trigger', true).toLowerCase();

  const deleted = await AutoReply.findOneAndDelete({
    guildId: interaction.guildId,
    trigger,
  });

  if (deleted) {
    await interaction.reply(`Auto-reply untuk \`${trigger}\` telah dihapus.`);
  } else {
    await interaction.reply(`Tidak ditemukan auto-reply untuk \`${trigger}\`.`);
  }
}
