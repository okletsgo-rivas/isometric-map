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

import "./App.css";

function App() {
  const width = 12; // 1200
  const height = 12; // 1200

  return (
    <Providers width={width} height={height}>
      <Canvas
        orthographic
        camera={{
          zoom: 50,
          position: [20, -30, 20],
          near: -100,
        }}
      >
        <OrbitControls enableRotate={false} enableDamping={false} />
        <ambientLight intensity={3} />
        <group
          rotation={[MathUtils.degToRad(90), 0, 0]}
          position={[width / -2, 0, height / -2]}
        >
          <TileGrid />
          <SelectorBox />
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
