import { useEffect, useRef } from 'react'
import useStore from '../store/useStore'

const useNarration = () => {
    const { currentSection, isNarrationEnabled } = useStore()
    const synth = window.speechSynthesis
    const utternanceRef = useRef(null)

    const narratives = [
        "I’m Harinath Gurram, an AI and Machine Learning engineer passionate about data, software, and intelligent systems. Welcome to my digital world.",
        "Welcome to the Skills Data District. Here you can see my expertise in Python, Java, Machine Learning and Web Development.",
        "Entering the Project Lab. Explore some of my key works like the Student Management System and my YouTube clone.",
        "This is my Education Journey. From my high CGPA in B.Tech to strong fundamentals in school, I've always aimed for excellence.",
        "You've reached the Contact Hub. Let's connect on GitHub, LinkedIn or via Email to build something intelligent together."
    ]

    useEffect(() => {
        if (!isNarrationEnabled) {
            synth.cancel()
            return
        }

        // Cancel previous narration
        synth.cancel()

        const speak = () => {
            const utterance = new SpeechSynthesisUtterance(narratives[currentSection])
            utterance.rate = 0.9
            utterance.pitch = 1

            // Try to find a professional sounding male voice
            const voices = synth.getVoices()
            const preferredVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Male'))
            if (preferredVoice) utterance.voice = preferredVoice

            synth.speak(utterance)
            utternanceRef.current = utterance
        }

        // voices might not be loaded initially
        if (synth.getVoices().length === 0) {
            synth.onvoiceschanged = () => speak()
        } else {
            speak()
        }

        return () => synth.cancel()
    }, [currentSection, isNarrationEnabled])

    return null
}

export default useNarration
