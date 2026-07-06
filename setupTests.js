// Liga os matchers extras do jest-dom no expect do Jest.
// Depois desta linha, podemos usar coisas como:
//   expect(elemento).toBeInTheDocument()
//   expect(botao).toBeDisabled()
// O jest.config.js aponta para cá em setupFilesAfterEnv (roda 1x antes dos testes).
import "@testing-library/jest-dom";
