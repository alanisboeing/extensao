import React, { type JSX } from "react";
import { Rocket, Users } from "lucide-react";
import { Header } from "../../components/header/index.js";
import CardAreas from "../../components/card-areas/index.js";
import CardIndicador from "../../components/card-indicador/index.js";
import { CardCandidato } from "../../components/card-candidato/index.js";

type Talento = {
  nome: string;
  area: string;
  link: string;
  foto?: string | null;
};

const AREAS: string[] = [
  "Gestao",
  "Suporte",
  "Marketing",
  "Desenvolvimento",
  "Banco de Dados",
];

const TALENTOS: Talento[] = [
  {
    nome: "Hellen Daros",
    area: "Suporte",
    link: "#",
    foto: "https://media.licdn.com/dms/image/v2/D4E03AQH5hllynzmH9Q/profile-displayphoto-shrink_400_400/B4EZURrgzDGgAg-/0/1739758375551?e=1766016000&v=beta&t=dEDIqNblF4KsEJbqYxEGjiUN94SGqCU_-Buv-cONXOk",
  },
  {
    nome: "Alanis Silva",
    area: "Desenvolvimento",
    link: "#",
    foto: "https://media.licdn.com/dms/image/v2/D4D03AQHpmspD9zx-YA/profile-displayphoto-shrink_400_400/B4DZbwcPmqIEAg-/0/1747790658423?e=1766016000&v=beta&t=TuayRXtwX0d8ZQHhA0d9kugfrFb5wQ8zMprRaEjEQkc",
  },
  {
    nome: "Mariana Santos",
    area: "Gestao",
    link: "#",
    foto: "https://upload.wikimedia.org/wikipedia/commons/0/03/Twitter_default_profile_400x400.png",
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] py-4 px-6 flex justify-center">
      <div className="w-full max-w-[960px] mx-auto">
        <Header />

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
              Conecte-se com talentos especializados para orientacao estrategica
              e tecnica em projetos inovadores e acelere seu crescimento no
              ecossistema de tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-[1fr_minmax(0,320px)] gap-6 items-stretch">
            <CardAreas areas={AREAS} />

            <div className="flex flex-col gap-4 w-full">
              <CardIndicador
                valor={3}
                label="Talentos"
                icone={<Users className="w-5 h-5" />}
                background="linear-gradient(135deg, #c38fff, #8da4ff)"
              />
              <CardIndicador
                valor={5}
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
            {AREAS.map((area) => (
              <button
                key={area}
                className="px-4 py-2 rounded-[10px] border-[1.5px] border-[#d2ceff] bg-[#fbfbff] text-[#5a4df4] font-medium hover:bg-[#f1efff] hover:border-[#5a4df4] transition"
              >
                {area}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 justify-items-center w-full">
            {TALENTOS.map((talento) => (
              <CardCandidato
                key={talento.nome}
                fotoPerfil={talento.foto ?? ""}
                nomeTalento={talento.nome}
                areaAtuacao={talento.area}
                linkPerfil={talento.link}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
