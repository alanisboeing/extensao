import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";

import { Header } from "../../components/header";
import {
  listarTalentos,
  type TalentoResponse,
} from "../../services/talentos/listar";
import { Footer } from "../../components/footer";

export function Talento() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  const [talento, setTalento] = useState<TalentoResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [tooltip, setTooltip] = useState<{
    type: "email" | "tel" | null;
    text: string;
  }>({ type: null, text: "" });

  async function carregarTalento() {
    const lista = await listarTalentos();
    const encontrado = lista.find((t) => t.id === id) || null;
    setTalento(encontrado);
    setLoading(false);
  }

  useEffect(() => {
    carregarTalento();
  }, [id]);

  const copiar = async (type: "email" | "tel", texto: string) => {
    await navigator.clipboard.writeText(texto);

    setTooltip({ type, text: "Copiado!" });

    setTimeout(() => {
      setTooltip({ type: null, text: "" });
    }, 1500);
  };

  const renderConteudo = () => {
    if (loading) return <p className="text-[#6c6a80]">Carregando...</p>;
    if (!talento) return <p className="text-[#6c6a80]">Talento não encontrado.</p>;

    return (
      <div className="flex flex-col gap-6">
        <div className="relative bg-gradient-to-r from-[#6d63f6] via-[#8b7ffc] to-[#7ed8ff] p-8 rounded-t-3xl shadow-lg">
          <div className="flex items-center gap-6">
            <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-[2.5px] border-white shadow-xl">
              {talento.fotoUrl ? (
                <img
                  src={talento.fotoUrl}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-white flex items-center justify-center text-4xl font-bold text-[#6a5af9]">
                  {talento.nome
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>

            <div className="text-white flex-1">
              <h1 className="text-3xl font-semibold">{talento.nome}</h1>

              <div className="mt-2 inline-block bg-white text-[#6a5af9] px-3 py-1 rounded-full text-sm font-semibold">
                {talento.atuacoes?.nome ?? "--"}
              </div>

              <div className="relative flex gap-5 mt-5">
                <div className="relative flex items-center">
                  <button
                    onMouseEnter={() =>
                      setTooltip({ type: "email", text: "Copiar email" })
                    }
                    onMouseLeave={() => setTooltip({ type: null, text: "" })}
                    onClick={() => copiar("email", talento.email)}
                    className="relative p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                  >
                    <Mail size={22} />

                    {tooltip.type === "email" && (
                      <span className="absolute top-[130%] left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {tooltip.text}
                      </span>
                    )}
                  </button>
                </div>

                {talento.telefone && (
                  <div className="relative flex items-center">
                    <button
                      onMouseEnter={() =>
                        setTooltip({ type: "tel", text: "Copiar telefone" })
                      }
                      onMouseLeave={() => setTooltip({ type: null, text: "" })}
                      onClick={() => copiar("tel", talento.telefone!)}
                      className="relative p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                    >
                      <Phone size={22} />

                      {tooltip.type === "tel" && (
                        <span className="absolute top-[130%] left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {tooltip.text}
                        </span>
                      )}
                    </button>
                  </div>
                )}

                {talento.linkedin && (
                  <a
                    href={talento.linkedin}
                    title="Abrir LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                  >
                    <Linkedin size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-b-3xl shadow-lg space-y-6">
          {(talento.cidade || talento.uf) && (
            <section>
              <h2 className="font-semibold text-lg mb-1">Localização</h2>
              <p>
                {talento.cidade} - {talento.uf}
              </p>
            </section>
          )}

          {talento.biografia && (
            <section>
              <h2 className="font-semibold text-lg mb-1">Sobre o Talento</h2>
              <p className="leading-relaxed">{talento.biografia}</p>
            </section>
          )}

          {talento.competencia && (
            <section>
              <h2 className="font-semibold text-lg mb-1">
                Experiência e Competências
              </h2>
              <ul className="list-disc ml-6">
                {talento.competencia.split(",").map((comp) => (
                  <li key={comp.trim()}>{comp.trim()}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="bg-[#f5f5f7] min-h-screen font-inter">
      <Header />

      <div className="px-6 pb-10 pt-28 flex justify-center">
        <div className="w-full max-w-[960px] mx-auto">{renderConteudo()}</div>
      </div>

      <Footer />
    </main>
  );
}
