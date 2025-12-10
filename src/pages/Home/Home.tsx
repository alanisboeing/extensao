import React, { type JSX, useState, useEffect } from "react";
import { Rocket, Users } from "lucide-react";
import { Header } from "../../components/header/index.js";
import CardAreas from "../../components/card-areas/index.js";
import CardIndicador from "../../components/card-indicador/index.js";
import { CardCandidato } from "../../components/card-candidato/index.js";
import { Footer } from "../../components/footer";
import {
  listarTalentos,
  type TalentoResponse,
} from "../../services/talentos/listar.js";
import {
  listarAtuacoes,
  type AtuacaoResponse,
} from "../../services/atuacoes/listar.js";

export function Home() {
  const [talentos, setTalentos] = useState<TalentoResponse[]>([]);
  const [areas, setAreas] = useState<AtuacaoResponse[]>([]);
  const [selectedAreaId, setSelectedAreaId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        const [talentosResponse, atuacoesResponse] = await Promise.all([
          listarTalentos(),
          listarAtuacoes(),
        ]);

        setAreas(atuacoesResponse);
        setTalentos(talentosResponse);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);
  const talentosFiltrados =
    selectedAreaId === null
      ? talentos
      : talentos.filter((t) => t.atuacoes?.id === selectedAreaId);

  const toggleArea = (id: number) => {
    setSelectedAreaId((current) => (current === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* HEADER FULL WIDTH */}
      <div>
        <Header />
      </div>

      {/* CONTEÚDO CENTRALIZADO */}
      <div className="px-6 pb-10 pt-28 flex justify-center">
        <div className="w-full max-w-[960px] mx-auto">
          {/* HERO */}
          <section className="py-6 pb-8 flex flex-col gap-6">
            <div className="text-center flex flex-col gap-3">
              <h1 className="text-[clamp(2rem,4vw,2.45rem)] text-[#1c1a36] leading-[1.2] font-semibold">
                Encontre ou torne-se o talento que impulsiona{" "}
                <span className="bg-gradient-to-r from-[#5a4df4] to-[#6bd4ff] bg-clip-text text-transparent">
                  a inovacao tecnologica
                </span>
              </h1>

              <p className="text-base text-[#6c6a80] max-w-[720px] mx-auto">
                Conecte-se com talentos especializados...
              </p>
            </div>

            <div className="grid grid-cols-[1fr_minmax(0,320px)] gap-6 items-stretch">
              <CardAreas areas={areas.map((a) => a.nome)} />

              <div className="flex flex-col gap-4 w-full">
                <CardIndicador
                  valor={loading ? "..." : talentos.length}
                  label="Talentos"
                  icone={<Users className="w-5 h-5" />}
                  background="linear-gradient(135deg, #c38fff, #8da4ff)"
                />

                <CardIndicador
                  valor={loading ? "..." : areas.length}
                  label="Areas de Atuacao"
                  icone={<Rocket className="w-5 h-5" />}
                  background="linear-gradient(135deg, #5dc9ff, #6ebeff)"
                />
              </div>
            </div>
          </section>

          {/* TALENTOS */}
          <section className="mt-14 flex flex-col gap-5">
            <div className="text-center">
              <h2 className="text-[clamp(1.8rem,3vw,2rem)] text-[#1c1a36] font-semibold">
                Encontre seu{" "}
                <span className="bg-gradient-to-r from-[#5a4df4] to-[#6bd4ff] bg-clip-text text-transparent">
                  Talento Ideal
                </span>
              </h2>
              <p className="text-[#6c6a80] max-w-[640px] mx-auto mt-2">
                Navegue pelos nossos talentos qualificados e encontre o
                especialista perfeito para acelerar seu projeto de inovacao.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center px-5 py-3 rounded-[16px] bg-white shadow-[0_10px_24px_rgba(20,20,40,0.05)]">
              {loading ? (
                <p className="text-[#6c6a80]">Carregando áreas...</p>
              ) : areas.length > 0 ? (
                areas.map((area) => {
                  const ativo = selectedAreaId === area.id;
                  return (
                    <button
                      key={area.id}
                      onClick={() => toggleArea(area.id)}
                      className={`px-4 py-2 rounded-[10px] border-[1.5px] font-medium transition ${
                        ativo
                          ? "border-[#5a4df4] bg-[#f1efff] text-[#5a4df4]"
                          : "border-[#d2ceff] bg-[#fbfbff] text-[#5a4df4] hover:bg-[#f1efff] hover:border-[#5a4df4]"
                      }`}
                    >
                      {area.nome}
                    </button>
                  );
                })
              ) : (
                <p className="text-[#6c6a80]">Nenhuma área cadastrada</p>
              )}
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 justify-items-center w-full">
              {loading ? (
                <p className="text-[#6c6a80] col-span-full">
                  Carregando talentos...
                </p>
              ) : talentosFiltrados.length > 0 ? (
                talentosFiltrados.map((talento, index) => (
                  <CardCandidato
                    key={`${talento.nome}-${index}`}
                    fotoPerfil={talento.fotoUrl ?? ""}
                    nomeTalento={talento.nome}
                    areaAtuacao={talento.atuacoes?.nome ?? "--"}
                    id={talento.id}
                  />
                ))
              ) : (
                <p className="text-[#6c6a80] col-span-full">
                  Nenhum talento cadastrado ainda
                </p>
              )}
            </div>
          </section>
        </div>
    </div>

      <Footer />
    </div>
  );
}
