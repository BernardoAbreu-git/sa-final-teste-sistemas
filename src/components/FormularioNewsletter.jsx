import { useState } from "react";

// FormularioNewsletter — captura um e-mail e avisa o pai ao enviar. [Teste tipo 3: callback]
// Props: onInscrever (function) — recebe o e-mail digitado.
export function FormularioNewsletter({ onInscrever }) {
  const [email, setEmail] = useState("");

  function enviar(evento) {
    evento.preventDefault();
    onInscrever(email);
  }

  return (
    <form className="newsletter" onSubmit={enviar}>
      <label htmlFor="email-news">E-mail</label>
      <input
        id="email-news"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Inscrever</button>
    </form>
  );
}
