# Série artigos: Desenvolvendo Bots com Microsoft Bot Framework & Node.Js by Glaucia Lemos

<p align="center">
  <img src="https://i.imgur.com/pA6SRQ6.gif"/>  
</p>

Repositório responsável pelos códigos de exemplo desenvolvidos no artigo do iMasters sobre desenvolvimento de ChatBots com Node.Js & Microsoft Bot Framework.

# Recursos Utilizados no Desenvolvimento: :rocket:

Para realizar as demos dessa série, se faz necessário instalar os seguintes programas:

* Visual Studio Code - [DOWNLOAD AQUI](https://code.visualstudio.com/)
* Node.JS - [DOWNLOAD AQUI](https://nodejs.org/en/)
* Microsoft Bot Framework Emulator - [DOWNLOAD AQUI](https://github.com/Microsoft/BotFramework-Emulator/releases
)
* Instalar a versão Python 2.x - [DOWNLOAD AQUI](https://www.python.org/downloads/)
* Instalar globalmente o node-gyp - [DOCUMENTAÇÃO PARA INSTALAÇÃO DE MANEIRA CORRETA AQUI](https://github.com/nodejs/node-gyp)

* Cadastro no site LUIS: https://www.luis.ai/
* Cadastro no site Azure: https://azure.microsoft.com/pt-br/services/bot-service/

OBS.: Quando seguir o passo da instalação do **node-gyp** é de suma importância que façam o seguinte:

**Passo 1:** criar manualmente o arquivo **binding.gyp** dentro do diretório do node_modules do appData, conforme o exemplo abaixo:

```

> C:\users\UserName\appdata\roaming\npm\node_modules\node-gyp

```

**Passo 2:** incluir no arquivo **binding.gyp** o seguinte bloco de código e salve:

```

{
    "targets": [{
    "target_name": "binding",
    "sources": [ "build/Release/binding.node" ]
    }]
}

```

**Passo 3:** feito isso, agore execute os seguintes comandos abaixo, dentro do mesmo diretório do appData:

```

> node-gyp configure

```

```

> node-gyp configure --msvs_version=2015

```

```

> node-gyp build

```

Seguindo todos esses passos, vocês estará para pronta para instalar as depedências do projeto na pasta do projeto! ;)


## Série de Vídeo Aulas sobre: ChatBots com Node.Js + Microsoft Bot Framework:

* **Série de Vídeos: Hands On: Bots + Node.Js + Microsoft Bot Framework:**: [AQUI](https://bit.ly/2K8mVp7)

## Dúvidas?! :triangular_flag_on_post:

Se tiverem alguma dúvida referente ao código feito ou para configurar o ambiente bastam criar uma Issue aqui no GitHub que estarei respondendo a vocês!! :heart: :heart: :heart: :blush:

## Contato - Glaucia Lemos: :stuck_out_tongue_winking_eye: :stuck_out_tongue_closed_eyes:

Caso queiram entrar em contato comigo, sintam-se a vontade em me adicionar em alguns dos canais abaixo:

* **GitHub:** github.com/glaucia86
* **Twitter:** @glaucia_lemos86
* **Linkedin:** glaucialemos
* **Site Técnico:** www.code4coders.com.br

<p align="center">
  <img src="https://i.imgur.com/dLSzYDT.gif"/>  
</p>
