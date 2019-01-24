const request = require('request');
const utf8 = require('utf8');

// Telegram Settings
const tgToken = process.env['TELEGRAM_TOKEN'];
const tgChat = process.env['TELEGRAM_CHAT_ID'];

function sendMessage(text, silent=false) {
  if(tgToken && tgChat) {
    request(`https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgChat}&text=${utf8.encode(text)}&parse_mode=HTML&disable_notification=${silent}`, function (error, response, body) {
      if(error) {
        console.log('ERROR [telegram]:', error);
      }  
    });
  }
}

module.exports = {
  sendMessage
}