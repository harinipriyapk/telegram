// Import Telegram API package
const TelegramBot = require('node-telegram-bot-api');

// Replace this with your actual bot token from @BotFather
const token = '8441975718:AAEy1l0j7j5-ehBA_JRtY86I1UEkxvjgnpc';

// Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Handle the "/start" command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;

  // Send a welcome message
  bot.sendMessage(chatId, `Hello ${firstName || 'harini'}! 👋 Welcome to my Telegram bot built with Node.js.`);
});

// Optional: Handle the "/help" command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Here are the available commands:\n/start - Welcome message\n/help - Help menu");
});

// Log any message for debugging (optional)
bot.on('message', (msg) => {
  console.log(`Received message from ${msg.from.username || msg.from.first_name}: ${msg.text}`);
});
