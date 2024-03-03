import { useState } from "react";
import { createContext } from "react";

const colors = [
  { name: "red", hex: "#f99" },
  { name: "green", hex: "#9f9" },
  { name: "blue", hex: "#99f" },
  { name: "black", hex: "#444" },
  { name: "white", hex: "#fff" },
];

const defaultColor = { name: "default", hex: "#eee" };

const DataContext = createContext(null);

function Providers({ children, width, height }) {
  const [color, setColor] = useState(colors[0]);
  const [selectedCoords, setSelectedCoords] = useState();
  const [selectionSize, setSelectionSize] = useState(2);

  const [tileData, setTileData] = useState(
    [...Array(width).keys()]
      .map((x) =>
        [...Array(height).keys()].map((y) => ({ x, y, color: defaultColor }))
      )
      .flat()
      .map((_, i) => ({ ..._, i }))
  );

  const onClick = (data) => {
    tileData
      .filter(
        (tile) =>
          tile.x >= data.x &&
          tile.y >= data.y &&
          tile.x < data.x + selectionSize &&
          tile.y < data.y + selectionSize
      )
      .forEach((tile) => {
        tile.color = color.hex;
      });

    setTileData([...tileData]);
  };

  const ctx = {
    tileData,
    onClick,
    color,
    setColor,
    colors,
    selectedCoords,
    setSelectedCoords,
    selectionSize,
    setSelectionSize,
  };

  return <DataContext.Provider value={ctx}>{children}</DataContext.Provider>;
}

export { DataContext, Providers };
