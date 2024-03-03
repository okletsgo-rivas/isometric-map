import { useContext } from "react";
import { DataContext } from "../../context";
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
  const ctx = useContext(DataContext);

  return (
    <div>
      <ul id="colorSwatches">
        {ctx.colors.map((itm) => (
          <Swatch
            key={itm.name}
            {...itm}
            selected={itm === ctx.color}
            onSelect={() => ctx.setColor(itm)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ColorSwatches;
