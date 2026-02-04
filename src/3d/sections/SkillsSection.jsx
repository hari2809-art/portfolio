import React, { useRef } from 'react'
import { Text, Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei'

const SkillOrb = ({ position, name, color }) => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh position={position}>
                <icosahedronGeometry args={[1, 2]} />
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.3}
                    radius={1}
                    transparent
                    opacity={0.8}
                />
                <Text
                    position={[0, 0, 1.2]}
                    fontSize={0.3}
                    color="#1a1a1a"
                    anchorX="center"
                    anchorY="middle"
                    fontWeight="bold"
                >
                    {name}
                </Text>
            </mesh>
        </Float>
    )
}

const SkillsSection = ({ position }) => {
    const skills = [
        { name: 'Python', color: '#0070f3' },
        { name: 'Java', color: '#7928ca' },
        { name: 'Web Dev', color: '#ff0080' },
        { name: 'ML', color: '#00dfd8' },
        { name: 'MySQL', color: '#ff4d4d' },
    ]

    return (
        <group position={position}>
            {skills.map((skill, i) => (
                <SkillOrb
                    key={i}
                    position={[
                        Math.sin((i / skills.length) * Math.PI * 2) * 5,
                        Math.cos((i / skills.length) * Math.PI * 2) * 3,
                        0
                    ]}
                    name={skill.name}
                    color={skill.color}
                />
            ))}
            <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
        </group>
    )
}

export default SkillsSection
