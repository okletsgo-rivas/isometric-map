import { Text } from "@react-three/drei";
import { useRef } from "react";
import { MathUtils } from "three";

function Flag({ data }) {
  const planeRef = useRef();
  const {
    coords: [x, y],
    title,
  } = data;
  const width = 7;
  const height = 7;

  return (
    <group position={[x, y, 0]}>
      <group position={[0, 0, 0.01]}>
        <mesh position={[width / 2, height / 2, 0]}>
          <planeGeometry ref={planeRef} args={[width, height]} />
          <meshStandardMaterial color="blue" opacity={0.75} transparent />
        </mesh>
        <lineSegments position={[width / 2, height / 2, 0]}>
          <edgesGeometry attach="geometry" args={[planeRef.current]} />
          <lineBasicMaterial attach="material" color="blue" />
        </lineSegments>
      </group>
      <group
        position={[width / 2, height / 2, 0]}
        rotation={[MathUtils.degToRad(90), MathUtils.degToRad(-45), 0]}
      >
        <mesh>
          <coneGeometry args={[1, 3, 8]} />
          <meshStandardMaterial color={0x0000ff} />
          <directionalLight args={[0xffffff, 8]} />
        </mesh>
        <Text color="black" scale={0.5} position={[0, 2, 0]}>
          {title}
        </Text>
      </group>
    </group>
  );
}

export default Flag;
