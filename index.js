const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// όταν κάποιος μπαίνει στο server
client.on('guildMemberAdd', member => {

  // ID του role που θα παίρνει
  const role = member.guild.roles.cache.get("1471461739026579588");

  if (role) {
    member.roles.add(role);
  }

  // channel για welcome message
  const channel = member.guild.channels.cache.get("1450458984606863535");

  if (channel) {
    channel.send(`👋 Welcome ${member} to the server!`);
  }

});

client.login(process.env.TOKEN);
