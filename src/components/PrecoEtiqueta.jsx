// PrecoEtiqueta — formata e exibe um valor em reais (ex.: 49.9 -> "R$ 49,90"). [Teste tipo 1]
// Props: valor (number).
export function PrecoEtiqueta({ valor }) {
  const formatado = "R$ " + valor.toFixed(2).replace(".", ",");
  return <span className="preco">{formatado}</span>;
}
