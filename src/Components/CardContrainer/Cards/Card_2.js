import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import "./Card.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    marginTop: "22px",
    width: 150,
    height: 40,
    borderRadius: "0px 0px 12px 12px",
  },
});
function Cards_1(props) {
  const classes = useStyles();
  return (
    <>
      <div className="card_1">
        <img src={props.image} />
        <div className="price_tage">
          <Button
            disableElevation
            variant="contained"
            color="secondary"
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
          <ButtonGroup size="small" variant="contained" disableElevation>
            <Button className={classes.root} startIcon={<FavoriteBorderIcon />}>
              WISHLIST
            </Button>
            <Button
              className={classes.root}
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

export default Cards_1;
