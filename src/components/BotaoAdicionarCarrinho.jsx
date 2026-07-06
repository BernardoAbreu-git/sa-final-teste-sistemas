// BotaoAdicionarCarrinho — botão que avisa o componente pai por callback. [Teste tipo 3]
// Props: onAdicionar (function) — chamada a cada clique.
export function BotaoAdicionarCarrinho({ onAdicionar }) {
  return <button onClick={onAdicionar}>Adicionar ao carrinho</button>;
}
