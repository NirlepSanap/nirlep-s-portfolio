import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaPinterest, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/NirlepSanap/Nirlep-Saanap"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://x.com/sanap_nirlep?t=eWM9VSIg4HsePqYKN6LiSw&s=08"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/nirlep-sanap-64157423b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://pin.it/5bi5Pmje1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPinterest size={24} />
      </a>
      <a
        href="https://discord.com/channels/@me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord size={24} />
      </a>
      <a
        href="https://www.instagram.com/nirlep_24?igsh=anpuZ2VmOGtyMG5p"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;
