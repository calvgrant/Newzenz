import { Client, Message } from 'discord.js';
import { AutoReply } from '../models/AutoReply';

export const name = 'messageCreate';
export const once = false;

export async function execute(message: Message, client: Client) {
  if (message.author.bot || !message.guild) return;

  const data = await AutoReply.findOne({
    guildId: message.guild.id,
    trigger: message.content.toLowerCase()
  });

  if (data) {
    await message.reply(data.response);
  }
}
