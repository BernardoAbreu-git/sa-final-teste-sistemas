import { useState } from "react";

// ToggleFavorito — botão que marca/desmarca o produto como favorito. [Teste tipo 2]
// Sem props. Alterna o texto do botão entre "Favoritar" e "Favorito ✓".
export function ToggleFavorito() {
  const [favorito, setFavorito] = useState(false);

  return (
    <button onClick={() => setFavorito(!favorito)}>
      {favorito ? "Favorito ✓" : "Favoritar"}
    </button>
  );
}
