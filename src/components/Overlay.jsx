import React from 'react'
import useStore from '../store/useStore'
import { Volume2, VolumeX, Mic, MicOff, Move } from 'lucide-react'

const Overlay = () => {
    const {
        currentSection,
        isAudioEnabled,
        toggleAudio,
        isNarrationEnabled,
        toggleNarration
    } = useStore()

    const sections = [
        'The Archive',
        'Project Panes',
        'Skills Ring',
        'Education Shaft',
        'Contact Node'
    ]

    return (
        <div className="overlay">
            <div className="ui-element" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', pointerEvents: 'auto', alignItems: 'center' }}>
                <h1 style={{ margin: 0, fontSize: '0.8rem', letterSpacing: '6px', color: '#111111', fontWeight: 900 }}>THE GLASS ARCHIVE</h1>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                        onClick={toggleNarration}
                        className="glass-panel"
                        style={{ border: 'none', background: 'none', color: '#111111', cursor: 'pointer', padding: '0.6rem' }}
                    >
                        {isNarrationEnabled ? <Mic size={14} /> : <MicOff size={14} />}
                    </button>
                    <button
                        onClick={toggleAudio}
                        className="glass-panel"
                        style={{ border: 'none', background: 'none', color: '#111111', cursor: 'pointer', padding: '0.6rem' }}
                    >
                        {isAudioEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                    </button>
                </div>
            </div>

            {/* Interactive Cursor Status */}
            <div className="ui-element" style={{ position: 'fixed', bottom: '2.5rem', left: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.6 }}>
                <Move size={12} color="#0070f3" />
                <span style={{ fontSize: '0.6rem', letterSpacing: '2px', fontWeight: 700 }}>CURSOR CONTROL ACTIVE</span>
            </div>

            <div className="ui-element" style={{ position: 'fixed', right: '2.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.2rem', pointerEvents: 'auto' }}>
                {sections.map((name, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', cursor: 'pointer', opacity: i === currentSection ? 1 : 0.2, transition: 'all 0.4s' }}>
                        <span style={{ fontSize: '0.55rem', letterSpacing: '3px', fontWeight: 800, display: i === currentSection ? 'block' : 'none' }}>{name.toUpperCase()}</span>
                        <div style={{ width: i === currentSection ? '40px' : '8px', height: '2px', background: '#0070f3' }} />
                    </div>
                ))}
            </div>

            <div className="ui-element" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', pointerEvents: 'none' }}>
                <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.2rem', margin: '0', color: '#111111', fontWeight: 900, letterSpacing: '1px' }}>
                        {sections[currentSection].toUpperCase()}
                    </h2>
                    <div style={{ width: '20px', height: '2px', background: '#0070f3', margin: '0.5rem auto' }} />
                </div>
            </div>
        </div>
    )
}

export default Overlay
