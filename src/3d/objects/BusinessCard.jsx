import React from 'react'
import { RoundedBox, Text } from '@react-three/drei'

const BusinessCard = ({ position, rotation }) => {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[2.5, 0.02, 1.4]} radius={0.02} castShadow>
                <meshPhysicalMaterial
                    color="#ffffff"
                    roughness={0.1}
                    metalness={0.05}
                    clearcoat={0.3}
                />
            </RoundedBox>
            <group position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <Text fontSize={0.12} color="#1a1a1a" position={[0, 0.3, 0.01]} fontWeight="bold">
                    HARINATH GURRAM
                </Text>
                <Text fontSize={0.08} color="#0070f3" position={[0, 0.05, 0.01]} fontWeight="bold">
                    AI & ML ENGINEER
                </Text>
                <group position={[0, -0.25, 0.01]}>
                    <Text fontSize={0.05} color="#666" position={[-0.8, 0, 0]} anchorX="left">
                        • LINKEDIN
                    </Text>
                    <Text fontSize={0.05} color="#666" position={[0, 0, 0]} anchorX="center">
                        • GITHUB
                    </Text>
                    <Text fontSize={0.05} color="#666" position={[0.8, 0, 0]} anchorX="right">
                        • EMAIL
                    </Text>
                </group>
                <Text fontSize={0.04} color="#999" position={[0, -0.5, 0.01]}>
                    Bungoma-based | Data | Software | Intelligent Systems
                </Text>
            </group>
        </group>
    )
}

export default BusinessCard
