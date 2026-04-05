# MV Tech — Sistema Gerenciador de Tarefas

Sistema web de gerenciamento de projetos e tarefas desenvolvido para a **MV Tech Consultoria**, especializada em DevOps e infraestrutura em nuvem.

## Sobre

A MV Tech atende múltiplos clientes simultaneamente, cada um com projetos, prazos e demandas distintas. Este sistema centraliza o controle de todas as atividades em um único lugar, com visão clara do que está pendente, em andamento ou concluído — por projeto e por responsável.

## Funcionalidades

- **Autenticação** — Cadastro e login com sessão persistente
- **Projetos** — Criação e edição com prazo, membros e métricas de progresso
- **Kanban** — Quadro com colunas *A Fazer*, *Em Andamento* e *Concluído*, com drag & drop
- **Tarefas** — Título, descrição, responsável, prazo, horas estimadas e anotações com histórico
- **Calendário** — Visualização mensal de prazos de tarefas e projetos
- **Filtro por responsável** — Visão individual por membro da equipe
- **Indicador de atraso** — Cards com prazo vencido destacados visualmente
- **Métricas no dashboard** — Progresso, % de conclusão, horas estimadas e alertas de atraso por projeto
- **Impressão do board** — Exportar o Kanban formatado para papel

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Front-end | HTML5, CSS3, JavaScript (Vanilla) |
| Estilização | Bootstrap 5 |
| Date picker | Flatpickr |
| Servidor | json-server |
| Persistência | localStorage |

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/mateus-varela/mv-tech-project.git
cd mv-tech-project

# 2. Instale as dependências
npm install

# 3. Crie o arquivo de banco de dados
cp db.example.json db.json

# 4. Inicie o servidor
npm start
```

Acesse em: **http://localhost:3001**

## Estrutura

```
mv-tech-project/
├── public/              # Arquivos servidos pelo servidor
│   ├── index.html       # Login / Cadastro
│   ├── dashboard.html   # Painel de projetos
│   ├── kanban.html      # Quadro Kanban
│   ├── calendario.html  # Calendário de prazos
│   ├── css/style.css
│   └── js/app.js
├── db.example.json
├── package.json
└── README.md
```

## Autor

**Mateus Varela** — [MV Tech](https://github.com/mateus-varela)
