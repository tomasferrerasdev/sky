"use client";
import {
  Environment,
  Grid,
  OrbitControls,
  Plane,
  Stage,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Trapezoid } from "./Trapezoid";

export const Sky = () => {
  const maxBarHeight = 2;
  const minBarHeight = 0.01;

  const gridWidth = 52;
  const gridHeight = 7;
  const planeSize = 0.3;
  const spacing = 0.4;

  const planes = [];
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      const posX = (x - gridWidth / 2) * spacing;
      const posY = 0;
      const posZ = (y - gridHeight / 2) * spacing;

      planes.push({ position: [posX, posY, posZ] });
    }
  }

  const extraPlanePosX = (gridWidth - gridWidth / 2) * spacing;
  const extraPlanePosY = 0;
  const extraPlanePosZ = (gridHeight - 1 - gridHeight / 2) * spacing;
  planes.push({ position: [extraPlanePosX, extraPlanePosY, extraPlanePosZ] });

  return (
    <div className="h-screen w-full bg-black">
      <Canvas>
        <Environment preset="sunset" />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <OrbitControls />
        <Stage>
          {planes.map((plane, index) => {
            const height =
              Math.random() * (maxBarHeight - minBarHeight) + minBarHeight;
            const adjustedPosY = plane.position[1] + height / 2;
            return (
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                key={index}
                position={
                  new THREE.Vector3(
                    plane.position[0],
                    adjustedPosY,
                    plane.position[2]
                  )
                }
              >
                <boxGeometry args={[planeSize, planeSize, height]} />
                <meshStandardMaterial color="white" />
              </mesh>
            );
          })}
          <Grid
            renderOrder={-1}
            position={[0, -0.5, 0]}
            infiniteGrid
            cellSize={0.2}
            cellThickness={0.2}
            sectionSize={3.3}
            sectionThickness={1.5}
            sectionColor={new THREE.Color(0.5, 0.5, 10)}
            fadeDistance={200}
          />
        </Stage>
        <group position={[0, -1, -0.03]}>
          <Trapezoid widthTop={21.5} widthBottom={22} height={1} depth={3.4} />
        </group>
      </Canvas>
    </div>
  );
};
