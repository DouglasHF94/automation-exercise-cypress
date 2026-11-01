# Automation Exercise - Testes E2E com Cypress

Projeto de automação dos casos **1, 2, 3, 4, 5, 8, 9, 10, 15 e 16** da página oficial de cenários do Automation Exercise.

- Site: https://www.automationexercise.com/
- Casos de teste: https://www.automationexercise.com/test_cases
- Framework: Cypress
- Linguagem: JavaScript
- Execução local: modo interativo ou headless
- GitHub Actions: workflow com disparo exclusivamente manual (`workflow_dispatch`)

## 1. Casos implementados

| Caso | Cenário | Arquivo |
|---|---|---|
| TC01 | Registrar usuário e excluir conta | `authentication.cy.js` |
| TC02 | Login com e-mail e senha corretos | `authentication.cy.js` |
| TC03 | Login com credenciais incorretas | `authentication.cy.js` |
| TC04 | Logout | `authentication.cy.js` |
| TC05 | Cadastro com e-mail já existente | `authentication.cy.js` |
| TC08 | Listar produtos e validar detalhes | `products-and-subscription.cy.js` |
| TC09 | Pesquisar produto | `products-and-subscription.cy.js` |
| TC10 | Assinar newsletter na página inicial | `products-and-subscription.cy.js` |
| TC15 | Registrar antes do checkout e comprar | `orders.cy.js` |
| TC16 | Fazer login antes do checkout e comprar | `orders.cy.js` |

## 2. Requisitos

- Node.js 20 (recomendado) ou versão LTS compatível.
- npm (instalado junto com Node.js).
- Visual Studio Code.
- Google Chrome (para execução local no Chrome).

