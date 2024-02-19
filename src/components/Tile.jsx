import { useContext, useState } from "react";
import { ColorContext } from "../context";
import "./Tile.css";

function Tile({ i, j }) {
  const colorContext = useContext(ColorContext);
  const [color, setColor] = useState(null);

  const onClick = () => {
    setColor(color ? null : colorContext.color);
  };

  return (
    <div
      className="tile"
      style={{ backgroundColor: color?.hex }}
      onClick={onClick}
    >
      {i}, {j}
    </div>
  );
}

export default Tile;
