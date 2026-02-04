import React from 'react'
import { RoundedBox, Text } from '@react-three/drei'

const Tablet = ({ position, rotation }) => {
    const skills = ['Python', 'NumPy', 'Pandas', 'Java', 'MySQL', 'Web Dev', 'ML']

    return (
        <group position={position} rotation={rotation}>
            {/* Tablet Base - White/Silver */}
            <RoundedBox args={[2.5, 0.1, 3.5]} radius={0.1} castShadow>
                <meshPhysicalMaterial color="#f0f0f0" roughness={0.1} metalness={0.5} />
            </RoundedBox>
            {/* Screen */}
            <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2.3, 3.3]} />
                <meshBasicMaterial color="#ffffff" />
                <Text position={[0, 1.3, 0.01]} fontSize={0.2} color="#1a1a1a" fontWeight="bold">
                    SKILLS DISTRICT
                </Text>
                <group position={[0, 0, 0]}>
                    {skills.map((skill, i) => (
                        <group key={i} position={[0, 0.8 - i * 0.35, 0.01]}>
                            <mesh position={[-0.8, 0, 0]}>
                                <circleGeometry args={[0.05, 32]} />
                                <meshBasicMaterial color="#0070f3" />
                            </mesh>
                            <Text position={[-0.6, 0, 0]} fontSize={0.12} color="#444" anchorX="left">
                                {skill}
                            </Text>
                        </group>
                    ))}
                </group>
            </mesh>
        </group>
    )
}

export default Tablet
