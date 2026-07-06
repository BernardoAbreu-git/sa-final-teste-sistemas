import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { carregarProdutos } from "./api";
import { BannerPromocional } from "./BannerPromocional";
import { BarraBusca } from "./BarraBusca";
import { FiltroPreco } from "./FiltroPreco";
import { SeloFreteGratis } from "./SeloFreteGratis";
import { CardProduto } from "./CardProduto";
import { TagCategoria } from "./TagCategoria";
import { Avaliacao } from "./Avaliacao";
import { BadgeEstoque } from "./BadgeEstoque";
import { BotaoAdicionarCarrinho } from "./BotaoAdicionarCarrinho";

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
