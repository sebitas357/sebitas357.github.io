import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [clicked, setclicked] = useState(false);
  const [navbarScrolled, setnavbarScrolled] = useState(false);

  const handleClick = () => {
    setclicked(!clicked);
  };

  const handleScroll = () => {
    if(window.scrollY > 20){
      setnavbarScrolled(true);
    }else{
      setnavbarScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);


    return (
      <nav  className={'navbarDefault ' + (navbarScrolled && 'navbarScrolled')}>
        <div className="container navbarItems">
          <Link href="/">
            <a>
              <h1 className="navbar-icon">
                <FontAwesomeIcon icon={faReact} className="navarIconSvg" />
                <span className="stackdigital">StackDigital<span>.</span></span>
              </h1>
            </a>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={clicked ? faTimes : faBars}
            ></FontAwesomeIcon>
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.url}>
                    <a className={item.cName}> {item.title} </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="contBtnsNavbar">
            <a >
              <button className={"first_boton "+ (navbarScrolled && 'first_boton_scrolled')}>
                Ingresar
              </button>
            </a>
            <a >
              <button className={"secon_boton "+ (navbarScrolled && 'secon_boton_scrolled')}>
                Comenzar
              </button>
            </a>
            {/* 
            <Button>Cursos</Button>
            */}
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
