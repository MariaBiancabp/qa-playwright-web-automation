# QA Playwright Web Automation

Projeto prático de **automação de testes web** desenvolvido com **Playwright + JavaScript** utilizando o site **SauceDemo**.

O objetivo é demonstrar a criação e execução de testes end-to-end, organização dos cenários em suítes e validação de comportamentos da aplicação por meio de ações e assertions automatizadas.

## Tecnologias utilizadas

- Playwright
- JavaScript
- Node.js / npm
- Visual Studio Code
- Git e GitHub
- SauceDemo

## Suítes e cenários

### Login — 5 testes

- login com usuário válido;
- login com usuário inválido;
- login com usuário bloqueado;
- login sem preencher usuário;
- login sem preencher senha.

### Carrinho — 3 testes

- adicionar produto ao carrinho;
- validar o produto adicionado;
- remover produto do carrinho.

### Logout — 1 teste

- realizar logout com sucesso e validar o retorno à tela de login.

**Total atual: 9 testes automatizados.**

## O que é validado

Os testes utilizam recursos do Playwright como:

- `page.goto()` para acessar a aplicação;
- `locator()` para localizar elementos;
- `fill()` para preencher campos;
- `click()` para executar ações;
- `expect()` para validar o comportamento esperado;
- `test.describe()` para organizar os cenários em suítes.

As validações incluem URL, textos, mensagens de erro, presença de elementos e quantidade de itens no carrinho.

## Estrutura do projeto

```text
qa-playwright-web-automation/
├── tests/
│   ├── login.spec.js
│   ├── carrinho.spec.js
│   └── logout.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Como executar

Após clonar o repositório:

```bash
npm install
npx playwright install
```

Para executar os testes no Chromium:

```bash
npm run test:chromium
```

Para acompanhar a automação com o navegador aberto:

```bash
npm run test:headed
```

Para abrir o último relatório HTML:

```bash
npm run report
```

## Observação sobre navegadores

O projeto foi configurado pelo Playwright para Chromium, Firefox e WebKit. Durante o desenvolvimento deste portfólio, os cenários foram validados principalmente no **Chromium**.

## Objetivo do projeto

Este projeto faz parte do meu portfólio de estudos em **Quality Assurance** e representa a evolução dos testes manuais para a automação web, aplicando conceitos de cenários positivos e negativos, localização de elementos e validações automatizadas.
