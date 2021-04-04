import React from "react";
import "../CardContrainer/CardContainer.css";
import { CardData_1 } from "../CardContrainer/CardData";
import Cards from "../CardContrainer/Cards/Card_2";
function CardContainer_2() {
  return (
    <>
      <div className="Container_1">
        {CardData_1.map((items) => (
          <div className="card_2">
            <Cards
              key={items.id}
              image={items.image}
              discount={items.discount}
              discountPrice={items.discountPrice}
              StrikePrice={items.orignalPrice}
              title={items.title}
              productDescription={items.productDescription}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardContainer_2;
