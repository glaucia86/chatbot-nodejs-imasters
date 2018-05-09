/**
 * 
 * Arquivo: dialogs.js
 * Data: 09/05/2018
 * Descrição: Desenvolvimento de um Bot para demonstrar o uso de dialogs num ChatBot.
 * Author: Glaucia Lemos
 *
 */

var restify = require('restify');
var builder = require('botbuilder');

// Configuração do Server via Restify:
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s Aplicação está executando na porta %s', server.name, server.url);
});

// Criação do chat connector para comunicar com o serviço do Bot Framework:
var connector = new builder.ChatConnector({
    appId:'',
    appPassword: ''
});

//Endpoint para executar as mensagens para os usuários via Bot Emulator:
server.post("/api/messages", connector.listen());

const bot = new builder.UniversalBot(connector);

// Bloco de Dialogs:
bot.dialog("/", [
    session => {
      builder.Prompts.text(session, "Oi! Como você se chama?");
    },
  
    (session, results) => {
      let nome = results.response;
      session.send(`Oi! ${nome}`);
  
      session.beginDialog("/perguntarPratoPredileto");
    }
  ]);
  
  bot.dialog("/perguntarPratoPredileto", [
    session => {
      builder.Prompts.text(session, "Qual é o seu prato predileto?");
    },
  
    (session, results) => {
      let pratoPredileto = results.response;
      session.endDialog(`Puxa que legal! Então você gosta de comer **${pratoPredileto}**!`);
  
      session.beginDialog("/perguntarLugarPreferido");
    }
  ]);
  
  bot.dialog("/perguntarLugarPreferido", [
    session => {
      builder.Prompts.text(session, "Qual é o seu lugar preferido?");
    },
  
    (session, results) => {
      let lugar = results.response;
      session.endDialog(`Amamos **${lugar}**! É simplesmente um lugar muito bonito!`);
    }
]);