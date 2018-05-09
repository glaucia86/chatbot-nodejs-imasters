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
    
]);