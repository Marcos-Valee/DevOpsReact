# 🚀 Atividade de DevOps com React

![Screenshot da Aplicação](https://raw.githubusercontent.com/Marcos-Valee/WeatherApp/main/src/images/screenshot.png)

## 🎯 Objetivo

O objetivo desta aplicação é unir os conhecimentos de **DevOps** com os estudos de **React**, criando uma aplicação prática que integra desenvolvimento, testes automatizados e integração contínua.

## 🛠️ Funcionalidades

- 📋 Renderização de componentes React.
- ➕ Adição de usuários com informações como nome, apartamento e status de emprego.
- 🌐 Integração com uma API simulada para exibir dados de usuários.
- ✅ Testes unitários utilizando **Jest** e **Testing Library**.
- ⚙️ Automação de CI/CD configurada com **GitHub Actions**.

## 🧰 Tecnologias Utilizadas

- ⚛️ **React**: Biblioteca para construção de interfaces de usuário.
- ⚡ **Vite**: Ferramenta para desenvolvimento rápido de aplicações.
- 🧪 **Jest**: Framework de testes para JavaScript.
- 🛠️ **Testing Library**: Biblioteca para testes de componentes React.
- 🤖 **GitHub Actions**: Automação de CI/CD.

## 📦 Deploy Automatizado

A aplicação é automaticamente **buildada** e **implantada no GitHub Pages** sempre que há um push na branch `main`. O processo é gerenciado pelo GitHub Actions e segue os seguintes passos:

Este fluxo garante que a aplicação esteja sempre atualizada e disponível para acesso público.

## 🔄 Integração Contínua

A integração contínua é configurada para ser executada automaticamente em cada **push** ou **pull request** na branch `main`. O fluxo é gerenciado pelo GitHub Actions e realiza as seguintes tarefas:

### **1. Build e Testes**

- **Ambiente de Execução**: O workflow é executado em um ambiente `ubuntu-latest`.


🧪 Testes Automatizados 👇

Os testes foram desenvolvidos para garantir a funcionalidade e a estabilidade da aplicação. Eles cobrem os seguintes cenários:

1. **Renderização do Componente `Card`**:

   - Verifica se o componente é renderizado corretamente quando nenhuma informação é fornecida.

2. **Chamada à API**:

   - Garante que os dados retornados pela API sejam exibidos corretamente.

3. **Simulação de Erro na API**:

   - Testa o comportamento da aplicação quando a API falha.

4. **Atualização dos Inputs**:

   - Verifica se os valores digitados nos campos de entrada são refletidos corretamente.

5. **Limpeza dos Inputs**:
   - Garante que os campos de entrada sejam limpos após adicionar um novo usuário.

### **2. Notificações no Discord**

- **Objetivo**: Enviar notificações para um canal do Discord sempre que houver um commit.

Este fluxo garante que o código seja testado em diferentes versões do Node.js e que a equipe seja notificada sobre as alterações no repositório.
