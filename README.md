readme_content = """# 📚 Projeto Livraria - S.A. Final (Teste de Sistemas)

Este repositório contém a entrega da Situação de Aprendizagem (S.A.) Final da unidade curricular de **Teste de Sistemas**. O objetivo principal do projeto foi herdar um front-end legado de uma livraria em React que se encontrava desorganizado, sem rotas funcionais e sem nenhuma cobertura de testes, e transformá-lo numa aplicação estruturada, totalmente funcional e **100% protegida por testes automatizados**.

---

## 🔍 O Desafio (Resgate do Código Legado)

Recebemos o projeto com 30 ficheiros soltos diretamente na raiz da pasta `src/`, com o ficheiro `App.jsx` sem nenhum `import` (o que impedia a aplicação de inicializar) e com zero testes escritos. 

A nossa missão foi dividida em 4 etapas consecutivas:
1. **Diagnóstico:** Instalação de dependências e compreensão dos erros de compilação.
2. **Montagem da Loja:** Correção dos `imports` (distinguindo os padrões *default* e *nomeado*) e roteamento dinâmico com o React Router.
3. **Refatoração da Arquitetura:** Separação dos ficheiros em pastas dedicadas (`/components` e `/pages`), corrigindo todos os caminhos de importação relativa sem quebrar as funcionalidades existentes.
4. **Cinturão de Proteção:** Escrita de ficheiros `.test.jsx` co-localizados para cada um dos 25 componentes da loja utilizando Jest e RTL (React Testing Library).

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **React** (Vite)
* **React Router Dom** (Gestão de rotas e navegação)
* **Jest** (Executor de testes)
* **React Testing Library (RTL)** (Framework de testes de comportamento de interface)
* **JSON Server** (API Mock para simulação do banco de dados de produtos em `http://localhost:3001/produtos`)

---

## 📁 Arquitetura e Estrutura de Pastas

Após a reestruturação e organização do ecossistema de ficheiros da livraria, a árvore de diretórios do projeto foi padronizada seguindo as melhores práticas de mercado:

```text
src/
├─ App.jsx                # Configuração de rotas (BrowserRouter) e imports corrigidos
├─ api.js                 # Camada de consumo da API (com fallback local para produtos.json)
├─ produtos.json          # Banco de dados local de produtos
├─ components/            # Pasta com os 25 componentes da interface + testes co-localizados
│  ├─ Cabecalho.jsx
│  ├─ Cabecalho.test.jsx
│  └─ ...
└─ pages/                 # Pasta com as 5 páginas de rota da aplicação
   ├─ HomePage.jsx
   └─ ...
