import { Link } from "react-router-dom";

// NaoEncontradaPage — mostrada quando a rota não existe (rota coringa "*").
// Sem props.
export default function NaoEncontradaPage() {
  return (
    <main>
      <h2>Página não encontrada</h2>
      <p>O endereço que você tentou acessar não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </main>
  );
}
