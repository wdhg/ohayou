require('dotenv').config();
const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const bot = new Discord.Client();

const debug = false;
const botID = '714555962840842373';
const channel = 'wake-up';
const targetHour = 7;
const timezone = 1; // BST

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
  const hour = date.getHours() + timezone;
  console.log("[+] MESSAGE FROM " + msg.author.username + " AT HOUR " + hour + " CONTENTS: " + msg.content);
  if (debug || hour == targetHour) {
    msg.reply("CONGRATS ON WAKING UP AT " + targetHour + " " + msg.author.username + "!");
    sendChonker(msg);
  }
});

console.log("SERVER STARTED. AWAITING MESSAGES")
