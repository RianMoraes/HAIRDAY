# Hair Day

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-2ea44f)
![Webpack](https://img.shields.io/badge/bundler-webpack-8dd6f9)
![JSON%20Server](https://img.shields.io/badge/mock%20api-json--server-3e3e3e)

Aplicacao web para gerenciamento de agendamentos em barbearia/salao. O projeto permite criar, visualizar e cancelar horarios por data, com interface separada por periodos (manha, tarde e noite).

## Sumario

- [O que o projeto faz](#o-que-o-projeto-faz)
- [Por que o projeto e util](#por-que-o-projeto-e-util)
- [Como comecar](#como-comecar)
- [Uso rapido](#uso-rapido)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Onde obter ajuda](#onde-obter-ajuda)
- [Manutencao e contribuicoes](#manutencao-e-contribuicoes)

## O que o projeto faz

O Hair Day oferece um fluxo completo de agendamento com frontend em JavaScript e API mock local:

- Selecao de data com limite minimo no dia atual.
- Exibicao de horarios disponiveis entre `09:00` e `21:00`.
- Bloqueio visual de horarios ja ocupados ou em horario passado.
- Criacao de agendamentos com `nome`, `id` e data/hora (`when`).
- Listagem de agendamentos por dia, agrupados por periodo.
- Cancelamento de agendamentos direto na lista.

## Por que o projeto e util

- Simples para aprender arquitetura modular no frontend com servicos separados.
- Excelente para estudos de integracao com API REST usando `fetch`.
- Facil de extender: horarios, validacoes e layout estao organizados em modulos.
- Ambiente rapido de desenvolvimento com `webpack-dev-server` + `json-server`.

## Como comecar

### Pre-requisitos

- Node.js 18+ (recomendado)
- npm 9+

### Instalacao

```bash
npm install
```

### Executar em desenvolvimento

Em um terminal, inicie a API mock:

```bash
npm run server
```

Em outro terminal, inicie o frontend:

```bash
npm run dev
```

Depois, abra o endereco mostrado no terminal do Webpack Dev Server (normalmente `http://localhost:8080`).

## Uso rapido

1. Escolha a data no campo de calendario.
2. Clique em um horario disponivel.
3. Informe o nome do cliente.
4. Clique em Agendar.
5. Para remover, clique no icone de cancelar no agendamento correspondente.

## Estrutura do projeto

```text
src/
  main.js                    # ponto de entrada
  modules/
    form/                    # interacoes de formulario (data, horarios, submit)
    schedules/               # renderizacao, carga e cancelamento
  services/                  # camada de comunicacao com API
  utils/opening-hours.js     # horarios de funcionamento
  libs/dayjs.js              # configuracao do dayjs (pt-br)
```

### Scripts disponiveis

- `npm run dev`: sobe o frontend com recarregamento automatico.
- `npm run server`: inicia o `json-server` na porta `3333`.
- `npm run build`: gera bundle de producao local em `dist/`.

## Onde obter ajuda

- Abra uma issue descrevendo contexto, comportamento esperado e comportamento atual.
- Consulte o codigo-fonte dos modulos principais em [src/modules](src/modules) e servicos em [src/services](src/services).
- Para ajustes de ambiente local, verifique [webpack.config.js](webpack.config.js) e [server.json](server.json).

## Manutencao e contribuicoes

- Mantenedor atual: Rian Sales.
- Contribuicoes sao bem-vindas via Pull Request.
- Antes de contribuir, leia [CONTRIBUTING.md](CONTRIBUTING.md).

Se este projeto for util para voce, considere deixar uma estrela no repositorio.