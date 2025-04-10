import { Schema, model } from 'mongoose';

const AutoReplySchema = new Schema({
  guildId: { type: String, required: true },
  trigger: { type: String, required: true },
  response: { type: String, required: true },
  makeId: { type: String, required: true },
});

export const AutoReply = model('AutoReply', AutoReplySchema);
