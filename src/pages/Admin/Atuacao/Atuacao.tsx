import { useEffect, useState } from "react";
import {
  listarAtuacoes,
  type AtuacaoResponse,
} from "../../../services/atuacoes/listar";
import { AtuacaoList } from "./components/lista";
import { AtuacaoFormModal } from "./components/cadastro-moda";
import { criarAtuacao } from "../../../services/atuacoes/criar";
import { atualizarAtuacao } from "../../../services/atuacoes/atualizar";
import { excluirAtuacao } from "../../../services/atuacoes/excluir";
import type { AtuacoesSchema } from "../../../models/request-schemas/atuacoes";
import { Header } from "../../../components/header";

export function Atuacao() {
  const [atuacoes, setAtuacoes] = useState<AtuacaoResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AtuacaoResponse | null>(null);

  async function carregar() {
    setLoading(true);
    const data = await listarAtuacoes();
    setAtuacoes(data);
    setLoading(false);
  }

  useEffect(() => {
    carregar();
  }, []);

  function abrirCriar() {
    setEditing(null);
    setModalOpen(true);
  }

  function abrirEditar(atuacao: AtuacaoResponse) {
    setEditing(atuacao);
    setModalOpen(true);
  }

  async function handleSubmit(data: AtuacoesSchema) {
    if (editing) {
      await atualizarAtuacao(editing.id, data);
    } else {
      await criarAtuacao(data);
    }

    setModalOpen(false);
    carregar();
  }

  async function handleDelete(id: number) {
    if (confirm("Deseja excluir esta atuação?")) {
      await excluirAtuacao(id);
      carregar();
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-4 px-6 flex justify-center">
      <div className="w-full max-w-[960px] mx-auto">
        <Header />

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[1.8rem] font-semibold text-[#1c1a36]">
            Gestão de Atuações
          </h1>

          <button
            onClick={abrirCriar}
            className="
              px-4 py-2 rounded-lg text-white font-medium
              bg-gradient-to-r from-[#5a4df4] to-[#6bd4ff]
              hover:opacity-90 transition
            "
          >
            Nova Atuação
          </button>
        </div>

        {loading ? (
          <p className="text-[#6c6a80]">Carregando...</p>
        ) : (
          <AtuacaoList
            atuacoes={atuacoes}
            onEdit={abrirEditar}
            onDelete={handleDelete}
          />
        )}

        <AtuacaoFormModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
          initialData={editing}
        />
      </div>
    </div>
  );
}
