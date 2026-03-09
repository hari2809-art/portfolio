"use client";

import { useMemo } from "react";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const DeveloperWorkspace = () => {
  return (
    <group>
      {/* Desk Surface */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[10, 0.15, 5]} />
        <meshPhysicalMaterial 
          color="#050505" 
          roughness={0.1} 
          metalness={0.9} 
          clearcoat={0.5} 
        />
      </mesh>

      {/* Monitor */}
      <group position={[0, 1.2, -1.8]}>
        {/* Stand */}
        <mesh position={[0, -0.6, 0]} castShadow>
          <boxGeometry args={[0.4, 1.2, 0.2]} />
          <meshStandardMaterial color="#111" metalness={0.8} />
        </mesh>
        {/* Frame */}
        <mesh castShadow>
          <RoundedBox args={[3.5, 2.2, 0.1]} radius={0.05}>
            <meshStandardMaterial color="#111" metalness={0.9} />
          </RoundedBox>
        </mesh>
        {/* Screen Glow */}
        <mesh position={[0, 0, 0.051]}>
          <planeGeometry args={[3.3, 2]} />
          <meshStandardMaterial 
            color="#0070f3" 
            emissive="#0070f3" 
            emissiveIntensity={1.5} 
            transparent 
            opacity={0.8} 
          />
        </mesh>
      </group>

      {/* Laptop */}
      <group position={[2, 0.12, 0.5]} rotation={[0, -0.4, 0]}>
        {/* Bottom */}
        <mesh castShadow>
          <RoundedBox args={[1.5, 0.08, 1]} radius={0.02}>
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
          </RoundedBox>
        </mesh>
        {/* Screen */}
        <group position={[0, 0, -0.5]} rotation={[-1.2, 0, 0]}>
          <mesh position={[0, 0.5, 0]} castShadow>
            <RoundedBox args={[1.5, 1, 0.04]} radius={0.02}>
              <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
            </RoundedBox>
          </mesh>
          <mesh position={[0, 0.5, 0.021]}>
            <planeGeometry args={[1.4, 0.9]} />
            <meshStandardMaterial 
              color="#FF4FCB" 
              emissive="#FF4FCB" 
              emissiveIntensity={1.2} 
            />
          </mesh>
        </group>
      </group>

      {/* Notebook Prop */}
      <group position={[-2, 0.12, 0.8]} rotation={[0, 0.2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.04, 1.1]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[0.75, 0.02, 1.05]} />
          <meshStandardMaterial color="#fff" roughness={1} />
        </mesh>
      </group>

      {/* Tablet Prop */}
      <group position={[3, 0.12, -0.5]} rotation={[0, -0.8, 0]}>
        <mesh castShadow>
          <RoundedBox args={[0.7, 0.03, 1]} radius={0.02}>
            <meshStandardMaterial color="#222" metalness={0.9} />
          </RoundedBox>
        </mesh>
        <mesh position={[0, 0.02, 0]}>
          <planeGeometry args={[0.6, 0.9]} rotation={[-Math.PI / 2, 0, 0]} />
          <meshStandardMaterial 
            color="#0070f3" 
            emissive="#0070f3" 
            emissiveIntensity={1} 
          />
        </mesh>
      </group>

      {/* Decorative Lights */}
      <pointLight position={[5, 2, -2]} intensity={400} color="#FF4FCB" />
      <pointLight position={[-5, 2, -2]} intensity={400} color="#0070f3" />
    </group>
  );
};

export default DeveloperWorkspace;
