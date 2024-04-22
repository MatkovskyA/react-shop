import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <a href="#!" className="logo">Atmosphere</a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item"><a href="#!">О нас</a></li>
            <li className="nav__list-item"><a href="#!">Контакты</a></li>
            <li className="nav__list-item"><a href="#!">Проекты</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header;