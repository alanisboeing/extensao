import { useEffect, useState } from "react";
import {
  listarTalentos,
  type TalentoResponse,
} from "../../../services/talentos/listar";
import { TalentoList } from "./components/lista";
import { TalentoFormModal } from "./components/cadastro-modal";

import { Header } from "../../../components/header";
import type { TalentoFormData } from "../../../models/request-schemas/talentos";
import { talentoService } from "../../../services/talento.service";

export function TalentoAdmin() {
  const [talentos, setTalentos] = useState<TalentoResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<TalentoResponse | null>(null);

  // =============================
  // CARREGAR LISTA
  // =============================
  async function carregar() {
    setLoading(true);
    const data = await listarTalentos();
    setTalentos(data);
    setLoading(false);
  }

  useEffect(() => {
    carregar();
  }, []);

  // =============================
  // ABRIR MODAL DE CRIAÇÃO
  // =============================
  function abrirCriar() {
    setEditing(null);
    setModalOpen(true);
  }

  // =============================
  // ABRIR MODAL DE EDIÇÃO
  // =============================
  function abrirEditar(talento: TalentoResponse) {
    setEditing(talento);
    setModalOpen(true);
  }

  // =============================
  // SUBMIT DO FORMULÁRIO
  // =============================
  async function handleSubmit(data: TalentoFormData) {
    if (editing) {
      await talentoService.atualizar(editing.id, data);
    } else {
      await talentoService.criar(data);
    }

    setModalOpen(false);
    carregar();
  }

  // =============================
  // EXCLUIR TALENTO
  // =============================
  async function handleDelete(id: number) {
    if (confirm("Deseja excluir este talento?")) {
      await talentoService.deletar(id);
      carregar();
    }
  }

  // =============================
  // RENDER
  // =============================
  return (
    <div className="min-h-screen bg-[#f5f5f7] py-4 px-6 flex justify-center">
      <div className="w-full max-w-[960px] mx-auto">
        <Header />

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[1.8rem] font-semibold text-[#1c1a36]">
            Gestão de Talentos
          </h1>

          <button
            onClick={abrirCriar}
            className="
              px-4 py-2 rounded-lg text-white font-medium
              bg-gradient-to-r from-[#5a4df4] to-[#6bd4ff]
              hover:opacity-90 transition
            "
          >
            Novo Talento
          </button>
        </div>

        {loading ? (
          <p className="text-[#6c6a80]">Carregando...</p>
        ) : (
          <TalentoList
            talentos={talentos}
            onEdit={abrirEditar}
            onDelete={handleDelete}
          />
        )}

        <TalentoFormModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
          initialData={editing}
        />
      </div>
    </div>
  );
}
