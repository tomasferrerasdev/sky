import { Wireframe } from "@react-three/drei";
import * as THREE from "three";

export const Trapezoid = ({
  widthTop,
  widthBottom,
  height,
  depth,
}: {
  widthTop: number;
  widthBottom: number;
  height: number;
  depth: number;
}) => {
  const vertices = new Float32Array([
    -widthBottom / 2,
    -height / 2,
    depth / 2,
    widthBottom / 2,
    -height / 2,
    depth / 2,
    -widthBottom / 2,
    -height / 2,
    -depth / 2,
    widthBottom / 2,
    -height / 2,
    -depth / 2,

    -widthTop / 2,
    height / 2,
    depth / 2,
    widthTop / 2,
    height / 2,
    depth / 2,
    -widthTop / 2,
    height / 2,
    -depth / 2,
    widthTop / 2,
    height / 2,
    -depth / 2,
  ]);
  const indices = [
    0, 2, 1, 2, 3, 1, 1, 3, 5, 3, 7, 5, 5, 7, 4, 7, 6, 4, 4, 6, 0, 6, 2, 0, 2,
    6, 3, 6, 7, 3, 4, 0, 5, 0, 1, 5,
  ];

  const geometry = new THREE.BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="white" side={THREE.DoubleSide} />
    </mesh>
  );
};
