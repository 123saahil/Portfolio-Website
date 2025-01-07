import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-2xl -ml-10">
        <b>PORTFOLIO</b>
      </div>
      <div
        style={{ color: "white" }}
        className="flex items-center justify-center gap-4 text-2xl"
      >
        <a
          href="https://www.linkedin.com/in/saahilmishra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin></FaLinkedin>
        </a>

        <a
          href="https://github.com/123saahil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub></FaGithub>
        </a>

        <a
          href="https://www.instagram.com/saahil.xx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram></FaInstagram>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
