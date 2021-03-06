import React from "react";
import Cards from "./Cards/Cards";
import "./CardContainer.css";
import { CardData } from "./CardData";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 680, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 7 },
];

function CardContainer() {
  return (
    <>
      <div className="Container">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
          {CardData.map((items) => (
            <Cards
              key={items.id}
              image={items.image}
              discount={items.discount}
              discountPrice={items.discountPrice}
              StrikePrice={items.orignalPrice}
              title={items.title}
              productDescription={items.productDescription}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CardContainer;
