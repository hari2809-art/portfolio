import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import useStore from '../store/useStore'

const CameraController = () => {
    const { camera } = useThree()
    const scroll = useScroll()
    const setSection = useStore((state) => state.setSection)
    const lastSection = useRef(0)

    // Camera track through the archive
    const points = [
        { pos: [0, 0, 15], lookAt: [0, 0, 0] },
        { pos: [0, -20, 15], lookAt: [0, -20, 0] },
        { pos: [0, -40, 15], lookAt: [0, -40, 0] },
        { pos: [0, -60, 15], lookAt: [0, -60, 0] },
        { pos: [0, -80, 15], lookAt: [0, -80, 0] },
    ]

    const targetPos = new THREE.Vector3()
    const targetLook = new THREE.Vector3()
    const currentLook = new THREE.Vector3()

    useFrame((state, delta) => {
        const offset = scroll.offset
        const pointer = state.pointer
        const sectionIndex = Math.min(Math.floor(offset * points.length), points.length - 1)

        if (sectionIndex !== lastSection.current) {
            setSection(sectionIndex)
            lastSection.current = sectionIndex
        }

        const sectionProgress = (offset * (points.length - 1)) % 1
        const currentIdx = Math.floor(offset * (points.length - 1))
        const nextIdx = Math.min(currentIdx + 1, points.length - 1)

        const start = points[currentIdx]
        const end = points[nextIdx]

        // Vertical scroll position
        targetPos.set(
            THREE.MathUtils.lerp(start.pos[0], end.pos[0], sectionProgress),
            THREE.MathUtils.lerp(start.pos[1], end.pos[1], sectionProgress),
            THREE.MathUtils.lerp(start.pos[2], end.pos[2], sectionProgress)
        )

        // Mouse Parallax (Tilting the camera)
        const parallaxX = pointer.x * 2
        const parallaxY = pointer.y * 1.5

        targetPos.x += parallaxX
        targetPos.y += parallaxY

        camera.position.lerp(targetPos, 0.1)

        // LookAt target interpolation
        targetLook.set(
            THREE.MathUtils.lerp(start.lookAt[0], end.lookAt[0], sectionProgress),
            THREE.MathUtils.lerp(start.lookAt[1], end.lookAt[1], sectionProgress),
            THREE.MathUtils.lerp(start.lookAt[2], end.lookAt[2], sectionProgress)
        )

        // Add subtle mouse look impact
        targetLook.x += pointer.x * 0.5
        targetLook.y += pointer.y * 0.5

        currentLook.lerp(targetLook, 0.1)
        camera.lookAt(currentLook)
    })

    return null
}

export default CameraController
