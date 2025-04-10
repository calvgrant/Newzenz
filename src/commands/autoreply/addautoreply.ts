import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { AutoReply } from '../../models/AutoReply';

export const data = new SlashCommandBuilder()
  .setName('addautoreply')
  .setDescription('Tambahkan auto-reply ke server')
  .addStringOption(opt =>
    opt.setName('trigger')
      .setDescription('Kata atau kalimat pemicu')
      .setRequired(true)
  )
  .addStringOption(opt =>
    opt.setName('response')
      .setDescription('Respons yang akan dibalas')
      .setRequired(true)
  );

export async function execute(interaction: ChatInputCommandInteraction) {
  const trigger = interaction.options.getString('trigger', true).toLowerCase();
  const response = interaction.options.getString('response', true);

  await AutoReply.create({
    guildId: interaction.guildId,
    trigger,
    response,
    makeId: interaction.user.id
  });

  await interaction.reply(`Auto-reply untuk \`${trigger}\` berhasil ditambahkan!`);
}
