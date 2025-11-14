import { Rocket, Users } from "lucide-react";
import CardAreas from "../components/card-areas";
import CardIndicador from "../components/card-indicador";
import CardCandidato from "../components/card-candidato";
import Header from "../components/header";
import "./Home.css";

const AREAS = [
  "Gestao",
  "Suporte",
  "Marketing",
  "Desenvolvimento",
  "Banco de Dados",
];

const TALENTOS = [
  {
    nome: "Hellen Daros",
    area: "Suporte",
    link: "#",
    foto:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    nome: "Alanis Silva",
    area: "Desenvolvimento",
    link: "#",
    foto:
      "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    nome: "Mariana Santos",
    area: "Gestao",
    link: "#",
    foto:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=facearea&w=400&h=400&q=80",
  },
];

export function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <Header />

        <section className="hero">
          <div className="hero__heading">
            <h1>
              Encontre ou torne-se o talento que impulsiona{" "}
              <span>a inovacao tecnologica</span>
            </h1>
            <p className="hero__body">
              Conecte-se com talentos especializados para orientacao estrategica
              e tecnica em projetos inovadores e acelere seu crescimento no
              ecossistema de tecnologia.
            </p>
          </div>

          <div className="hero__cards">
            <CardAreas areas={AREAS} />

            <div className="hero__indicadores">
              <CardIndicador
                valor={3}
                label="Talentos"
                icone={<Users />}
                background="linear-gradient(135deg, #c38fff, #8da4ff)"
              />
              <CardIndicador
                valor={5}
                label="Areas de Atuacao"
                icone={<Rocket />}
                background="linear-gradient(135deg, #5dc9ff, #6ebeff)"
              />
            </div>
          </div>
        </section>

        <section className="talentos">
          <div className="talentos__heading">
            <h2>
              Encontre seu <span>Talento Ideal</span>
            </h2>
            <p className="talentos__descricao">
              Navegue pelos nossos talentos qualificados e encontre o
              especialista perfeito para acelerar seu projeto de inovacao.
            </p>
          </div>

          <div className="talentos__filtros">
            {AREAS.map((area) => (
              <button key={area}>{area}</button>
            ))}
          </div>

          <div className="talentos__lista">
            {TALENTOS.map((talento) => (
              <CardCandidato
                key={talento.nome}
                fotoPerfil={talento.foto}
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
