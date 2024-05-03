const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, embedColor } = require('./config.json');

const client = new Discord.Client({
  intents: 32767
});

let autotaxChannels = ['1235291696451944539', 'channel_id_2'];

client.on('messageCreate', message => {
  if (message.channel.type === 'dm' || message.author.bot) return;

  if (autotaxChannels.includes(message.channel.id) || message.content.startsWith(prefix + 'tax')) {
    let args;
    if (message.content.startsWith(prefix + 'tax')) {
      args = message.content.split(' ').slice(1).join(' ');
    } else {
      args = message.content;
    }

    if (!args) return message.reply('> **يرجى كتابة الرقم**');

    if (args.endsWith('m')) args = args.replace(/m/gi, '') * 1000000;
    else if (args.endsWith('k')) args = args.replace(/k/gi, '') * 1000;
    else if (args.endsWith('K')) args = args.replace(/K/gi, '') * 1000;
    else if (args.endsWith('M')) args = args.replace(/M/gi, '') * 1000000;
    else if (args.endsWith('مليون')) args = args.replace(/مليون/gi, '') * 1000000;
    else if (args.endsWith('الف')) args = args.replace(/الف/gi, '') * 1000;
    else if (args.endsWith('ألف')) args = args.replace(/ألف/gi, '') * 1000;
    else if (args.endsWith('ك')) args = args.replace(/ك/gi, '') * 1000;
    else if (args.endsWith('م')) args = args.replace(/م/gi, '') * 1000000;
    else if (args.endsWith('آلاف')) args = args.replace(/آلاف/gi, '') * 1000;
    else if (args.endsWith('ألاف')) args = args.replace(/ألاف/gi, '') * 1000;
    else if (args.endsWith('الاف')) args = args.replace(/الاف/gi, '') * 1000;
    else if (args.endsWith('ملايين')) args = args.replace(/ملايين/gi, '') * 1000000;

    if (!args) return message.reply('> **يرجى كتابة الرقم صحيح**');

    let args2 = parseInt(args);
    if (args2 == 1) return message.reply(`> **يرجى كتابة رقم أكبر من \`1\`** ⚠️`);

    let tax = Math.floor(args2 * (20) / (19) + (1));

    let embed = new Discord.MessageEmbed()
      .setColor(embedColor)
      .addFields(
        { name: 'السعر بدون ضريبة:', value: `\`${args}\`` },
        { name: 'السعر مع الضريبة:', value: `\`${tax}\`` },
        { name: 'نسبة السيرفر (20%):', value: `\`${Math.floor(args * 0.2)}\`` }
      )
      .setTimestamp();

    message.reply({ embeds: [embed] }).then(() => {
      message.channel.send(`hhttps://media.discordapp.net/attachments/1235292332186796092/1235962267238142082/standard.gif?ex=6636470f&is=6634f58f&hm=a74c61d2155a04a189d464aa7bf6c14650ae2aad359c1eea96bb9c7ec141a80f&`).catch((err) => {
        console.log(err.message);
      });
    }).catch((err) => {
      console.log(err.message);
    });
  }
});

client.on('ready', () => {
  console.log(`${client.user.tag} is online`);
  client.user.setActivity('Voila.', { type: 'STREAMING', url: 'https://www.twitch.tv/twitchlink1' });
  console.log('Developed By Saleh Elnaggar');
});

client.login(MTIzNjA2ODM1MTQ0OTc2Mzg5MQ.GkQ74e.et7RBJ4RpmxmbY-qD7P4658W8uJSwcNYJ9nu6s
);
