import { useState } from "react";

// SeletorQuantidade — escolhe a quantidade de um item (mínimo 1). [Teste tipo 2: reage ao usuário]
// Sem props. Os botões "−" e "+" alteram o número exibido.
export function SeletorQuantidade() {
  const [quantidade, setQuantidade] = useState(1);

  function aumentar() {
    setQuantidade(quantidade + 1);
  }
  function diminuir() {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  }

  return (
    <div>
      <button aria-label="Diminuir quantidade" onClick={diminuir}>
        −
      </button>
      <span>Quantidade: {quantidade}</span>
      <button aria-label="Aumentar quantidade" onClick={aumentar}>
        +
      </button>
    </div>
  );
}
