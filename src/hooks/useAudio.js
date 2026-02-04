import { useEffect, useRef } from 'react'
import useStore from '../store/useStore'

const useAudio = () => {
    const isAudioEnabled = useStore((state) => state.isAudioEnabled)
    const audioContext = useRef(null)
    const oscillator = useRef(null)
    const gainNode = useRef(null)

    useEffect(() => {
        if (!audioContext.current) {
            audioContext.current = new (window.AudioContext || window.webkitAudioContext)()

            // Create a low humming ambient sound (futuristic atmosphere)
            oscillator.current = audioContext.current.createOscillator()
            gainNode.current = audioContext.current.createGain()

            oscillator.current.type = 'sine'
            oscillator.current.frequency.setValueAtTime(40, audioContext.current.currentTime) // Low hum

            // Add a second harmonic
            const osc2 = audioContext.current.createOscillator()
            osc2.type = 'sine'
            osc2.frequency.setValueAtTime(60, audioContext.current.currentTime)

            const filter = audioContext.current.createBiquadFilter()
            filter.type = 'lowpass'
            filter.frequency.setValueAtTime(200, audioContext.current.currentTime)

            oscillator.current.connect(gainNode.current)
            osc2.connect(gainNode.current)
            gainNode.current.connect(filter)
            filter.connect(audioContext.current.destination)

            gainNode.current.gain.setValueAtTime(0, audioContext.current.currentTime)
            oscillator.current.start()
            osc2.start()
        }

        if (isAudioEnabled) {
            if (audioContext.current.state === 'suspended') {
                audioContext.current.resume()
            }
            gainNode.current.gain.setTargetAtTime(0.1, audioContext.current.currentTime, 0.5)
        } else {
            if (gainNode.current) {
                gainNode.current.gain.setTargetAtTime(0, audioContext.current.currentTime, 0.5)
            }
        }
    }, [isAudioEnabled])

    return null
}

export default useAudio
