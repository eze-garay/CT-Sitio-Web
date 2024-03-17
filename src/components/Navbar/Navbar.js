import React, { useState } from 'react';
import Style from './Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";
import logo from './assests/logo.png';
import { Link } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";

const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const links = [
        { id: 1, link: "Aspiradoras", to: "/Aspiradoras", options: ["Opción 1", "Opción 2", "Opción 3"] },
        { id: 2, link: "Cocinas", to: "/Cocinas", options: ["Opción 4", "Opción 5", "Opción 6"] },
        { id: 3, link: "Soporte", to: "/Soporte", options: [] },
        { id: 4, link: "Home", to: "/Home", options: [] }
    ];

    const handleLinkClick = (linkId) => {
        if (activeLink === linkId) {
            setActiveLink(null); 
        } else {
            setActiveLink(linkId); 
        }
    };

    return (
        <div>
            <div className={Style.navbar}>
                <div className={Style.navbar1}>
                    <img className={Style.logo} src={logo} alt='logo'/>
                </div>
                <div className={Style.navbar2}>
                    <button className={Style.categories} onClick={() => setNavBarOpen(!navBarOpen)}>
                        <FiAlignJustify size={30} />
                        <p className={Style.categoriesTex} >Categorias</p>
                    </button>
                </div>
                <div className={Style.navbar3}>
                    <form className={Style.search_form}>
                        <input className={Style.search_box} type='text' placeholder='     ¿Qué buscas?'/>
                        <button className={Style.search_button}><TbSearch size={20}/></button>
                    </form>
                </div>
                <div className={Style.navbar4}>
                    <Link to="/contactar" className={Style.contact_button}>
                        <FaRegCommentDots size={25} />
                        <h4>Contactar</h4>
                    </Link>
                </div>
            </div>

            <div className={navBarOpen ? `${Style.navbarOpen}` : ''}>
            <img className={`${Style.logo2}`} src={logo} alt='logo'/>
            <button className={`${Style.closeButton}`} onClick={() => setNavBarOpen(false)}>×</button>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link
                            to={link.to}
                            onClick={() => handleLinkClick(link.id)} 
                            className={activeLink === link.id ? Style.activeLink : null} 
                        >
                            {link.link}
                        </Link>
                        {activeLink === link.id && (
                            <ul>
                                {link.options.map((option, index) => (
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;