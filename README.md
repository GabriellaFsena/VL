# 🥗 Projeto Vida Leve - Automação de Testes com Cypress

Este repositório contém a automação de testes E2E do sistema **Vida Leve**, utilizando o framework [Cypress](https://www.cypress.io/). O sistema simula uma jornada completa de um(a) usuário(a) que busca melhorar seus hábitos de saúde através de planos nutricionais personalizados.

---

## 🔧 Tecnologias Utilizadas

- [Cypress](https://docs.cypress.io/)
- JavaScript
- Node.js
- VSCode

---

## 🧪 Escopo da Automação

A automação foi feita por **etapas**, simulando a jornada real de um(a) usuário(a) no sistema:

### ✅ 1. Cadastro
- Preenchimento completo do formulário de cadastro
- Validação de campos obrigatórios e mensagens de erro
- Verificação de sucesso no envio

### ✅ 2. Login
- Autenticação com credenciais válidas
- Validação de mensagens de erro para credenciais inválidas

### ✅ 3. Continuação do Cadastro
- Atualização de dados complementares (nome, telefone, gênero, data de nascimento e altura)
- Verificação de persistência dos dados após o envio

### ✅ 4. Dados Nutricionais
- Preenchimento de peso atual, idade, e nível de atividade física
- Validação de campos e faixa de valores aceitáveis

### ✅ 5. Escolha de Plano
- Escolha entre diferentes planos de execução nutricional
- Verificação do plano selecionado e mensagens de confirmação

### ✅ 6. Alteração de Plano
- Troca de plano com nova recomendação
- Validação da atualização e feedback visual

---

## ▶️ Como Executar os Testes

1. Clone este repositório:
```bash
git clone https://github.com/GabriellaFsena/VL.git
cd VL

1- Instale as dependências:
npm install
npx cypress open


2 acesse a API
Aguarde a API "acordar" 🌐
A API usada nos testes está hospedada no Render, que pode hibernar após inatividade. Para garantir que ela esteja disponível antes dos testes rodarem, usamos a lib wait-on.

3. Execute os testes
Rodar testes em modo headless (linha de comando)
npm run test:open
Feito com 💚 por Gabriella Freitas

