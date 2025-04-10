import { Client } from 'discord.js';  
import { readdirSync } from 'fs';  
import { join } from 'path';  
import { REST, Routes } from 'discord.js';  
import { BOT_CONFIG } from '../config';  
import 'dotenv/config';  

export async function loadCommands(client: Client) {  
  const commands: any[] = [];  
  const commandsPath = join(__dirname, '..', 'commands');  
  const commandFolders = readdirSync(commandsPath);  
  
  for (const folder of commandFolders) {  
    const folderPath = join(commandsPath, folder);  
    const commandFiles = readdirSync(folderPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));  
  
    for (const file of commandFiles) {  
      // Use dynamic import with await and ensure it is ESM compliant
      const command = await import(join(folderPath, file));  
      if (command.data && command.execute) {  
        client.commands.set(command.data.name, command);  
        commands.push(command.data.toJSON());  
      }
    }  
  }  
  
  const rest = new REST().setToken(process.env.TOKEN!);  
  try {  
    console.log('[COMMAND] Registering slash commands...');  
    await rest.put(  
      Routes.applicationGuildCommands(process.env.CLIENT_ID!, BOT_CONFIG.guildId),  
      { body: commands }  
    );  
    console.log('[COMMAND] Slash commands registered!');  
  } catch (error) {  
    console.error(error);  
  }  
}