import React, { useRef } from 'react'
import { Text, Float } from '@react-three/drei'
import GlassModule from './components/GlassModule'

const Scene = () => {
    const skills = [
        { name: 'Python', color: '#3776ab' },
        { name: 'Java', color: '#b07219' },
        { name: 'MySQL', color: '#00758f' },
        { name: 'HTML', color: '#e34c26' },
        { name: 'CSS', color: '#264de4' },
        { name: 'JavaScript', color: '#f7df1e' }
    ]

    return (
        <group>
            {/* SECTION 0: INTRO */}
            <group position={[0, 0, 0]}>
                <Float speed={5} rotationIntensity={0.2} floatIntensity={0.5}>
                    <Text
                        position={[0, 1.5, 0]}
                        fontSize={1.2}
                        color="#111111"
                        anchorX="center"
                        fontWeight="bold"
                    >
                        HARINATH GURRAM
                    </Text>
                    <Text
                        position={[0, 0.2, 0]}
                        fontSize={0.25}
                        color="#0070f3"
                        fontWeight="bold"
                        letterSpacing={0.2}
                    >
                        AI & MACHINE LEARNING ENGINEER
                    </Text>
                    <Text
                        position={[0, -1, 0]}
                        fontSize={0.15}
                        color="#999999"
                    >
                        MOVE CURSOR TO EXPLORE THE ARCHIVE
                    </Text>
                </Float>
            </group>

            {/* SECTION 1: PROJECTS */}
            <group position={[0, -20, 0]}>
                <GlassModule
                    position={[-5, 2, 0]}
                    title="Student Management"
                    subtitle="Java, JavaFX, MySQL"
                    content={["Academic record system", "Role-based access", "Database integration"]}
                    color="#e6f3ff"
                />
                <GlassModule
                    position={[5, -1, 2]}
                    title="YouTube Clone"
                    subtitle="HTML, CSS, JS"
                    content={["UI Reconstruction", "Responsive Design", "Interactive components"]}
                    color="#ffe6e6"
                />
                <GlassModule
                    position={[0, 5, -5]}
                    title="Portfolio 3D"
                    subtitle="Three.js, React"
                    content={["Immersive UX", "Glassmorphism", "R3F / Drei"]}
                    color="#e6ffe6"
                    scale={1.2}
                />
            </group>

            {/* SECTION 2: SKILLS RING */}
            <group position={[0, -40, 0]}>
                <Text position={[0, 4, 0]} fontSize={0.8} color="#1a1a1a" fontWeight="bold">
                    SKILLS RING
                </Text>
                {skills.map((skill, i) => {
                    const angle = (i / skills.length) * Math.PI * 2
                    const radius = 6
                    const x = Math.cos(angle) * radius
                    const z = Math.sin(angle) * radius
                    return (
                        <GlassModule
                            key={i}
                            position={[x, 0, z]}
                            title={skill.name}
                            type="skill"
                            color={skill.color}
                            scale={0.8}
                        />
                    )
                })}
            </group>

            {/* SECTION 3: EDUCATION */}
            <group position={[0, -60, 0]}>
                <GlassModule
                    position={[0, 0, 0]}
                    title="Education Path"
                    subtitle="Academic Milestones"
                    content={[
                        "B.Tech in AI & ML - Current (CGPA 8.52)",
                        "Intermediate MPC - 2021 (95.2%)",
                        "SSC - 2019 (GPA 9.7)"
                    ]}
                    color="#f0f0f0"
                    scale={1.5}
                />
            </group>

            {/* SECTION 4: CONTACT */}
            <group position={[0, -80, 0]}>
                <Float speed={3} rotationIntensity={1}>
                    <GlassModule
                        position={[0, 0, 0]}
                        title="Get In Touch"
                        subtitle="Let's build something intelligent together."
                        content={["GitHub", "LinkedIn", "Email"]}
                        color="#0070f3"
                    />
                </Float>
            </group>
        </group>
    )
}

export default Scene
