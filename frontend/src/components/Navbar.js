import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {motion} from 'framer-motion';

import logo from '../assets/LOGO_NOBG.png';
import { navLinksEn } from "../data.js";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [className, setClassName] = useState("navbar__content-toggle");

  useEffect(() => {
    if (clicked) document.body.style.overflow = "hidden";
    if (!clicked) document.body.style.overflow = "scroll";
  }, [clicked]);

  const clickHandler = (e) => {
    e.preventDefault();
    let obj = e.target;
    if (
      obj.classList.contains("navbar__hamburger") ||
      obj.parentElement.classList.contains("navbar__hamburger")
    ) {
      setClicked(true);
    } else if (
      obj.classList.contains("navbar__close") ||
      obj.parentElement.classList.contains("navbar__close")
    ) {
      setClicked(false);
    }
  };

  return (
    <nav
    className="navbar">
      <div className="navbar__logo">
        <motion.img className="navbar__logo--img" src={logo} alt="website logo" 
        whileInView={{ x: [-200, 0] }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className={clicked ? "" : "navbar__items--hide"}
        whileInView={{ x: [200, 0] }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <ul className="navbar__items">
          {navLinksEn.map((e) => (
            <li
              key={e.id}
              onClick={() => {
                setClicked(false);
              }}
            >
              <Link to={e.url}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => {
                        setClicked(false);
                      }}
              >{e.text}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="navbar__content-toggle">
        {clicked ? (
          <AiOutlineClose className="navbar__close" onClick={clickHandler} />
        ) : (
          <BiMenuAltRight
            onClick={clickHandler}
            className="navbar__hamburger"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
