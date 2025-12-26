# Cypress — Do Zero à Nuvem (Testes automatizados)

## Sistemas

Antes de começar, certifique-se de que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (`2.42.1` no momento da redação deste artigo)
- [Node.js](https://nodejs.org/en/) (`v20.13.1` no momento da redação deste artigo)
- npm (`10.8.1` no momento da redação deste artigo)

Descrição breve
----------------

Este repositório contém os testes e exemplos do curso "Cypress, do Zero à Nuvem". O projeto usa Cypress para testes end-to-end da aplicação de exemplo localizada em `src/` e inclui exemplos de execução em modo GUI e headless, além de configurações para viewport mobile.

Pré-requisitos
--------------

- Node.js (recomenda-se LTS) e `npm`
- Git (para clonar o repositório)
- Navegador compatível (Chrome/Chromium) — Cypress também usa Electron por padrão

Instalação
----------

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/wlsf82/cypress-do-zero-a-nuvem.git
cd cypress-do-zero-a-nuvem
npm install
```

Rodando os testes
-----------------

- Abrir a interface interativa do Cypress:

```bash
npm run cy:open
```

- Abrir a interface interativa em viewport mobile:

```bash
npm run cy:open:mobile
```

- Executar todos os testes em modo headless (CI/local):

```bash
npm run test
```

- Executar testes em modo headless com viewport mobile:

```bash
npm run test:mobile
```

Executar um spec específico (exemplo):

```bash
npx cypress run --spec "cypress/e2e/privacyPolicy.cy.js"
```

Scripts disponíveis (conforme `package.json`)
------------------------------------------------

- `npm run cy:open` — abre a UI do Cypress
- `npm run cy:open:mobile` — abre a UI do Cypress com viewport mobile
- `npm run test` — executa os testes em modo headless
- `npm run test:mobile` — executa os testes em modo headless com viewport mobile

Estrutura do projeto
---------------------

- `cypress/` — testes E2E, fixtures, suporte e vídeos
- `src/` — aplicação de exemplo (páginas HTML, CSS, JS)
- `lessons/` — material do curso e notas das aulas
- `package.json` — scripts e dependências do projeto

Dicas e observações
--------------------

- O projeto já inclui `cypress` em `devDependencies` — após `npm install` o Cypress estará disponível localmente.
- Para gravar vídeos ou screenshots consulte as configurações em `cypress.config.js`.
- Em CI (GitHub Actions, etc.) use `npm run test` para execução headless.


___

