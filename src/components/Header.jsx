import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);

  const activeTabStyles = `header__navigation-tab header__navigation-tab--active`;
  const burgerMenuStyles = 'header__burger-menu--opened';
  const navigationCloseStyles = 'header__navigation--closed';

  const clickBurgerMenu = () => {
    setBurgerMenuToggle(!burgerMenuToggle);
  };

  return (
    <>
      <div
        className={burgerMenuToggle ? burgerMenuStyles : 'header__burger-menu'}
        onClick={clickBurgerMenu}></div>
      <nav className={burgerMenuToggle ? 'header__navigation' : navigationCloseStyles}>
        <NavLink
          to="/"
          onClick={clickBurgerMenu}
          className={({ isActive }) => isActive ? activeTabStyles : 'header__navigation-tab'}
        >
          Конвертер
        </NavLink>
        <NavLink
          to="/currencys"
          onClick={clickBurgerMenu}
          className={({ isActive }) => isActive ? activeTabStyles : 'header__navigation-tab'}
        >
          Курсы валют
        </NavLink>
      </nav>
    </>
  );
};

export default Header;