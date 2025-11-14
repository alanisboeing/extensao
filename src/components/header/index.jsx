import "./style.css";

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <div className="topbar__logo">RT</div>
        <div>
          <p className="topbar__title">Rede de Talentos</p>
          <span className="topbar__subtitle">Match de especialistas</span>
        </div>
      </div>

      <button className="topbar__button">Administrador</button>
    </header>
  );
}
