import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { carregarProdutos } from "./api";
import { Breadcrumb } from "./Breadcrumb";
import { GaleriaImagens } from "./GaleriaImagens";
import { PrecoEtiqueta } from "./PrecoEtiqueta";
import { Avaliacao } from "./Avaliacao";
import { BadgeEstoque } from "./BadgeEstoque";
import { SeletorQuantidade } from "./SeletorQuantidade";
import { ToggleFavorito } from "./ToggleFavorito";
import { BotaoAdicionarCarrinho } from "./BotaoAdicionarCarrinho";
import { Abas } from "./Abas";
import { Acordeao } from "./Acordeao";

// ProdutoPage — detalhe de um produto. Lê o :id da rota (useParams), consome o
// JSON e mostra galeria, preço, avaliação, seletor de quantidade e abas.
// Props: aoAdicionar (function) — recebida do App.
export default function ProdutoPage({ aoAdicionar }) {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    carregarProdutos().then((lista) =>
      setProduto(lista.find((p) => String(p.id) === id))
    );
  }, [id]);

  if (!produto) return <p>Carregando produto...</p>;

  return (
    <main>
      <Breadcrumb caminho={[produto.categoria, produto.nome]} />
      <h2>{produto.nome}</h2>
      <GaleriaImagens imagens={produto.imagens} />
      <PrecoEtiqueta valor={produto.preco} />
      <Avaliacao nota={produto.nota} />
      <BadgeEstoque emEstoque={produto.emEstoque} />
      <SeletorQuantidade />
      <ToggleFavorito />
      <BotaoAdicionarCarrinho onAdicionar={() => aoAdicionar(produto)} />
      <Abas descricao={produto.descricao} avaliacoes={produto.avaliacoes} />
      <Acordeao
        titulo="Política de trocas"
        conteudo="Troque em até 7 dias após o recebimento."
      />
    </main>
  );
}
