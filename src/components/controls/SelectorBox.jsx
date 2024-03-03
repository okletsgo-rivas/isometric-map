import { useContext, useRef } from "react";
import { DataContext } from "../../context";

function SelectorBox() {
  const ctx = useContext(DataContext);
  const planeRef = useRef();

  return !ctx.selectedCoords ? null : (
    <group
      position={[ctx.selectedCoords.x, ctx.selectedCoords.y, 0.01]}
      renderOrder={2}
    >
      <mesh position={[ctx.selectionSize / 2, ctx.selectionSize / 2, 0]}>
        <planeGeometry
          ref={planeRef}
          args={[ctx.selectionSize, ctx.selectionSize]}
        />
        <meshStandardMaterial color={0xffffff} opacity={0.75} transparent />
      </mesh>
      <lineSegments
        position={[ctx.selectionSize / 2, ctx.selectionSize / 2, 0]}
      >
        <edgesGeometry attach="geometry" args={[planeRef.current]} />
        <lineBasicMaterial attach="material" color={0xff0000} linewidth={3} />
      </lineSegments>
    </group>
  );
}

export default SelectorBox;
