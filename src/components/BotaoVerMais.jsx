import { useState } from "react";

// BotaoVerMais — mostra ou esconde um texto extra ao clicar. [Teste tipo 2: reage ao usuário]
// Props: texto (string) — o conteúdo que aparece quando está aberto.
export function BotaoVerMais({ texto }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div>
      <button onClick={() => setAberto(!aberto)}>
        {aberto ? "Ver menos" : "Ver mais"}
      </button>
      {aberto && <p>{texto}</p>}
    </div>
  );
}
