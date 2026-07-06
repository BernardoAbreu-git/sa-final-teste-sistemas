import { Link } from "react-router-dom";
import { PrecoEtiqueta } from "./PrecoEtiqueta";
import { SeletorQuantidade } from "./SeletorQuantidade";

// CarrinhoPage — lista os itens que o usuário adicionou ao carrinho.
// Props: itens (array) — recebido do App (o estado do carrinho vive lá, sem Context API).
export default function CarrinhoPage({ itens }) {
  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  if (itens.length === 0) {
    return (
      <main>
        <h2>Seu carrinho</h2>
        <p>O carrinho está vazio.</p>
        <Link to="/">Voltar às compras</Link>
      </main>
    );
  }

  return (
    <main>
      <h2>Seu carrinho</h2>
      <ul>
        {itens.map((item, i) => (
          <li key={i}>
            {item.nome} <PrecoEtiqueta valor={item.preco} />
            <SeletorQuantidade />
          </li>
        ))}
      </ul>
      <p>
        Total: <PrecoEtiqueta valor={total} />
      </p>
    </main>
  );
}
