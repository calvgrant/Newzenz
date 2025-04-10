import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { loadCommands } from './utils/loadCommands';
import { loadEvents } from './utils/loadEvents';
import mongoose from 'mongoose';
import 'dotenv/config';

console.log('[BOT] Launching...');
console.log('[ENV] TOKEN:', process.env.TOKEN ? 'Loaded' : 'Missing');
console.log('[ENV] MONGO_URI:', process.env.MONGO_URI ? 'Loaded' : 'Missing');

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

    console.log('[DISCORD] Logging in...');
    await client.login(process.env.TOKEN);
    console.log('[DISCORD] Logged in!');
} catch (err) {
  console.error('[ERROR]', err);
  console.error('[ERROR STACK]', (err as any).stack);
}
})();