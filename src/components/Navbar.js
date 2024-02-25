import React, { useState } from "react";
import { HiMenu, HiArrowLeft } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="d-flex justify-content-around align-items-center py-2 menu-lg">
        <h1 className="logo mb-0">Shivu Roopesh</h1>

        <ul className="d-flex justify-content-around">
          <li className="menu-item">
            <a href="#about">About</a>
          </li>
          <li className="menu-item">
            <a href="#experience">Skills</a>
          </li>
          <li className="menu-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-around align-items-center py-2 menu-sm">
        <h1 className="logo mb-0 text-nowrap">Shivu Roopesh</h1>
        <div className="toggler">
          {open ? (
            <HiArrowLeft className="toggler-button " onClick={handleOpen} />
          ) : (
            <HiMenu className="toggler-button " onClick={handleOpen} />
          )}
          <ul className={open ? 'mobile-menu menu-open':'mobile-menu'}>
            <li className="menu-item">
              <a href="#about">About</a>
            </li>
            <li className="menu-item">
              <a href="#experience">Skills</a>
            </li>
            <li className="menu-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="menu-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
