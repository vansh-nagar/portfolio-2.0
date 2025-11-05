"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const LaptopModel = React.forwardRef<THREE.Group>((_, ref) => {
  const { scene } = useGLTF("/models/acer-laptop.glb");
  const cloned = React.useMemo(() => scene.clone(true), [scene]);
  return <primitive ref={ref} object={cloned} position={[0, 0, 0]} />;
});

const StandModel = React.forwardRef<THREE.Group>((_, ref) => {
  const { scene } = useGLTF("/models/laptop-stand.glb");
  const cloned = React.useMemo(() => {
    const s = scene.clone(true);
    s.position.set(0, -0.15, 0);
    return s;
  }, [scene]);
  return <primitive ref={ref} object={cloned} position={[0, 0, 0]} />;
});

const TechnicalDifficultiesModel = React.forwardRef<THREE.Group>((_, ref) => {
  const { scene } = useGLTF("/models/technical-difficulties.glb");
  const cloned = React.useMemo(() => {
    const s = scene.clone(true);
    s.position.set(10, 0, 0);
    return s;
  }, [scene]);
  return <primitive ref={ref} object={cloned} position={[0, 0, 0]} />;
});

type ModelComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<THREE.Group>
>;

const Tools = () => {
  const items: { id: string; Component: ModelComponent }[] = [
    { id: "laptop", Component: LaptopModel },
    { id: "stand", Component: StandModel },
    { id: "technical-difficulties", Component: TechnicalDifficultiesModel },
  ];

  return (
    <section className="my-5 w-full">
      <header className="font-bold text-xl">Tools</header>

      <div className="grid grid-cols-2 gap-3 mt-2">
        {items.map(({ id, Component }) => {
          const modelRef = useRef<THREE.Group>(null);
          const controlsRef = useRef<any>(null);

          useEffect(() => {
            if (modelRef.current && controlsRef.current) {
              controlsRef.current.target.copy(modelRef.current.position);
            }
          }, [modelRef.current]);

          return (
            <div
              key={id}
              className="w-full h-[250px] border rounded-md shadow-inner"
            >
              <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <Component ref={modelRef} />
                </Suspense>
                <OrbitControls ref={controlsRef} />
              </Canvas>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
