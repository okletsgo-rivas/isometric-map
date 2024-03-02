import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MathUtils } from "three";

import { ColorContext, colors } from "./context";
import Tile from "./components/Tile";
import ColorSwatches from "./components/ColorSwatches";

import "./App.css";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [color, setColor] = useState(colors[0]);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const size = 50;
  const width = 120; // 1200
  const height = 120; // 1200
  const grid = [...Array(width).keys()]
    .map((i) =>
      [...Array(height).keys()].map((j) => (
        <Tile key={`${i}-${j}`} i={i} j={j} />
      ))
    )
    .flat();

  // const onWheel = (e) => {
  //   setZoom((prev) => {
  //     const newVal = prev + (e.deltaY < 0 ? 1 : -1);
  //     return Math.max(1, newVal);
  //   });
  // };

  // const onMouseDown = () => {
  //   document.addEventListener("mousemove", onMouseMove);
  //   document.addEventListener("mouseup", onMouseUp);
  // };

  // const onMouseMove = (e) => {
  //   setPosX((prev) => prev + e.movementX);
  //   setPosY((prev) => prev + e.movementY);
  // };

  // const onMouseUp = () => {
  //   document.removeEventListener("mousemove", onMouseMove);
  //   document.removeEventListener("mouseup", onMouseUp);
  // };

  // useEffect(() => {
  //   document.addEventListener("wheel", onWheel);
  //   document.addEventListener("mousedown", onMouseDown);

  //   return () => {
  //     document.removeEventListener("wheel", onWheel);
  //     document.removeEventListener("mousedown", onMouseDown);
  //   };
  // }, []);

  const aspect = window.innerWidth / window.innerHeight;
  const d = 20;

  return (
    <ColorContext.Provider value={{ color, setColor, colors }}>
      <Canvas
        orthographic
        camera={{
          zoom: 50,
          position: [20, -30, 20],
          near: -100,
        }}
      >
        {/* <orthographicCamera
          args={[
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            0.01,
            3000,
          ]}
        /> */}
        <OrbitControls enableRotate={false} enableDamping={false} />
        <ambientLight intensity={Math.PI / 2} />
        <group
          rotation={[MathUtils.degToRad(90), 0, 0]}
          position={[-60, 0, -60]}
        >
          {grid}
        </group>
      </Canvas>
      <ColorSwatches />
    </ColorContext.Provider>
  );
}

export default App;
