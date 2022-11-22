import React, { useState } from "react";
import Link from "next/link";
import Mobile from "./Mobile";

export default function Navbar() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  return (
    <nav className="flex justify-between py-8 bg-white p-2 lg:p-5">
      <div className="flex items-center">
        <h3 className="text-3xl font-medium text-primary">Effiva</h3>
      </div>
      <div className="hidden md:flex items-center space-x-8 lg:flex">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About me</Link>
        <Link href={"/suggestions"}>Suggestions</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button" onClick={handleClick}>
          <svg
            className="w-6 h-6 bi bi-list"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile part */}

      {show && <Mobile handleClick={handleClick}/>}
    </nav>
  );
}
