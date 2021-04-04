import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Banner from "../Banner/Banner";
// import Products from "../Products/Products";
import Hidden from "@material-ui/core/Hidden";
import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Button, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import "./SecondHeader.css";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import DeckIcon from "@material-ui/icons/Deck";
import WatchIcon from "@material-ui/icons/Watch";
import HomeIcon from "@material-ui/icons/Home";
const menu = [
  {
    path: "/health-&-buety",
    icon: <HomeIcon />,
    title: "Health & Bueaty",
    id: 2,
  },
  {
    path: "/kitchen-&-Dining",
    icon: <HomeWorkIcon />,
    title: "Kitchen & Dining",
    id: 3,
  },
  {
    path: "/home-apliences",
    icon: <WatchIcon />,
    title: "Home Apliences",
    id: 4,
  },

  {
    path: "tolls-&-outdoor",
    icon: <DoubleArrowIcon />,
    title: "Tolls & Outdoor",
    id: 5,
  },
  {
    path: "furniture-&-ecoration",
    icon: <DeckIcon />,
    title: "Furniture & Decoration",
    id: 6,
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    color: {
      color: "darkgray",
    },
    btn: {
      marginLeft: "20px",
      color: "darkgray",
    },
  })
);
function SecondHeader() {
  const classes = useStyles();
  return (
    <>
      <Hidden mdDown>
        <div className="Second_header">
          <div className="headerContainer">
            <div className="btn">
              <Button
                className={classes.color}
                startIcon={<MenuOutlinedIcon className={classes.color} />}
                endIcon={<ExpandMoreOutlinedIcon className={classes.color} />}
              >
                CATEGORIES
              </Button>
              <div className="select">
                {menu.map((menu) => (
                  <Link to={menu.path} className="menu" key={menu.id}>
                    <span>{menu.icon}</span>
                    <p>{menu.title}</p>
                  </Link>
                ))}
              </div>
            </div>
            <Button className={classes.btn} endIcon={<LocalMallOutlinedIcon />}>
              SHOP
            </Button>
          </div>
        </div>
      </Hidden>
      {/* <Banner /> */}
      {/* <Products /> */}
    </>
  );
}

export default SecondHeader;
