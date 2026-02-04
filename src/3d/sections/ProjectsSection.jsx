import React from 'react'
import { Text, Float, RoundedBox } from '@react-three/drei'

const ProjectCard = ({ position, title, tech, description }) => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position}>
                <RoundedBox args={[4, 2.5, 0.1]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#ffffff" transparent opacity={0.6} roughness={0.1} metalness={0.1} />
                </RoundedBox>
                <Text position={[0, 0.8, 0.1]} fontSize={0.25} color="#1a1a1a" fontWeight="bold">
                    {title}
                </Text>
                <Text position={[0, 0.4, 0.1]} fontSize={0.15} color="#0070f3">
                    {tech}
                </Text>
                <Text position={[0, -0.2, 0.1]} fontSize={0.12} color="#444444" maxWidth={3.5} textAlign="center">
                    {description}
                </Text>
                <mesh position={[0, -0.8, 0.1]}>
                    <planeGeometry args={[1, 0.3]} />
                    <meshStandardMaterial color="#0070f3" />
                    <Text position={[0, 0, 0.01]} fontSize={0.1} color="white">
                        VIEW PROJECT
                    </Text>
                </mesh>
            </group>
        </Float>
    )
}

const ProjectsSection = ({ position }) => {
    return (
        <group position={position}>
            <ProjectCard
                position={[-3, 0, 0]}
                title="Student Management"
                tech="Java, JavaFX, MySQL"
                description="A desktop application for managing student records and academic data."
            />
            <ProjectCard
                position={[3, 0, 0]}
                title="YouTube Clone"
                tech="HTML, CSS, JS"
                description="A responsive frontend reproduction of the YouTube homepage interface."
            />
        </group>
    )
}

export default ProjectsSection
