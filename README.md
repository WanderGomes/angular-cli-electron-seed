# angular-cli-electron-seed

Projeto criado utilizando:
- [Angular CLI](https://github.com/angular/angular-cli) versão 6.0.5
- [Electron](https://electronjs.org/) versão 2.0.2

## Pré-requisitos

- [Node](https://nodejs.org/en/) versão 6+

## Comandos para rodar o projeto

|Comando|Descrição|
|---|---|
|`npm start`| Executa a aplicação em modo desenvolvedor com livereload |
|`npm run ng:serve`| Executa a aplicação no navegador |

## Comandos para gerar pacote

|Comando|Descrição|
|---|---|
|`npm run build`| Gera o pacote na pasta /dist |
|`npm run build:prod`| Gera o pacote utilizando o Angular aot |
|`npm run electron:local`| Gera o pacote e inicia o Electron |
|`npm run electron:linux`| Gera o pacote e cria uma aplicação para o Linux |
|`npm run electron:windows`| Funciona no windows somente, gera o pacote cria uma aplicação compatível com 32/64 bits |
|`npm run electron:mac`|  Funciona somente no MacOS, gera o pacote e criar um arquivo `.app` para rodar no Mac |

## Code scaffolding

Utilize os comandos do Angular Cli para geração de componentes `ng generate component <nome-do-componente>`.

Outros comandos: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Executando testes unitários

Execute o comando `ng test` para executar testes unitários utilizando [Karma](https://karma-runner.github.io).

## Executando testes funcionais

Execute o comando `ng e2e` para executar testes funcionais utilizando [Protractor](http://www.protractortest.org/).

## Dúvidas

Para dúvidas do Angular, execute o comando `ng help` ou acesse o guia oficial [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Para dúvidas do Electron, acesso a documentação oficial [Documentação Electron](https://electronjs.org/docs)
