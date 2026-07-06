import { useState } from "react";

// MenuCompartilhar — abre e fecha a lista de opções de compartilhamento. [Teste tipo 2: reage ao usuário]
// Sem props. O botão "Compartilhar" mostra ou esconde as opções.
export function MenuCompartilhar() {
  const [aberto, setAberto] = useState(false);

  return (
    <div>
      <button onClick={() => setAberto(!aberto)}>Compartilhar</button>
      {aberto && (
        <ul>
          <li>Copiar link</li>
          <li>WhatsApp</li>
          <li>E-mail</li>
        </ul>
      )}
    </div>
  );
}
