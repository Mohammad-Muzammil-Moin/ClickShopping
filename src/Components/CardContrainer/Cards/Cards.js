import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import "./Card.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: 124,
    height: 40,
  },
});
function Cards(props) {
  const classes = useStyles();
  return (
    <>
      <div className="card">
        <img src={props.image} />
        <div className="price_tage">
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            size="small"
          >
            {props.discount} % OFF
          </Button>
          <div className="price">
            <span className="new_price">{props.discountPrice}</span>
            <span className="old_price">{props.StrikePrice}</span>
          </div>
        </div>
        <div className="card_description">
          <h4>{props.title}....??</h4>
          <p>{props.productDescription}</p>
        </div>
        <div className="btn">
          <ButtonGroup
            style={{ width: "100%" }}
            size="small"
            variant="contained"
            disableElevation
          >
            <Button className="btn" startIcon={<FavoriteBorderIcon />}>
              WISHLIST
            </Button>
            <Button
              className="btn"
              color="primary"
              startIcon={<ShoppingCartIcon />}
            >
              ADD TO CARt
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

export default Cards;
