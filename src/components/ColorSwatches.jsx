import { useContext, useState } from "react";
import { ColorContext } from "../context";
import "./ColorSwatches.css";

function Swatch({ name, hex, selected, onSelect }) {
  return (
    <li
      className={selected ? "selected" : ""}
      style={{ backgroundColor: hex }}
      onClick={onSelect}
    ></li>
  );
}

function ColorSwatches() {
  const colorContext = useContext(ColorContext);

  return (
    <ul id="colorSwatches">
      {colorContext.colors.map((itm) => (
        <Swatch
          key={itm.name}
          {...itm}
          selected={itm === colorContext.color}
          onSelect={() => colorContext.setColor(itm)}
        />
      ))}
    </ul>
  );
}

export default ColorSwatches;
