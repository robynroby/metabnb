import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import Modal from "./Modal";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-12 lg:px-100 mt-43 h-12">
      <div>
        <img src={Logo} alt="" loading="lazy" />
      </div>

      
      <div className="hidden lg:flex justify-center items-center gap-12 text-xl">
        <Link to="/" className="nav__link">
          Home
        </Link>
        <Link to="/places-to-stay" className="nav__link">
          Places To Stay
        </Link>
        <Link to="/" className="nav__link">
          NFTs
        </Link>
        <Link to="/" className="nav__link">
          Community
        </Link>
      </div>

      <button
        className="h-12 rounded-xl hidden lg:flex justify-center items-center w-btn bg-gradient-to-t from-primary to-primary text-white font-default font-light font-base"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Connect Wallet
      </button>

      <svg class="w-8 h-8 lg:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </nav>
  );
};

export default Navbar;
