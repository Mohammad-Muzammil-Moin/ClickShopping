import React from "react";
import SecondHeader from "./ContentHeaderFiles/SecondHeader";
import "./Components.css";
import Banner from "./Banner/Banner";
import CardContainer from "./CardContrainer/CardContainer";
import CardContainer_2 from "./Card_Container_2/CardContainer_2";

function Components() {
  return (
    <div className="container">
      <SecondHeader />
      <Banner />
      <CardContainer />
      <CardContainer_2 />
    </div>
  );
}

export default Components;
