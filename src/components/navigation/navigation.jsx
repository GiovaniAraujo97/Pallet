import React from 'react'
import './navigation.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';


function Navigation() {
  return (
    <div className='navigation'
    >
      <nav className='nav-menu'>
        <ul className='nav-bar'>
          <img className='imagem-logo' src={logo} alt="" />
          <li>INICIO</li>
          <li>SOBRE NÓS</li>
          <li>SERVIÇOS</li>
          <li>PRODUTOS</li>
          <li>CONTATOS</li>    
            <div className='icons'>
              <FaInstagram className='icon-insta' />
              <FaWhatsapp className='icon-whats' />    
            </div>
        </ul>
      </nav>
    </div>
    
  )
}

export default Navigation;
