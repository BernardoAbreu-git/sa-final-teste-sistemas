// CardProduto — cartão de um produto na vitrine. [Teste tipo 1: só aparece]
// Props: nome (string), preco (number, em reais).
// Mostra o nome num título (<h3>) e o preço via <PrecoEtiqueta />.
import { PrecoEtiqueta } from "./PrecoEtiqueta";

export function CardProduto({ nome, preco }) {
  return (
    <article className="card-produto">
      <h3>{nome}</h3>
      <PrecoEtiqueta valor={preco} />
    </article>
  );
}
