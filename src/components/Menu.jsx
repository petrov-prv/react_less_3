import React from 'react';
import './Menu.css'

export default function Menu () {
  return (
    <ul className="header-menu">
      <li className="header-menu__item"><a className='header-menu__item-link' href="#">Home</a></li>
      <li className="header-menu__item"><a className='header-menu__item-link' href="#">About</a></li>
      <li className="header-menu__item"><a className='header-menu__item-link' href="#">Work</a></li>
      <li className="header-menu__item"><a className='header-menu__item-link' href="#">News</a></li>
      <li className="header-menu__item"><a className='header-menu__item-link' href="#">Contact</a></li>
    </ul>
  );
}