import React from 'react'
import { Text, RoundedBox } from '@react-three/drei'

const ContactButton = ({ position, label, color }) => {
    return (
        <group position={position}>
            <RoundedBox args={[2.5, 0.8, 0.1]} radius={0.1}>
                <meshStandardMaterial color={color} transparent opacity={0.1} roughness={0} />
            </RoundedBox>
            <Text position={[0, 0, 0.06]} fontSize={0.2} color="#1a1a1a" fontWeight="bold">
                {label}
            </Text>
            <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[2.6, 0.9]} />
                <meshBasicMaterial color={color} transparent opacity={0.05} />
            </mesh>
        </group>
    )
}

const ContactSection = ({ position }) => {
    return (
        <group position={position}>
            <Text position={[0, 2, 0]} fontSize={0.5} color="#1a1a1a" fontWeight="bold">
                GET IN TOUCH
            </Text>

            <ContactButton position={[0, 0.8, 0]} label="LINKEDIN" color="#0070f3" />
            <ContactButton position={[0, -0.2, 0]} label="GITHUB" color="#7928ca" />
            <ContactButton position={[0, -1.2, 0]} label="EMAIL" color="#ff0080" />
            <ContactButton position={[0, -2.2, 0]} label="RESUME" color="#00dfd8" />
        </group>
    )
}

export default ContactSection
