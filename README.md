# Automação E2E EBAC Store

Repositório: github.com/adeliasb/desafio-cypress-QA

Este projeto contém a automação de testes end-to-end do e-commerce EBAC Store utilizando Cypress.io v10+, JavaScript e BDD com Cucumber/Gherkin. A estrutura adotada favorece organização, reutilização de código e manutenção simples.

Foram usados: Cypress v10+, JavaScript, Hooks (before e after), Custom Commands (Cypress.Commands.add) e BDD com cucumber.

## Como instalar as dependências

Pré requisitos: Node instalado.

Para instalar as dependências do projeto:

npm install

## Como executar os testes

Executar no navegador interativo:

npm run cy:open

Executar todos os testes em modo headless:

npm test

Executar em um navegador específico:

npx cypress run --browser chrome

## Estrutura do projeto

cypress/
e2e/
features/
login.feature
product.feature
cart.feature
checkout.feature

    step_definitions/
        login.steps.js
        product.steps.js
        cart.steps.js
        checkout.steps.js

fixtures/
users.json

pages/
login.page.js
product.page.js
cart.page.js
checkout.page.js

support/
commands.js
e2e.js

cypress.config.js
package.json
README.md

## Funcionalidades automatizadas e justificativa

Foram automatizados quatro fluxos principais: login, produto, carrinho e checkout. Dentre eles, o checkout é o mais reaproveitável. Ele aparece em diversos cenários de compra, validações de pagamento, fluxos de cupons, variações de produto e confirmações finais. Cada teste de compra inevitavelmente passa por ele, por isso sua automação torna o conjunto mais eficiente.

## Cenários automatizados

### Login

Valida acesso com credenciais válidas.

### Produto

Seleciona um item, define tamanho e cor e adiciona ao carrinho.

### Carrinho

Valida valores de subtotal e total e avança para o checkout.

### Checkout

Preenche os dados de faturamento usando fixture, valida resumo do pedido, método de pagamento, termos, finaliza a compra e confirma os detalhes exibidos na página final.

Esse conjunto cobre o fluxo completo de compra, garantindo uma base sólida para expansões futuras.
