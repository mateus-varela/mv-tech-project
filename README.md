# MV Tech — Sistema Gerenciador de Tarefas Online

Sistema web de gerenciamento de tarefas desenvolvido como projeto integrador para a Pontifícia Universidade Católica de Goiás (PUC-GO) — Análise e Desenvolvimento de Sistemas.

## Sobre o Projeto

A **MV Tech** é uma consultoria especializada em DevOps que atende múltiplos clientes simultaneamente. A ausência de uma ferramenta centralizada para acompanhar as demandas de cada cliente gerava dificuldades no controle de prazos, na distribuição de atividades e na visibilidade geral do andamento dos projetos.

Este sistema foi desenvolvido para resolver esse problema, permitindo organizar cada cliente como um projeto independente, gerenciar tarefas via quadro Kanban e acompanhar prazos por um calendário integrado.

## Funcionalidades

- **Autenticação** — Cadastro e login de usuários com sessão via localStorage
- **Projetos** — Criação, edição e exclusão de projetos com prazo, membros e métricas de progresso
- **Kanban** — Quadro com colunas *A Fazer*, *Em Andamento* e *Concluído*, com drag & drop
- **Tarefas** — Criação com título, descrição, responsável, prazo, horas estimadas e anotações
- **Calendário** — Visualização de prazos de tarefas e projetos por data
- **Filtro por responsável** — Filtrar tarefas do Kanban por membro da equipe
- **Indicador de atraso** — Cards com prazo vencido ficam destacados em vermelho
- **Métricas no dashboard** — Barra de progresso, % de conclusão, horas estimadas e tarefas atrasadas por projeto
- **Impressão do board** — Exportar o Kanban para impressão

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Front-end | HTML5, CSS3, JavaScript (Vanilla) |
| Estilização | Bootstrap 5, CSS customizado (glassmorphism) |
| Date picker | Flatpickr |
| Back-end (mock) | json-server |
| Persistência | localStorage |
| Fonte | Plus Jakarta Sans (Google Fonts) |

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/mateus-varela/mv-tech-tasks.git
cd mv-tech-tasks

# 2. Instale as dependências
npm install

# 3. Crie o arquivo de banco de dados
cp db.example.json db.json

# 4. Inicie o servidor
npm start
```

Acesse em: **http://localhost:3001**

> O sistema usa `localStorage` para persistência dos dados. O `db.json` é utilizado apenas para servir os arquivos estáticos via json-server.

## Estrutura de Arquivos

```
mv-tech-tasks/
├── public/              # Arquivos servidos pelo json-server
│   ├── index.html       # Login / Cadastro
│   ├── dashboard.html   # Lista de projetos
│   ├── kanban.html      # Quadro Kanban
│   ├── calendario.html  # Calendário de prazos
│   ├── css/
│   │   └── style.css    # Estilos globais
│   └── js/
│       └── app.js       # Lógica da aplicação
├── db.example.json      # Template do banco de dados
├── package.json
└── README.md
```

## Telas do Sistema

| Tela | Descrição |
|------|-----------|
| `index.html` | Login e cadastro com tema dark glassmorphism |
| `dashboard.html` | Visão geral dos projetos com métricas e progresso |
| `kanban.html` | Quadro Kanban com drag & drop e filtro por responsável |
| `calendario.html` | Calendário mensal com prazos de tarefas e projetos |

## Autor

**Mateus Varela** — MV Tech Consultoria DevOps

---

Projeto Integrador III-B — PUC-GO — 2026
