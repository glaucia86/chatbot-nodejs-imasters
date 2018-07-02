/**
 *
 * Arquivo: bookingapp.js
 * Data: 02/07/2018
 * Descrição: Desenvolvimento de um Bot de pedido de pizza integrado com o LUIS.
 * Author: Glaucia Lemos
 *
 */

// Aqui estou carregando os enviroments que estão vindo do
// arquivo 'env':
require('dotenv-extended').load({
    path: '../.env'
});

const builder = require('botbuilder');
const restify = require('restify');

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('%s Aplicação executando na porta %s', server.name, server.url);
});

//===> Configuração do Bot:
let connector = new builder.ChatConnector({
    appId: "",
    appPassword: ""
});

//===> Configuração LUIS:
let recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
let intents = new builder.IntentDialog({ recognizers: [recognizer] });

let bot = new builder.UniversalBot(connector);
