// BadgeEstoque — mostra se o produto está disponível. [Teste tipo 1: só aparece]
// Props: emEstoque (boolean) — true mostra "Em estoque", false mostra "Esgotado".
export function BadgeEstoque({ emEstoque }) {
  return (
    <span className="badge-estoque">
      {emEstoque ? "Em estoque" : "Esgotado"}
    </span>
  );
}
