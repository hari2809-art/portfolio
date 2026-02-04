import React from 'react'
import { RoundedBox, Text } from '@react-three/drei'

const Laptop = ({ position, rotation }) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Base - Silver Aluminum */}
            <RoundedBox args={[4, 0.1, 3]} radius={0.05} castShadow>
                <meshPhysicalMaterial color="#e5e5e5" roughness={0.1} metalness={0.8} />
            </RoundedBox>

            {/* Screen */}
            <group position={[0, 1.4, -1.45]} rotation={[-0.2, 0, 0]}>
                <RoundedBox args={[4, 2.8, 0.05]} radius={0.05} castShadow>
                    <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
                </RoundedBox>
                {/* Screen Content */}
                <group position={[0, 0, 0.03]}>
                    <mesh>
                        <planeGeometry args={[3.8, 2.6]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>
                    <Text position={[0, 1, 0.01]} fontSize={0.2} color="#1a1a1a" fontWeight="bold">
                        PROJECT LAB
                    </Text>
                    <group position={[-1.6, 0.4, 0.01]}>
                        <Text fontSize={0.12} color="#0070f3" anchorX="left" fontWeight="bold">
                            Student Management System
                        </Text>
                        <Text position={[0, -0.2, 0]} fontSize={0.08} color="#666" anchorX="left" maxWidth={3}>
                            Java, JavaFX, MySQL. Academic record management.
                        </Text>
                    </group>
                    <group position={[-1.6, -0.4, 0.01]}>
                        <Text fontSize={0.12} color="#0070f3" anchorX="left" fontWeight="bold">
                            YouTube Homepage Clone
                        </Text>
                        <Text position={[0, -0.2, 0]} fontSize={0.08} color="#666" anchorX="left" maxWidth={3}>
                            HTML, CSS, JS. Responsive UI reconstruction.
                        </Text>
                    </group>
                    <Text position={[0, -1.1, 0.01]} fontSize={0.05} color="#999">
                        CLICK TO VIEW ON GITHUB
                    </Text>
                </group>
            </group>
        </group>
    )
}

export default Laptop
