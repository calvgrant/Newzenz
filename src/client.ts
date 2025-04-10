import { Client as DiscordClient, GatewayIntentBits, Partials, Collection } from 'discord.js';
import { loadEvents } from './utils/loadEvents';
import { loadCommands } from './utils/loadCommands';

export class Client extends DiscordClient {
  public commands = new Collection();

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ],
      partials: [Partials.Channel]
    });
  }

  async start() {
    await loadEvents(this);
    await loadCommands(this);
    this.login(process.env.TOKEN);
  }
}
