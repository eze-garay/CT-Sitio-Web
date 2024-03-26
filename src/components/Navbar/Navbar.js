
import React, { useState } from 'react';
import Style from './Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";
import logo from './assests/logo.png';
import { Link } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const links = [
        { id: 1, link: "Aspiradoras", to: "/Aspiradoras", options: ["Robot Aspiradora", "Aspiradoras Verticales", "Fregonas Electricas"] },
        { id: 2, link: "Cocinas", to: "/Cocinas", options: ["Robot Cocina", "Freidora sin aceite", "Cafetera"] },
        { id: 3, link: "Soporte", to: "/Soporte", options: [] },
        // { id: 4, link: "Home", to: "/Home", options: [] }
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
                <Link to="/">
                <img className={Style.logo} src={logo} alt='logo'/>
                </Link>
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
    
            <div className={`${Style.menuContainer} ${navBarOpen ? Style.open : ''}`}>
                <div className={Style.menuTopOpen}>
                    <div>
                        <img className={Style.LogoMenuOpen} src={logo} alt='logo' />
                    </div>
                    <div className={Style.closeButtonContainer}>
                        <button className={Style.closeButton} onClick={() => setNavBarOpen(false)}>×</button>
                    </div>
                </div>
                <hr className={Style.divider} />
                <ul className={Style.menuList}>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.to}
                                onClick={() => handleLinkClick(link.id)} 
                                className={activeLink === link.id ? Style.activeLink : null} 
                            >
                                <span>{link.link}</span>
                                <span className={Style.chevronIcon}>{link.link === "Cocinas" || link.link === "Aspiradoras" ? <GoChevronDown/> : <GoChevronRight/>}</span>
                            </Link>
                            {activeLink === link.id && (
                                <ul>
                                    {link.options.map((option, index) => (
                                        <li key={index}>
                                            <Link to={`${link.to}/${option}`} className={Style.optionLink}>
                                                {option}
                                                <span className={Style.chevronIcon}><GoChevronRight/></span>
                                            </Link>
                                        </li>
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
