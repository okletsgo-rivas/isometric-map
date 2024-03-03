import { useContext } from "react";
import { DataContext } from "../context";
import Tile from "./Tile";

function TileGrid() {
  const ctx = useContext(DataContext);

  return ctx.tileData?.map((itm, i) => <Tile key={"tile_" + i} data={itm} />);
}

export default TileGrid;
