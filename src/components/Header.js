import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header () {

  const [showMenu, setShowMenu] = useState(false);

  const changeClassForLi = () => {
    if (showMenu) {
      return 'menu-nav_item open'
    } else {
      return 'menu-nav_item';
    }
  }

  return (  
    <header>
      <div className='menu-btn' onClick={() => setShowMenu(!showMenu)}>
        <span className={showMenu ? 'menu-btn_burger open' : 'menu-btn_burger'}></span>
      </div>
      <nav className={showMenu? 'nav open' : 'nav'}>      
        <ul className={showMenu? 'menu-nav open' : 'menu-nav'}>
          <li className={changeClassForLi()}>
            <NavLink onClick={() => setShowMenu(!showMenu)} className='menu-nav_link' to='/home'>
              Home
            </NavLink>
          </li>
          <li className={changeClassForLi()}>
            <NavLink onClick={() => setShowMenu(!showMenu)} className='menu-nav_link' to='/about'>
              About
            </NavLink>
          </li>
          <li className={changeClassForLi()}>
            <NavLink onClick={() => setShowMenu(!showMenu)} className='menu-nav_link' to='/projects'>
              Projects
            </NavLink>
          </li>
          <li className={changeClassForLi()}>
            <NavLink onClick={() => setShowMenu(!showMenu)} className='menu-nav_link' to='/contacts'>
              Contacts
            </NavLink>
          </li>
        </ul> 
      </nav>
    </header> 
  );
}
