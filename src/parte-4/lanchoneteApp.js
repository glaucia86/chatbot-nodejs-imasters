/**
 *
 * Arquivo: lanchoneteApp.js
 * Data: 02/07/2018
 * Descrição: Desenvolvimento de um Bot de pedido de lanche integrado com o LUIS.
 * Author: Glaucia Lemos
 *
 */

// Aqui estou carregando os enviroments que estão vindo do
// arquivo 'env':
require('dotenv-extended').load({
    path: '../../.env'
});

const moment = require("moment");
const builder = require("botbuilder");
const restify = require("restify");

const server = restify.createServer();

//===> Configuração do Bot:
let connector = new builder.ChatConnector({
    appId: "",
    appPassword: ""
});

let bot = new builder.UniversalBot(connector);

//===> Configuração LUIS:
let recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
let intents = new builder.IntentDialog({ recognizers: [recognizer] });

//===> Configuração dos 'Intents'(Intenções):

//Endpoint - Saudar:
intents.matches("Saudar", (session, results) => {
    session.send("Oi! Tudo bem? Em que eu posso ajudar?");
});

//Endpoint - Pedir:
intents.matches("Pedir", [
    (session, args, next) => {
        var lanches = [
            "Tapioca",
            "Pizza",
            "Suco",
            "Batata Frita",
            "Hamburger",
            "X-Burger",
            "Sobremesa"
        ];
        let entityLanche = builder.EntityRecognizer.findEntity(args.entities, "Lanche");

        //Aqui estaremos verificando com o LUIS os melhores 'matches' para a solicitação
        //do pedido dos lanches através da Entidade: Lanche:
        if (entityLanche) {
            var match = builder.EntityRecognizer.findBestMatch(lanches, entityLanche.entity);
        }

        //Caso não encontre o que o usuário está solicitando:
        if (!match) {
            builder.Prompts.choice(session, "No momento só temos esses lanches disponíveis. Qual que você gostaria de pedir?", lanches);
        } else {
            next({ response: match });
        }
    },
    (session, results) => {
        //Aqui é para indicar em quanto tempo o pedido do lanche deverá ser entregue: em 30 minutos:
        if (results.response) {
            var time = moment().add(30, "m");

            session.dialogData.time = time.format("HH:mm");
            session.send("Pronto! Seu lanche **%s** chegará às **%s**.", results.response.entity, session.dialogData.time);
        } else {
            session.send("Sem problemas! Se não gostarem, podem pedir numa próxima vez! :D");
        }
    }
]);

//Endpoint - Cancelar:
intents.matches("Cancelar", (session, results) => {
    session.send("Pedido cancelado com sucesso! Muito Obrigada! Até a próxima!");
});

//Endpoint - Verificar:
intents.matches("Verificar", (session, results) => {
    session.send("Seu lanche chegará às **%s**", session.dialogData.time);
});

//Endpoint - Default:
let teste = intents.onDefault(
    builder.DialogAction.send("Desculpe! Mas, não entendi o que você quis pedir!")
);

bot.dialog("/", intents);

//Configuração do Servidor via Restify:
server.post("/api/messages", connector.listen());

server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log("Aplicação executando na porta %s", server.name, server.url);
});