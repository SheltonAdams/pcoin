import styled from "styled-components/macro";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElement";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavToggleIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
function Navbar({ toggle }) {
  const [scrollNav, SetScrollNav] = useState(false);

  const triggerNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", triggerNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            PurpleCoin
          </NavLogo>
          <NavToggleIcon onClick={toggle}>
            <FaBars />
          </NavToggleIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Hours"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Hours
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Rewards"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Rewards
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin" css={"background:#fff;"}>
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
