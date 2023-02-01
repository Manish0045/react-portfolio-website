import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/MS2.jpg";
import HeaderSocials from "./HeaderSocials";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
  const [text] = useTypewriter({
    words: ['Coder', 'UI/UX developer', 'Web developer', 'Full stack developer'],
    loop: 0,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  });
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Manish Sahani</h1>
        <h3 className="text-light">
          <span>
            {text}
          </span>
          <Cursor
            cursorColor="red"
            cursorStyle="_"
          />
        </h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img
            src={ME}
            alt="me"
            style={{
              marginLeft: "-80px",
              marginTop: "-80px",
            }}
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
