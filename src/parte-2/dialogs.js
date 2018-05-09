/**
 * 
 * Arquivo: dialogs.js
 * Data: 09/05/2018
 * Descrição: Desenvolvimento de um Bot para demonstrar o uso de dialogs num ChatBot.
 * Author: Glaucia Lemos
 *
 */

const restify = require("restify");
const builder = require("botbuilder");

// Configuração do Server via Restify:
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log("%s Aplicação executando na porta %s", server.name, server.url);
});

// Criação do chat connector para comunicar com o serviço do Bot Framework:
const connector = new builder.ChatConnector({
  appId: "",
  appPassword: ""
});

// Endpoint para executar as mensagens para os usuários:
server.post("api/messages", connector.listen());

const bot = new builder.UniversalBot(connector);

// Bloco de Diálogos:
bot.dialog('/', [
    session => {
        builder.Prompts.text(session, "Oi! Tudo bem? Como você se chama?");
    },

    (session, results) => {
        let nome = results.response;
        session.send(`Oi! ${nome}`);
    }
]);

// Novo Bloco de Diálogos:
bot.dialog('/perguntarPratoPredileto', [
    session => {
        builder.Prompts.text(session, "Qual é o seu prato predileto?");
    },

    (session, results) => {
        let pratoPredileto = results.response;
        builder.Prompts.text(`Puxa que legal! Então você gosta de comer **${pratoPredileto}**!`);
    }
]);

bot.dialog('/lugarPredileto', [
    session => {
        builder.Prompts.text(session, 'E qual é o seu lugar preferido?');
    },
    (session, results) => {
            let lugarPreferido = results.response;
            builder.Prompts.text(`Amamos o **${lugarPredileto}**! Realmente é simplesmente muito lindo!`)
    }
]);