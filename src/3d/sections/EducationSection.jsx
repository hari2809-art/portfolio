import React from 'react'
import { Text, Cylinder } from '@react-three/drei'

const EducationNode = ({ position, year, degree, grade }) => {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#0070f3" />
            </mesh>
            <group position={[0.5, 0, 0]}>
                <Text fontSize={0.3} color="#1a1a1a" anchorX="left" fontWeight="bold">
                    {degree}
                </Text>
                <Text position={[0, -0.4, 0]} fontSize={0.2} color="#0070f3" anchorX="left">
                    {year}
                </Text>
                <Text position={[0, -0.7, 0]} fontSize={0.15} color="#666666" anchorX="left">
                    {grade}
                </Text>
            </group>
        </group>
    )
}

const EducationSection = ({ position }) => {
    return (
        <group position={position}>
            <EducationNode
                position={[0, 2, 0]}
                year="Current"
                degree="B.Tech in AI & ML"
                grade="CGPA 8.52"
            />
            <EducationNode
                position={[1, 0, 0]}
                year="2021"
                degree="Intermediate MPC"
                grade="95.2%"
            />
            <EducationNode
                position={[2, -2, 0]}
                year="2019"
                degree="SSC"
                grade="GPA 9.7"
            />

            {/* Connector Path */}
            <Cylinder args={[0.02, 0.02, 6]} position={[1, 0, -0.1]} rotation={[0, 0, Math.PI / 4]}>
                <meshStandardMaterial color="#0070f3" transparent opacity={0.2} />
            </Cylinder>
        </group>
    )
}

export default EducationSection
