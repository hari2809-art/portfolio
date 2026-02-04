import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

const GlassModule = ({
    position,
    title,
    subtitle,
    content = [],
    color = "#ffffff",
    scale = 1,
    type = "default"
}) => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        const pointer = state.pointer
        if (meshRef.current) {
            // Subtle floating + pointer following
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -pointer.y * 0.2, 0.1)
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, pointer.x * 0.2, 0.1)

            // Hover scaling
            const targetScale = hovered ? scale * 1.1 : scale
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
        }
    })

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh
                    ref={meshRef}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    {type === "skill" ? (
                        <sphereGeometry args={[0.8, 32, 32]} />
                    ) : (
                        <boxGeometry args={[4, 2.5, 0.2]} />
                    )}

                    <meshPhysicalMaterial
                        transmission={1}
                        thickness={0.5}
                        roughness={0.1}
                        metalness={0.1}
                        color={color}
                        transparent
                        opacity={0.8}
                    />
                </mesh>

                <group position={[0, 0, 0.2]}>
                    <Text
                        position={[0, type === "skill" ? 0 : 0.6, 0.1]}
                        fontSize={type === "skill" ? 0.2 : 0.3}
                        color="#111111"
                        anchorX="center"
                        anchorY="middle"
                        fontWeight="bold"
                    >
                        {title.toUpperCase()}
                    </Text>

                    {subtitle && (
                        <Text
                            position={[0, 0.2, 0.1]}
                            fontSize={0.12}
                            color="#666666"
                            anchorX="center"
                            maxWidth={3.5}
                        >
                            {subtitle}
                        </Text>
                    )}

                    {content.length > 0 && (
                        <group position={[-1.7, -0.3, 0.1]}>
                            {content.map((item, i) => (
                                <Text
                                    key={i}
                                    position={[0, -i * 0.25, 0]}
                                    fontSize={0.1}
                                    color="#444444"
                                    anchorX="left"
                                    maxWidth={3.4}
                                >
                                    • {item}
                                </Text>
                            ))}
                        </group>
                    )}
                </group>
            </Float>
        </group>
    )
}

export default GlassModule
