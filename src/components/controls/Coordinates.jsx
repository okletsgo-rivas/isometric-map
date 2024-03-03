import { useContext } from "react";
import { DataContext } from "../../context";

function Coordinates() {
  const ctx = useContext(DataContext);
  const style = {
    padding: "0.5em",
    color: "#fff",
    fontSize: "1.5em",
    backgroundColor: "#000",
  };

  return (
    ctx.selectedCoords && (
      <div style={style}>
        [X: {ctx.selectedCoords.x}, Y:{ctx.selectedCoords.y}]
      </div>
    )
  );
}

export default Coordinates;
