import React from 'react';
import style from './Footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.text_section}>
          <div className={style.column}>
            <h4>Informacion</h4>
            <ul>
              <li>Primeros pasos</li>
              <li>Blog</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className={style.category_column}>
            <div className={style.column}>
              <h4>Categorias</h4>
              <ul>
                <li className={style.highlighted}>Aspiracion</li>
                <li>Robot Aspiradora</li>
                <li>Aspiradoras Verticales</li>
                <li>Fregonas Electricas</li>
              </ul>
            </div>
            <div className={style.column}>
              <h4>&nbsp;</h4>
              <ul>
                <li className={style.highlighted} >Cocina</li>
                <li>Robot Cocina</li>
                <li>Freidora sin aceite</li>
                <li>Cafetera</li>
              </ul>
            </div>
            <div className={style.column}>
              <h4>&nbsp;</h4>
              <ul>
                <li className={style.highlighted}>Soporte</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.icon_container}>
            <FaFacebook className={style.Icon} />
            <FaInstagram className={style.Icon}/>
            <FaYoutube className={style.Icon}/>
            <FaWhatsapp className={style.Icon}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
