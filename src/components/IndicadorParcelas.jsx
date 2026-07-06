// IndicadorParcelas — mostra em quantas vezes o preço pode ser parcelado. [Teste tipo 1: só aparece]
// Props: preco (number) e vezes (number, padrão 12) — calcula o valor de cada parcela.
export function IndicadorParcelas({ preco, vezes = 12 }) {
  const parcela = (preco / vezes).toFixed(2);
  return (
    <p className="parcelas">
      em até {vezes}x de R$ {parcela}
    </p>
  );
}
