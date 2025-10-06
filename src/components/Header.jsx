import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";
import "./styles/header.css";

export default function Header({ onToggleTheme, theme }) {
  return (
    <header className="App-header header">
      <picture className="header__logo"></picture>
      <h2 className="header__text">Extensions</h2>
      <button className="header__light-mode button" onClick={onToggleTheme}>
        <img src={theme === "dark" ? sunIcon : moonIcon} alt="Switch theme" />
      </button>
    </header>
  );
}
