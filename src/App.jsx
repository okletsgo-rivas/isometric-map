import { useEffect, useState } from "react";

import { ColorContext, colors } from "./context";
import Tile from "./components/Tile";
import ColorSwatches from "./components/ColorSwatches";

import "./App.css";

function App() {
  const [color, setColor] = useState(colors[0]);
  const [zoom, setZoom] = useState(1);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const size = 50;
  const width = 12; // 1200
  const height = 12; // 1200
  const grid = [...Array(width).keys()]
    .map((i) =>
      [...Array(height).keys()].map((j) => (
        <Tile key={`${i}-${j}`} i={i} j={j} />
      ))
    )
    .flat();

  const onWheel = (e) => {
    setZoom((prev) => {
      const newVal = e.deltaY < 0 ? prev + 0.5 : prev - 0.5;
      return Math.max(0.5, newVal);
    });
  };

  const onMouseDown = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosX((prev) => prev + e.movementX);
    setPosY((prev) => prev + e.movementY);
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    document.addEventListener("wheel", onWheel);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("wheel", onWheel);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <ColorContext.Provider value={{ color, setColor, colors }}>
      <div
        id="grid"
        style={{
          width: width * 50,
          height: height * 50,
          scale: zoom.toString(),
          marginTop: posY,
          marginLeft: posX,
        }}
      >
        {grid}
      </div>
      <ColorSwatches />
    </ColorContext.Provider>
  );
}

export default App;
