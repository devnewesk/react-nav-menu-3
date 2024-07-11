import React, { useEffect } from "react";
import { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [ismobile, setismobile] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const detectwidth = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", detectwidth);
    return () => {
      window.removeEventListener("resize", detectwidth);
    };
  }, []);
  let cls;
  if (width < 688 && ismobile) {
    cls = "links-mobile";
  } else {
    cls = "links";
  }
  return (
    <nav>
      <h2 className="logo"> LOGO </h2>
      <ul className={cls}>
        <li>
          <a href="http://"> Home</a>
        </li>
        <li>
          <a href="http://">Gallery</a>
        </li>
        <li>
          <a href="http://">Contact</a>
        </li>
        <li>
          <a href="http://">About us</a>
        </li>
      </ul>
      <button onClick={() => setismobile(!ismobile)} className="btn">
        {ismobile ? <IoCloseSharp size={32} /> : <CiMenuBurger size={32} />}
      </button>
    </nav>
  );
}

export default Navbar;
