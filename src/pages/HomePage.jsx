import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { carregarProdutos } from "../hooks/api";
import { BannerPromocional } from "../components/BannerPromocional";
import { BarraBusca } from "../components/BarraBusca";
import { FiltroPreco } from "../components/FiltroPreco";
import { SeloFreteGratis } from "../components/SeloFreteGratis";
import { CardProduto } from "../components/CardProduto";
import { TagCategoria } from "../components/TagCategoria";
import { Avaliacao } from "../components/Avaliacao";
import { BadgeEstoque } from "../components/BadgeEstoque";
import { BotaoAdicionarCarrinho } from "../components/BotaoAdicionarCarrinho";

// HomePage — vitrine da loja: banner, busca, filtro e a grade de produtos.
// Consome o JSON pela camada de dados (api.js) e monta um CardProduto por item.
// Props: aoAdicionar (function) — recebida do App para somar itens ao carrinho.
export default function HomePage({ aoAdicionar }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos().then(setProdutos);
  }, []);

  function buscar(texto) {
    console.log("Buscar:", texto);
  }
  function filtrar(faixa) {
    console.log("Filtro:", faixa);
  }

  return (
    <main>
      <BannerPromocional mensagem="Feirão do livro: leve 3, pague 2" />
      <BarraBusca onBuscar={buscar} />
      <FiltroPreco onFiltrar={filtrar} />
      <SeloFreteGratis />

      <h2>Livros em destaque</h2>
      <ul className="grade-produtos">
        {produtos.map((p) => (
          <li key={p.id} className="item-produto">
            <Link to={`/produto/${p.id}`}>Ver detalhes de {p.nome}</Link>
            <CardProduto nome={p.nome} preco={p.preco} />
            <TagCategoria categoria={p.categoria} />
            <Avaliacao nota={p.nota} />
            <BadgeEstoque emEstoque={p.emEstoque} />
            <BotaoAdicionarCarrinho onAdicionar={() => aoAdicionar(p)} />
          </li>
        ))}
      </ul>
    </main>
  );
}
