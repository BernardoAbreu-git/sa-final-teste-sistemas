import { useState } from "react";

// BarraBusca — campo de busca que avisa o pai ao enviar. [Teste tipo 3: callback]
// Props: onBuscar (function) — recebe o texto digitado quando o formulário é enviado.
export function BarraBusca({ onBuscar }) {
  const [texto, setTexto] = useState("");

  function enviar(evento) {
    evento.preventDefault();
    onBuscar(texto);
  }

  return (
    <form className="barra-busca" onSubmit={enviar} role="search">
      <label htmlFor="campo-busca">Buscar produtos</label>
      <input
        id="campo-busca"
        type="search"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
