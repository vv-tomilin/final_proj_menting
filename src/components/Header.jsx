import { NavLink } from "react-router-dom";

const Header = () => {

  const activeTabStyles = 'app__navigation-tab app__navigation-tab--active';

  return (
    <nav className='app__navigation'>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? activeTabStyles : 'app__navigation-tab'}
      >
        Конверер
      </NavLink>
      <NavLink
        to="/currencys"
        className={({ isActive }) => isActive ? activeTabStyles : 'app__navigation-tab'}
      >
        Курсы валют
      </NavLink>
      <NavLink
        to="/cripto"
        className={({ isActive }) => isActive ? activeTabStyles : 'app__navigation-tab'}
      >
        Курсы криптовалют
      </NavLink>
    </nav>
  );
};

export default Header;