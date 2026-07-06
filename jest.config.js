// Configuração do Jest para testar componentes React.
module.exports = {
  // jsdom = navegador de mentira em memória. Sem ele, não existe "document"
  // e o render() do RTL não tem onde montar o componente.
  testEnvironment: "jsdom",
  // roda este arquivo ANTES de cada suíte: é onde ligamos os matchers do jest-dom
  // (toBeInTheDocument, toBeDisabled, etc.) uma única vez.
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
