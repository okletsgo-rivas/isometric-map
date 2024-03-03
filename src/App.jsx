import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MathUtils } from "three";

import { Providers } from "./context";
import TopBar from "./components/layout/TopBar";
import BottomBar from "./components/layout/BottomBar";
import ColorSwatches from "./components/controls/ColorSwatches";
import Coordinates from "./components/controls/Coordinates";
import SelectorSize from "./components/controls/SelectorSize";
import SelectorBox from "./components/controls/SelectorBox";
import TileGrid from "./components/TileGrid";
import Markers from "./components/markers/Markers";

import "./App.css";

function App() {
  const width = 48; // 1200
  const height = 48; // 1200

  return (
    <Providers width={width} height={height}>
      <Canvas
        orthographic
        camera={{
          zoom: 50,
          position: [-20, 20, 20],
          near: -100,
        }}
      >
        <OrbitControls enableRotate={false} enableDamping={false} />
        <ambientLight intensity={1} />

        {/* <group position={[0, 0.01, 0]}>
          <axesHelper args={[5]} />
          <mesh position={[0, 0, 5]}>
            <sphereGeometry args={[0.5, 8, 4]} />
            <meshStandardMaterial color={0x0000ff} />
          </mesh>
          <mesh position={[5, 0, 0]}>
            <sphereGeometry args={[0.5, 8, 4]} />
            <meshStandardMaterial color={0xff0000} />
          </mesh>
          <mesh position={[0, 5, 0]}>
            <sphereGeometry args={[0.5, 8, 4]} />
            <meshStandardMaterial color={0x00ff00} />
          </mesh>
        </group> */}

        <group
          rotation={[MathUtils.degToRad(-90), 0, 0]}
          position={[width / -2, 0, height / 2]}
        >
          <TileGrid />
          <SelectorBox />

          <Markers />
        </group>
      </Canvas>
      <TopBar>
        <div>
          <ColorSwatches />
        </div>
        <div
          style={{ display: "flex", flexGrow: 1, flexDirection: "row-reverse" }}
        >
          <SelectorSize />
        </div>
      </TopBar>
      <BottomBar>
        <div>
          <Coordinates />
        </div>
        <div
          style={{ display: "flex", flexGrow: 1, flexDirection: "row-reverse" }}
        ></div>
      </BottomBar>
    </Providers>
  );
}

export default App;
