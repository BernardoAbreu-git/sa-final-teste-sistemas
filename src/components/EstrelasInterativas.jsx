// EstrelasInterativas — cinco estrelas clicáveis; avisa o pai a nota escolhida. [Teste tipo 3]
// Props: onAvaliar (function) — recebe a nota (1 a 5) do clique.
export function EstrelasInterativas({ onAvaliar }) {
  const estrelas = [1, 2, 3, 4, 5];
  return (
    <div>
      {estrelas.map((n) => (
        <button key={n} aria-label={`Dar nota ${n}`} onClick={() => onAvaliar(n)}>
          ★
        </button>
      ))}
    </div>
  );
}
