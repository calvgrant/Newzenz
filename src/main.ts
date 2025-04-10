import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { loadCommands } from './utils/loadCommands';
import { loadEvents } from './utils/loadEvents';
import mongoose from 'mongoose';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

(async () => {
  try {
    console.log('[MONGODB] Connecting...');
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('[MONGODB] Connected.');

    await loadCommands(client);
    await loadEvents(client);

    client.login(process.env.TOKEN);
  } catch (err) {
    console.error('[ERROR]', err);
  }
})();
