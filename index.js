require('dotenv').config();
const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const bot = new Discord.Client();

const debug = false;
const botID = '714555962840842373';
const channel = 'wake-up';

const sendChonker = (msg) => {
  randomPuppy('chonkers').then(url => {
    msg.reply(url);
  });
}

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('message', msg => {
  if (msg.channel.name != channel || msg.author.id == botID) {
    return;
  }
  const date = new Date(msg.createdTimestamp);
  const hour = date.getHours();
  if (debug || 7 <= hour && hour < 8) {
    msg.reply("CONGRATS ON WAKING UP BETWEEN 7 AND 8 AM " + msg.author.username);
    sendChonker(msg);
  }
});
