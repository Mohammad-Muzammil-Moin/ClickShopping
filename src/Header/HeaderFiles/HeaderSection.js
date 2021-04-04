import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Logo from "../download.png";
import Hidden from "@material-ui/core/Hidden";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchMenu from "./SearchMenu";
import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "../Header.css";
function HeaderSection(props) {
  return (
    <>
      <div className="Header_container">
        <Hidden lgUp>
          <MenuOutlinedIcon />
        </Hidden>
        <div className="Logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="Icons">
          <IconButton>
            <SearchMenu />
          </IconButton>
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
