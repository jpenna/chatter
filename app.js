const Botmaster = require('botmaster');

const botmaster = new Botmaster();

const MessengerBot = require('botmaster-messenger');
// you can also use: import MessengerBot from 'botmaster-messenger' if  using ES6 modules via Babel

const messengerSettings = {
  credentials: {
    verifyToken: 'verifytoken',
    pageToken: 'EAAPB3kCcqVYBANnjZBv4fcwepxZCs9WrsqefDjPZBAkjpCpMr7c9mk7s3PVKP408jtelsh6B1WyS9HErHYrNwIO5QP2sVdKpBCSCrPnDU7l4sZCi1KcDTFDfG6JvMUT9J9GOkjxbegt616r6YfniZAtk2mhrcnGepIb1ZA5LJ6AAZDZD',
    fbAppSecret: 'bab0286c448ea1c599344f84b5f98f13',
  },
  webhookEndpoint: 'msg123', // botmaster will mount this webhook on https://Your_Domain_Name/messenger/webhook1234
};


const messengerBot = new MessengerBot(messengerSettings);
botmaster.addBot(messengerBot);

botmaster.use({
  type: 'incoming',
  name: 'my-incoming-middleware1',
  controller: (bot, update) => {
    return bot.reply(update, 'Right back at you!');
  }
});
