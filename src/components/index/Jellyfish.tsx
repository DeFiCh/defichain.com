import React, { useRef } from "react";
import { GLTFResult } from "types/gltf";
import useWebGlEnabled from "@hooks/useWebGIEnabled";
import { BufferGeometry, Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { Canvas, Euler, useFrame, Vector3 } from "@react-three/fiber";

export function Jellyfish({
  position,
  rotation,
}: {
  position: Vector3;
  rotation: Euler;
}) {
  const meshRef = useRef<Mesh<BufferGeometry>>(null);

  useFrame(({ clock }) => {
    if (
      meshRef === undefined ||
      meshRef === null ||
      meshRef.current === undefined ||
      meshRef.current === null
    )
      return;
    const elapsedSeconds = clock.getElapsedTime();
    meshRef.current.position.x = 10 * Math.sin(elapsedSeconds) + position[0];
    meshRef.current.position.y = 10 * Math.cos(elapsedSeconds) + position[1];
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={[0.5, 0.5, 0.5]}
    >
      <Model />
    </mesh>
  );
}

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/jellyfish.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.72, -0.36, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-9.66, 1.68, -610.69]}>
              <mesh
                // @ts-ignore
                geometry={nodes.Object_5.geometry}
                material={materials.Jelly}
              />
              <mesh
                // @ts-ignore
                geometry={nodes.Object_6.geometry}
                material={materials.Jelly}
              />
              <mesh
                // @ts-ignore
                geometry={nodes.Object_7.geometry}
                material={materials.Jelly}
              />
              <mesh
                // @ts-ignore
                geometry={nodes.Object_8.geometry}
                material={materials.Jelly}
              />
              <mesh
                // @ts-ignore
                geometry={nodes.Object_9.geometry}
                material={materials.Jelly}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/jellyfish.gltf");

interface ViewProps {
  position: Vector3;
  rotation: Euler;
  containerStyle?: string;
}
interface JellyfishBackgroundProps {
  desktop: ViewProps;
  tablet?: ViewProps;
  mobile?: ViewProps;
}

export function JellyfishBackground({
  desktop,
  tablet,
  mobile,
}: JellyfishBackgroundProps): JSX.Element {
  const isWebGlEnabled = useWebGlEnabled();
  if (!isWebGlEnabled) {
    /* eslint-disable react/jsx-no-useless-fragment */
    return <></>;
  }

  return (
    <>
      <div
        className={`hidden lg:block absolute z-[-2] ${
          desktop.containerStyle ?? ""
        }`}
      >
        <Canvas>
          <Jellyfish position={desktop.position} rotation={desktop.rotation} />
          <ambientLight intensity={1} />
        </Canvas>
      </div>
      {tablet !== undefined && (
        <div
          className={`hidden md:block lg:hidden absolute z-[-2] top-0 ${
            tablet.containerStyle ?? ""
          }`}
        >
          <Canvas>
            <Jellyfish position={tablet.position} rotation={tablet.rotation} />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
      )}
      {mobile !== undefined && (
        <div
          className={`block md:hidden absolute z-[-2] top-0 w-screen h-screen ${
            mobile.containerStyle ?? ""
          }`}
        >
          <Canvas>
            <Jellyfish position={mobile.position} rotation={mobile.rotation} />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
      )}
    </>
  );
}
