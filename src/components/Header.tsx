import logo from "../assets/pastoral-logo.png";

export default function Header() {
  const now = new Date();

  const month = now.toLocaleString("pt-BR", {
    month: "long",
  });

  return (
    <header className="header">
      <div className="header-content">
        <img
          src={logo}
          alt="Pastoral da Caridade"
          className="header-logo"
        />

        <div className="header-text">
          <h1>Campanha de Arrecadação</h1>

          <p>
            {month.charAt(0).toUpperCase() + month.slice(1)} de{" "}
            {now.getFullYear()}
          </p>
        </div>
      </div>
    </header>
  );
}