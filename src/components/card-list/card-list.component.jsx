import React from "react";
// We import our css for the component CardList(where the cards are going to be)
import "./card-list.style.css";
import { Card } from "../card/card.component";
export const CardList = (props) => {
  // Props is a object that contains the data that is in the CadrList tag, if it is between the tags it save the info in children, also we can pass info with the properties
  //   Props is a object that have an array inside it, i think that whhen we return this, it renders every iten inside props.children
  //   className:It's a class from the css file
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
