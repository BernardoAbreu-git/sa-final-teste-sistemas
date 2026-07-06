// api.js — camada de dados. É por AQUI que a aplicação CONSOME o JSON.
// Primeiro tenta a API de mentira (json-server lendo o db.json em http://localhost:3001).
// Se ela não estiver rodando, cai no arquivo local produtos.json — assim a loja
// sempre monta, com ou sem servidor.
import produtosLocais from "../data/produtos.json";

const URL_API = "http://localhost:3001/produtos";

export async function carregarProdutos() {
  try {
    const resposta = await fetch(URL_API);
    if (!resposta.ok) throw new Error("API indisponível");
    return await resposta.json();
  } catch {
    return produtosLocais;
  }
}