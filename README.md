# Atividade Parcial (Projeto Aplicado a Multiplataformas – Etapa 2)

## 1. Título e descrição do projeto

### Nome do sistema

**Sustenta+**

### Breve descrição do propósito

O Sustenta+ é uma aplicação web desenvolvida para auxiliar no registro e gerenciamento de denúncias ambientais relacionadas ao descarte inadequado de resíduos sólidos em áreas urbanas. O sistema permite que cidadãos registrem ocorrências por meio de formulários estruturados e envio de imagens, armazenando as informações em um banco de dados para posterior análise.

As denúncias são disponibilizadas em um painel administrativo acessado por representantes do setor público, possibilitando a triagem, o acompanhamento e a tomada de decisões. A aplicação busca fortalecer a participação cidadã, otimizar a gestão pública e contribuir para práticas urbanas mais sustentáveis.

### Problema solucionado

O sistema busca solucionar a dificuldade enfrentada pelos cidadãos ao comunicar às autoridades situações de descarte irregular de lixo e falhas na coleta urbana. Muitas ocorrências deixam de ser registradas oficialmente, dificultando a adoção de medidas corretivas e contribuindo para a degradação do ambiente urbano.

---

## 2. Funcionalidades implementadas

### Principais funcionalidades

* Cadastro de denúncias ambientais por meio de formulário.
* Envio de imagens para comprovação da ocorrência.
* Armazenamento das informações em banco de dados.
* Painel administrativo para visualização das denúncias.
* Controle e acompanhamento das ocorrências registradas.
* Sistema de autenticação de usuários.

### Status de implementação

**Parcialmente concluído.**

---

## 3. Tecnologias utilizadas

### Linguagem de programação

* TypeScript

### Frontend

* React
* Tailwind CSS

### Backend

* Express.js
* Sequelize ORM

### Banco de dados

* MySQL

### Ferramentas de desenvolvimento

* Visual Studio Code
* Git
* Docker

---

## 4. Arquitetura do sistema

### Visão geral

A aplicação segue o modelo de arquitetura cliente-servidor. O frontend é responsável pela interface com o usuário, enquanto o backend realiza o processamento das informações, aplicação das regras de negócio e comunicação com o banco de dados.

### Componentes principais

#### Frontend

* Tela de autenticação.
* Formulário de denúncias.
* Upload de imagens.
* Painel de visualização de reportes.
* Componentes reutilizáveis para interface.

#### Backend

* Servidor Express.
* Controllers para tratamento das requisições.
* Models definidos com Sequelize.
* Sistema de autenticação.
* Integração com banco de dados MySQL.

### Integrações realizadas

#### Frontend

* Comunicação com a API através de requisições HTTP.

#### Backend

* Integração com banco de dados relacional utilizando Sequelize ORM.

---

## 5. Instruções de instalação e execução

### Pré-requisitos

* Node.js 18 ou superior
* MySQL 8 ou superior
* Yarn ou NPM

### Instalação do Frontend

```bash
cd frontend/web
npm install
```

ou

```bash
yarn install
```

### Instalação do Backend

```bash
cd backend
npm install
```

ou

```bash
yarn install
```

### Configuração do ambiente

Renomeie o arquivo:

```bash
.env.example
```

para:

```bash
.env
```

e configure as credenciais do banco de dados.

### Execução do Backend

```bash
npm run dev
```

### Execução do Frontend

```bash
npm run dev
```

### Acesso

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:3000/api
```

---

## 6. Acesso ao sistema

### Perfis de usuário

| Perfil    | Descrição                                                                        |
| --------- | -------------------------------------------------------------------------------- |
| Admin     | Responsável pela análise e gerenciamento das denúncias e solicitações de coleta. |
| User      | Responsável pelo cadastro de denúncias e solicitações.                           |
| Collector | Responsável pela execução das coletas aprovadas.                                 |

---

## 7. Validação com Público-Alvo

### Público-alvo

* Cidadãos interessados em reportar irregularidades ambientais.
* Órgãos públicos responsáveis pela gestão urbana e ambiental.
* Equipes responsáveis pela coleta de resíduos.

### Processo de validação

Foram realizados testes funcionais da aplicação para verificar o fluxo de autenticação, cadastro de denúncias, armazenamento de dados e visualização das ocorrências.

### Principais feedbacks recebidos

* Necessidade de uma interface simples e intuitiva.
* Facilidade no envio de imagens.
* Melhor organização das informações registradas.

### Ajustes implementados

* Correções no processo de autenticação.
* Ajustes na integração entre frontend e backend.
* Melhorias na navegação e experiência do usuário.

---

## 8. Uso do sistema

### Admin

Recebe as denúncias e solicitações de coleta, analisando e validando os registros realizados pelos usuários.

### User

Realiza o cadastro de denúncias ambientais e solicitações de coleta.

### Collector

Visualiza e aceita solicitações de coleta para execução.

---

## Documentações complementares

* Requisitos do sistema
* Arquitetura da aplicação
* Documentação da API
