import { useContext, useRef } from "react";
import { DataContext } from "../context";

function Tile({ data }) {
  const ctx = useContext(DataContext);
  const planeRef = useRef();

  const { x, y, color } = data;

  const onClick = () => {
    ctx.onClick(data);
  };

  const onOver = () => {
    ctx.setSelectedCoords({ x, y });
  };

  return (
    <group position={[x, y, 0]}>
      <mesh onClick={onClick} onPointerOver={onOver} position={[0.5, 0.5, 0]}>
        <planeGeometry ref={planeRef} args={[1, 1]} />
        <meshStandardMaterial color={color} flatShading />
      </mesh>
      <lineSegments position={[0.5, 0.5, 0]}>
        <edgesGeometry attach="geometry" args={[planeRef.current]} />
        <lineBasicMaterial attach="material" color={0x999999} />
      </lineSegments>
    </group>
  );
}

export default Tile;
