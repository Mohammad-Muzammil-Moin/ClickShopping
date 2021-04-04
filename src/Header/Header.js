import React, { useState } from "react";
import HeaderSection from "./HeaderFiles/HeaderSection";
import "./Header.css";
function Header() {
  const [search, setsearch] = useState(false);
  const handleClick = () => {
    setsearch(!search);
  };

  return (
    <>
      <div className="header">
        <HeaderSection />
      </div>
    </>
  );
}

export default Header;
