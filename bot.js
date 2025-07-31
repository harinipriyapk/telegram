// Import the Telegram API package
const TelegramBot = require('node-telegram-bot-api');

// Replace this with your actual bot token from @BotFather
const token = '8335929176:AAG86e6LDfnwR0ZBqxYIKxyytS-6sXtuL4o';

// Create a bot with polling enabled
const bot = new TelegramBot(token, { polling: true });

// Command handlers map for scalability
const commandResponses = {
  '/start': (msg) => {
    const firstName = msg.from.first_name || 'Harini';
    return `Hello ${firstName}! 👋 Welcome to our upgraded Telegram bot. Ready to explore?`;
  },
  '/help': () => {
    return `🛠 Available commands:\n/start - Welcome message\n/help - Show this help menu\n/about - Know more about the bot`;
  },
  '/about': () => {
    return `🤖 This bot is powered by Node.js and the Telegram Bot API. Designed to be modular, extendable, and super friendly!`;
  }
};

// Listen for any command defined in the commandResponses map
bot.onText(/\/\w+/, (msg) => {
  const chatId = msg.chat.id;
  const command = msg.text.trim().toLowerCase();

  const response = commandResponses[command];
  if (response) {
    bot.sendMessage(chatId, response(msg));
  } else {
    bot.sendMessage(chatId, `⚠️ Unknown command: ${command}\nType /help to see what’s available.`);
  }
});

// Log all incoming messages (for debugging)
bot.on('message', (msg) => {
  console.log(`📩 Message received from ${msg.from.username || msg.from.first_name}: ${msg.text}`);
});
