import React, { useRef, useMemo } from 'react'
import { Text, Float, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const IntroSection = ({ position }) => {
    const textRef = useRef()

    const particles = useMemo(() => {
        const count = 500
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 12
            positions[i * 3 + 1] = (Math.random() - 0.5) * 4
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5
        }
        return positions
    }, [])

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Text
                    ref={textRef}
                    fontSize={1.5}
                    color="#1a1a1a"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={10}
                >
                    Harinath Gurram
                    <meshStandardMaterial color="#1a1a1a" />
                </Text>
            </Float>

            <Points positions={particles}>
                <PointMaterial
                    transparent
                    color="#0070f3"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.NormalBlending}
                    opacity={0.4}
                />
            </Points>

            <mesh position={[0, -2.5, 0]}>
                <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
                <meshStandardMaterial color="#0070f3" wireframe transparent opacity={0.2} />
            </mesh>

            <pointLight position={[0, 0, 2]} intensity={1} color="#0070f3" />
            <pointLight position={[0, -2, 2]} intensity={0.5} color="#7928ca" />
        </group>
    )
}

export default IntroSection
