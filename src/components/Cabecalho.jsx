// Cabecalho — barra do topo, aparece em todas as páginas. [Teste tipo 1: só aparece]
// Props: quantidadeCarrinho (number) — quantos itens estão no carrinho.
// Usa <Link> do React Router para trocar de página sem recarregar.
// (No teste, envolva o componente em <MemoryRouter>, senão o <Link> quebra.)
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Cabecalho({ quantidadeCarrinho }) {
  return (
    <header className="cabecalho">
      <Logo />
      <nav>
        <Link to="/">Início</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/carrinho">Carrinho ({quantidadeCarrinho})</Link>
      </nav>
    </header>
  );
}
