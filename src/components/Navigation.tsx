"use client";

import { Logo } from "@iyp/components/Logo";
import Image from "next/image";
import magnifyingGlass from "../../public/magnifying-glass.svg";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 bg-transparent p-4 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full flex flex-row justify-between items-start">
        <Logo />
        <div className="flex flex-row items-center">
          <Image src={magnifyingGlass} alt="Search" className="mr-3" />

          <button
            className="mt-1 flex flex-col justify-center items-center w-4 h-4 focus:outline-none"
            onClick={toggleMenu}
          >
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out my-1 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
