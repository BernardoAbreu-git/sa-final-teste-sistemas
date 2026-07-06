import { useState } from "react";

// Abas — alterna entre a aba "Descrição" e a aba "Avaliações". [Teste tipo 2: reage ao usuário]
// Props: descricao (string), avaliacoes (string).
export function Abas({ descricao, avaliacoes }) {
  const [aba, setAba] = useState("descricao");

  return (
    <div className="abas">
      <div className="abas-botoes">
        <button onClick={() => setAba("descricao")}>Descrição</button>
        <button onClick={() => setAba("avaliacoes")}>Avaliações</button>
      </div>
      <p>{aba === "descricao" ? descricao : avaliacoes}</p>
    </div>
  );
}
