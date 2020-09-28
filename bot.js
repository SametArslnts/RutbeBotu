const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Sunucu Botlarından ${client.user.tag}! giriş yaptı ve artık aktif!`);
});
// Ünlem ile chate yazdırma
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rütbe') {
    msg.reply('evet onun için görevlendirildim!');
  }
  if (msg.content.toLowerCase() === 'youtube') {
    msg.reply('yakında ekleyeceğim!');
  }
// Ayarlar Prefix
  if (!msg.content.startWith(prefix)) {
    return;
  }
  if (msg.content.toLowerCase() === prefix + 'adam') {
    msg.reply('https://www.yotuube.com/c/sametarslantas')
  }

});

client.login('NzU5NzgxMDcxMjA5NDk2NTc2.X3CfQw.anWQTiDDLSuiOKSB0uRZoV52QvI');
