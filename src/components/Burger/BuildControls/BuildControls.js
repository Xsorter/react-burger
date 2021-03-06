import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        Current price: <b>{props.price.toFixed(2)}</b>
      </p>
      {controls.map((el) => (
        <BuildControl
          added={() => props.ingredientAdded(el.type)}
          removed={() => props.ingredientRemoved(el.type)}
          key={el.label}
          label={el.label}
          disabled={props.disabled[el.type]}
        />
      ))}
      <button
        onClick={props.ordered}
        disabled={!props.purchaseble}
        className="OrderButton"
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
