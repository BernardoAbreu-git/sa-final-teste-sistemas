import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { carregarProdutos } from "../hooks/api";
import { Breadcrumb } from "../components/Breadcrumb";
import { GaleriaImagens } from "../components/GaleriaImagens";
import { PrecoEtiqueta } from "../components/PrecoEtiqueta";
import { Avaliacao } from "../components/Avaliacao";
import { BadgeEstoque } from "../components/BadgeEstoque";
import { SeletorQuantidade } from "../components/SeletorQuantidade";
import { ToggleFavorito } from "../components/ToggleFavorito";
import { BotaoAdicionarCarrinho } from "../components/BotaoAdicionarCarrinho";
import { Abas } from "../components/Abas";
import { Acordeao } from "../components/Acordeao";

// ProdutoPage — detalhe de um produto. Lê o :id da rota (useParams), consome o
// JSON e mostra galeria, preço, avaliação, seletor de quantidade e abas.
// Props: aoAdicionar (function) — recebida do App.
export default function ProdutoPage({ aoAdicionar }) {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);
    carregarProdutos().then((lista) => {
      setProduto(lista.find((p) => String(p.id) === id));
      setCarregando(false);
    });
  }, [id]);

  if (carregando) return <p>Carregando produto...</p>;
  if (!produto) return <p>Produto não encontrado.</p>;

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
