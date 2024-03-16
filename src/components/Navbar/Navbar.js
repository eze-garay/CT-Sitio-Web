import React, { useState } from 'react';
import Style from './Navbar.module.css';
import { FiAlignJustify } from "react-icons/fi";
import logo from './assests/logo.png';
import { Link } from "react-scroll";

const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    const links = [
        { id: 1, link: "Aspiradoras" },
        { id: 2, link: "Cocinas" },
        { id: 3, link: "Soporte" },
        { id: 4, link: "Home" }
    ];

    return (
        <div >
            <div className={Style.navbar}>
            <img className={Style.logo} src={logo} alt='logo'/>
            <button className={Style.categories} onClick={() => setNavBarOpen(!navBarOpen)}>
                <FiAlignJustify size={15} />
                <h1>Categorias</h1>
            </button>
            </div>

            <div>
            {navBarOpen && (
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link to={link.link}>{link.link}</Link>
                        </li>
                    ))}
                </ul>
            )}
            </div>
        </div>
        
    );
};

export default Navbar;
