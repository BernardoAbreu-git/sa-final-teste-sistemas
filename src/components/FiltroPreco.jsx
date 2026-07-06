// FiltroPreco — botões de faixa de preço que avisam o pai. [Teste tipo 3: callback]
// Props: onFiltrar (function) — recebe a faixa escolhida ("ate-100" ou "acima-100").
export function FiltroPreco({ onFiltrar }) {
  return (
    <div className="filtro-preco">
      <button onClick={() => onFiltrar("ate-100")}>Até R$ 100</button>
      <button onClick={() => onFiltrar("acima-100")}>Acima de R$ 100</button>
    </div>
  );
}
