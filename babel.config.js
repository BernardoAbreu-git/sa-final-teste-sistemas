// Babel é o "tradutor": converte JSX (<Componente />) e a sintaxe moderna
// de import/export para algo que o Node (onde o Jest roda) entende.
// O Jest usa babel-jest automaticamente quando encontra este arquivo.
module.exports = {
  presets: [
    // converte sintaxe JS moderna para a versão do Node que está rodando os testes
    ["@babel/preset-env", { targets: { node: "current" } }],
    // entende JSX. runtime 'automatic' dispensa "import React" em cada arquivo
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
