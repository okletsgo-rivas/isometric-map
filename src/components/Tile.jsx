import { useContext, useState } from "react";
import { ColorContext } from "../context";
import "./Tile.css";

const defaultColor = { name: "default", hex: "#ccc" };

function Tile({ i, j }) {
  const colorContext = useContext(ColorContext);
  const [color, setColor] = useState(defaultColor);

  const onClick = () => {
    const curColor =
      color.name !== defaultColor.name ? defaultColor : colorContext.color;
    setColor(curColor);
  };

  return (
    <mesh position={[i * 1.05, j * 1.05, 0]} onClick={onClick}>
      <edgesGeometry />
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color={color.hex} />
    </mesh>
  );
}

export default Tile;
