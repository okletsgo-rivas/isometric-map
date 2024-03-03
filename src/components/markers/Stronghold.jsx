import { Text } from "@react-three/drei";
import { useRef } from "react";
import { MathUtils } from "three";

function Stronghold({ data }) {
  const planeRef = useRef();
  const {
    coords: [x, y],
    title,
  } = data;
  const width = 6;
  const height = 6;
  // x 750 y 746

  return (
    <group position={[x, y, 0]}>
      <group position={[0, 0, 0.01]}>
        <mesh position={[width / 2, height / 2, 0]}>
          <planeGeometry ref={planeRef} args={[width, height]} />
          <meshStandardMaterial color="red" opacity={0.75} transparent />
        </mesh>
        <lineSegments position={[width / 2, height / 2, 0]}>
          <edgesGeometry attach="geometry" args={[planeRef.current]} />
          <lineBasicMaterial attach="material" color="red" />
        </lineSegments>
      </group>
      <group
        position={[width / 2, height / 2, 0]}
        rotation={[MathUtils.degToRad(90), MathUtils.degToRad(-45), 0]}
      >
        <mesh>
          <sphereGeometry args={[1, 10, 6]} />
          <meshStandardMaterial color={0x0000ff} />
          <directionalLight args={[0xffffff, 8]} />
        </mesh>
        <Text color="black" scale={1} position={[0, 2, 0]}>
          {title}
        </Text>
      </group>
    </group>
  );
}

export default Stronghold;
