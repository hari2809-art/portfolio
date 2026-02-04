import React from 'react'
import { RoundedBox, Text } from '@react-three/drei'

const Notebook = ({ position, rotation }) => {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[2.8, 0.15, 3.8]} radius={0.05} castShadow>
                <meshStandardMaterial color="#f0f0f0" roughness={0.5} />
            </RoundedBox>
            <group position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <Text position={[0, 1.4, 0.01]} fontSize={0.18} color="#222" fontWeight="bold">
                    EDUCATION JOURNEY
                </Text>

                <group position={[-1, 0.9, 0.01]}>
                    <Text fontSize={0.12} color="#0070f3" anchorX="left" fontWeight="bold">
                        B.Tech in AI & ML
                    </Text>
                    <Text position={[0, -0.2, 0]} fontSize={0.08} color="#444" anchorX="left">
                        CGPA 8.52 | Current
                    </Text>
                </group>

                <group position={[-1, 0.3, 0.01]}>
                    <Text fontSize={0.12} color="#0070f3" anchorX="left" fontWeight="bold">
                        Intermediate MPC
                    </Text>
                    <Text position={[0, -0.2, 0]} fontSize={0.08} color="#444" anchorX="left">
                        95.2% | 2021
                    </Text>
                </group>

                <group position={[-1, -0.3, 0.01]}>
                    <Text fontSize={0.12} color="#0070f3" anchorX="left" fontWeight="bold">
                        SSC
                    </Text>
                    <Text position={[0, -0.2, 0]} fontSize={0.08} color="#444" anchorX="left">
                        GPA 9.7 | 2019
                    </Text>
                </group>

                <mesh position={[1, -1, 0]}>
                    <circleGeometry args={[0.3, 32]} />
                    <meshStandardMaterial color="#0070f3" transparent opacity={0.1} />
                </mesh>
            </group>
        </group>
    )
}

export default Notebook
