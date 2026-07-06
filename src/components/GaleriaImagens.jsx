import { useState } from "react";

// GaleriaImagens — mostra uma imagem por vez, com "anterior" e "próxima". [Teste tipo 2]
// Props: imagens (array de strings) — o texto alternativo (alt) de cada imagem.
// A imagem visível muda conforme o usuário navega. Volta ao início ao passar do fim.
export function GaleriaImagens({ imagens }) {
  const [indice, setIndice] = useState(0);

  function anterior() {
    setIndice((i) => (i === 0 ? imagens.length - 1 : i - 1));
  }
  function proxima() {
    setIndice((i) => (i === imagens.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="galeria">
      <button aria-label="Imagem anterior" onClick={anterior}>
        ‹
      </button>
      <img src="" alt={imagens[indice]} />
      <button aria-label="Próxima imagem" onClick={proxima}>
        ›
      </button>
    </div>
  );
}
