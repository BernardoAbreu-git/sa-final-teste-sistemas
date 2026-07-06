import { FormularioNewsletter } from "./FormularioNewsletter";

// ContatoPage — página de contato com inscrição na newsletter.
// Sem props.
export default function ContatoPage() {
  function inscrever(email) {
    console.log("Newsletter:", email);
  }

  return (
    <main>
      <h2>Fale com a gente</h2>
      <p>Deixe seu e-mail e receba nossas novidades.</p>
      <FormularioNewsletter onInscrever={inscrever} />
    </main>
  );
}
