import { useState } from "react";

// Acordeao — mostra/esconde um conteúdo ao clicar no título. [Teste tipo 2: reage ao usuário]
// Props: titulo (string), conteudo (string).
// Começa fechado: o conteúdo só aparece depois do primeiro clique.
export function Acordeao({ titulo, conteudo }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="acordeao">
      <button onClick={() => setAberto(!aberto)}>{titulo}</button>
      {aberto && <p>{conteudo}</p>}
    </div>
  );
}
