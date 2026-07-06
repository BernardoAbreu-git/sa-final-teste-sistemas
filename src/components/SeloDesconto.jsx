// SeloDesconto — etiqueta que mostra o percentual de desconto do produto. [Teste tipo 1: só aparece]
// Props: percentual (number) — o desconto, ex.: 15 vira "-15%".
export function SeloDesconto({ percentual }) {
  return <span className="selo-desconto">-{percentual}%</span>;
}
