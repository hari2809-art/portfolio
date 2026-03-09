"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import DeveloperCharacter from "./DeveloperCharacter";
import DeveloperWorkspace from "./DeveloperWorkspace";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Scene3D = () => {
  return (
    <div className="w-full h-full opacity-60">
      <Canvas shadows gl={{ antialias: true }}>
        <SceneInternal />
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.4} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

const SceneInternal = () => {
  const cameraRef = useRef();

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (state.camera) {
      // Direct camera position parallax
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 2, 0.05);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.5 + y * 1.5, 0.05);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.5, 6]} fov={45} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 2.5} 
        maxPolarAngle={Math.PI / 1.8} 
        minAzimuthAngle={-Math.PI / 8}
        maxAzimuthAngle={Math.PI / 8}
      />

      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1500} castShadow shadow-mapSize={1024} />
      <pointLight position={[-10, -10, -10]} intensity={500} color="#FF4FCB" />
      <pointLight position={[0, 2, 0]} intensity={800} color="#0070f3" />

      <Suspense fallback={null}>
        <group position={[0, -1.2, 0]}>
          <DeveloperCharacter />
          <DeveloperWorkspace />
          <ContactShadows opacity={0.4} scale={10} blur={2.4} far={0.8} />
        </group>
        <Environment preset="city" />
      </Suspense>
    </>
  );
};


export default Scene3D;
