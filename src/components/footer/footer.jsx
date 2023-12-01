import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/LogoTanganFooter.png"
import logoFb from "../../assets/fb.png"
import logoX from "../../assets/twt.png"
import logoIg from "../../assets/ig.png"
import logoSkilvul from "../../assets/skilvul.png"


function Footer() {
  return (
    <footer className="footer p-10 bg-[#18978F] text-white font-poppins">
      <aside className="grid justify-items-center">
        <img src={logoFooter} width={210} alt="Bubu.id" />

        <nav className="relative left-6">
          <header className="footer-title text-center font-poppins">
            Social Media
          </header>
          <div className="grid grid-flow-col gap-8">
            <Link to="">
              <img src={logoFb}width={24} alt="" />
            </Link>
            <Link to="">
              <img src={logoX} width={24} alt="" />
            </Link>
            <Link to="">
              <img src={logoIg} width={24} alt="" />
            </Link>
          </div>
        </nav>
      </aside>
      <nav>
        <header className="footer-title">Daftar</header>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/aboutbullying" className="link link-hover">
          About Bullying
        </Link>
        <Link to="/konseling" className="link link-hover">
          Konseling
        </Link>
        <Link to="/artikel" className="link link-hover">
          Artikel
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link to="/aboutus" className="link link-hover">
          About us
        </Link>
        <a className="link link-hover">Contact</a>
        <Link to="/" className="link link-hover">
          Forum
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Partner</header>
        <img src={logoSkilvul} width={100} alt="Skilvul" />
      </nav>
    </footer>
  );
}

export default Footer;
