"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Float } from "@react-three/drei";
import * as THREE from "three";

const DeveloperCharacter = () => {
  const headRef = useRef();
  const bodyRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();

  useFrame((state) => {
    const { x, y } = state.pointer;
    const time = state.clock.getElapsedTime();

    // Mouse Tracking Head
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, x * 0.6, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -y * 0.4, 0.1);
    }

    // Idle Breathing Animation
    if (bodyRef.current) {
      const breathe = Math.sin(time * 0.8) * 0.05;
      bodyRef.current.scale.set(1 + breathe, 1 + breathe, 1 + breathe);
      bodyRef.current.position.y = breathe * 0.5;
    }

    // Arms Sway
    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(time * 1.5) * 0.1;
      rightArmRef.current.rotation.x = Math.sin(time * 1.5) * 0.1;
    }
  });

  return (
    <group position={[0, 0.8, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Body */}
        <mesh ref={bodyRef} castShadow>
          <RoundedBox args={[1, 1.2, 0.8]} radius={0.15} smoothness={4}>
            <meshPhysicalMaterial 
              color="#1a1a1a" 
              roughness={0.2} 
              metalness={0.8} 
              emissive="#333" 
              emissiveIntensity={0.2} 
            />
          </RoundedBox>
          
          {/* Shoulder Joints */}
          <mesh position={[0.6, 0.3, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#FF4FCB" emissive="#FF4FCB" emissiveIntensity={2} />
          </mesh>
          <mesh position={[-0.6, 0.3, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#FF4FCB" emissive="#FF4FCB" emissiveIntensity={2} />
          </mesh>
        </mesh>

        {/* Head */}
        <group ref={headRef} position={[0, 0.9, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.45, 32, 32]} />
            <meshPhysicalMaterial color="#222" roughness={0.1} metalness={0.9} />
          </mesh>
          {/* Visor / Eye */}
          <mesh position={[0, 0, 0.35]}>
            <RoundedBox args={[0.6, 0.15, 0.1]} radius={0.05}>
              <meshStandardMaterial 
                color="#FF4FCB" 
                emissive="#FF4FCB" 
                emissiveIntensity={5} 
              />
            </RoundedBox>
          </mesh>
          {/* Antennas */}
          <mesh position={[0.2, 0.4, 0]} rotation={[0, 0, 0.2]}>
            <cylinderGeometry args={[0.01, 0.01, 0.3]} />
            <meshStandardMaterial color="#FF4FCB" />
          </mesh>
          <mesh position={[-0.2, 0.4, 0]} rotation={[0, 0, -0.2]}>
            <cylinderGeometry args={[0.01, 0.01, 0.3]} />
            <meshStandardMaterial color="#FF4FCB" />
          </mesh>
        </group>

        {/* Arms */}
        <group ref={leftArmRef} position={[-0.7, 0.3, 0]}>
          <mesh castShadow>
            <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
            <meshPhysicalMaterial color="#111" metalness={0.5} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -0.4, 0]}>
            <boxGeometry args={[0.15, 0.2, 0.2]} />
            <meshStandardMaterial color="#FF4FCB" emissive="#FF4FCB" emissiveIntensity={0.5} />
          </mesh>
        </group>

        <group ref={rightArmRef} position={[0.7, 0.3, 0]}>
          <mesh castShadow>
            <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
            <meshPhysicalMaterial color="#111" metalness={0.5} />
          </mesh>
          {/* Hand */}
          <mesh position={[0, -0.4, 0]}>
            <boxGeometry args={[0.15, 0.2, 0.2]} />
            <meshStandardMaterial color="#FF4FCB" emissive="#FF4FCB" emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Backpack / Tech unit */}
        <mesh position={[0, 0, -0.6]}>
          <boxGeometry args={[0.7, 0.9, 0.3]} />
          <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
          {/* Cooling vents / Glow */}
          <mesh position={[0, 0.2, -0.16]}>
            <planeGeometry args={[0.4, 0.05]} />
            <meshStandardMaterial emissive="#0070f3" emissiveIntensity={4} />
          </mesh>
          <mesh position={[0, 0, -0.16]}>
            <planeGeometry args={[0.4, 0.05]} />
            <meshStandardMaterial emissive="#0070f3" emissiveIntensity={4} />
          </mesh>
        </mesh>
      </Float>
    </group>
  );
};

export default DeveloperCharacter;
