import React from 'react'
import { RoundedBox } from '@react-three/drei'

const DeskSurface = ({ position }) => {
    return (
        <group position={position}>
            {/* Table Top - Light Oak or Marble */}
            <RoundedBox args={[20, 0.5, 10]} radius={0.05} receiveShadow>
                <meshPhysicalMaterial
                    color="#f5efe6"
                    roughness={0.1}
                    metalness={0.05}
                    clearcoat={0.8}
                    clearcoatRoughness={0.1}
                />
            </RoundedBox>

            {/* Table Legs - Brushed Aluminum */}
            <mesh position={[-9, -4.75, -4.5]} castShadow>
                <boxGeometry args={[0.5, 9, 0.5]} />
                <meshStandardMaterial color="#cccccc" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[9, -4.75, -4.5]} castShadow>
                <boxGeometry args={[0.5, 9, 0.5]} />
                <meshStandardMaterial color="#cccccc" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[-9, -4.75, 4.5]} castShadow>
                <boxGeometry args={[0.5, 9, 0.5]} />
                <meshStandardMaterial color="#cccccc" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[9, -4.75, 4.5]} castShadow>
                <boxGeometry args={[0.5, 9, 0.5]} />
                <meshStandardMaterial color="#cccccc" metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    )
}

export default DeskSurface
