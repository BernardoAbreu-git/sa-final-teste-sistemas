// App — o coração da Página Viva. Monta o layout fixo (Cabecalho + Rodape) e
// decide qual PÁGINA aparece conforme o endereço na barra do navegador (as rotas).
// O "carrinho" vive AQUI, num useState, e desce por props para as páginas — sem Context API.
//
// ATENÇÃO (Fase 1): este arquivo está incompleto DE PROPÓSITO. Faltam os imports.
// Enquanto o App não "enxergar" o React Router, o Cabecalho, o Rodape e as páginas,
// a loja não monta. Repare em COMO cada arquivo exporta o que oferece.
import { useState } from "react";
import "./App.css";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((atual) => [...atual, produto]);
  }

  return (
    <BrowserRouter>
      <div className="loja">
        <Cabecalho quantidadeCarrinho={carrinho.length} />

        <Routes>
          <Route path="/" element={<HomePage aoAdicionar={adicionarAoCarrinho} />} />
          <Route path="/produto/:id" element={<ProdutoPage aoAdicionar={adicionarAoCarrinho} />} />
          <Route path="/carrinho" element={<CarrinhoPage itens={carrinho} />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NaoEncontradaPage />} />
        </Routes>

        <Rodape />
      </div>
    </BrowserRouter>
  );
}
