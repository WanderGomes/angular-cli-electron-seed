# angular-cli-electron-seed

Projeto criado utilizando:
- [Angular CLI](https://github.com/angular/angular-cli) versão 1.7.2
- [Electron](https://electronjs.org/) versão 1.8.2

## Pré-requisitos

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Angular CLI](https://github.com/angular/angular-cli)

## Iniciando aplicação Electron com auto-reload em modo de desenvolvimento

Abra o terminal e execute o comando `npm start`

## Gerando pacote

Para gerar executável Electron para todas as plataformas, execute o comando:

```bash
npm run package:all
```

Para gerar um executável para uma plataforma específica, utilize os seguintes comandos:

```bash
# Windows
npm run package:win

# Linux
npm run package:linux

# Mac
npm run package:osx
```

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
