# Livraria Página Viva — S.A. Final (em grupo)

Código-base da **Situação de Aprendizagem final** da UC **Teste de Sistemas** (curso DESI).
Projeto para ser feito por um **grupo de 3 pessoas**.

## Do que se trata

Você recebeu o front-end de uma **livraria** em React que **funciona, mas chegou
bagunçado, sem rotas montadas e sem nenhum teste**. São **30 peças** entre
**componentes** (25) e **páginas** (5). O desafio completo está no arquivo
**`ENUNCIADO.html`** — abra no navegador.

## Como rodar

```bash
# 0) baixa o projeto e entra na pasta da SUA versão
git clone https://github.com/jhonatanwll/sa-final-teste-sistemas.git
cd sa-final-teste-sistemas/versoes/02-livraria

# 1) instala tudo (React, Vite, React Router, Jest, RTL, json-server)
npm install

# 2) (opcional) sobe a API de mentira que serve o db.json
npm run api      # http://localhost:3001/produtos

# 3) sobe a livraria
npm run dev

# 4) roda os testes
npm test
```

> A aplicação **consome o JSON** pela camada de dados `src/api.js`: ela tenta a API
> (`json-server`) e, se não estiver no ar, usa o `src/produtos.json` local — então a
> livraria monta com ou sem servidor.

Requer **Node 20+**.

## As quatro etapas (resumo — detalhe no `ENUNCIADO.html`)

1. **Rodar e diagnosticar** — instalar, tentar rodar e entender os 3 problemas.
2. **Fazer a loja montar** — completar os imports do `App.jsx` (React Router + páginas).
3. **Organizar as pastas** — 25 componentes em `src/components/`, 5 páginas em
   `src/pages/`, imports consertados.
4. **Proteger com testes** — um arquivo `.test.jsx` **co-localizado** para cada um dos
   **25 componentes**, cobrindo os 3 tipos (só aparece · reage ao usuário · avisa o pai).

## Divisão sugerida para o grupo (3 pessoas)

- As etapas 1 a 3 são feitas **juntas**, para todos partirem da mesma base.
- Na etapa 4, cada pessoa fica responsável por um lote de **9, 8 e 8 componentes**
  (mix dos 3 tipos — tabela no `ENUNCIADO.html`).

Material de apoio: **CONTEUDO-react-testing-library**.
