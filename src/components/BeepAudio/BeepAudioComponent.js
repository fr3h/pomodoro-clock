import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const BeepAudio = () => {
    const timeLeft = useSelector(state => state.timeLeft);
    const isPlaying = useSelector(state => state.isPlaying); 

    useEffect(() => {
        const audioElement = document.getElementById('beep');

        if (timeLeft === 0) {
            audioElement.play().catch((error) => console.error("Error al reproducir el audio:", error));
        }

        if (!isPlaying) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }

    }, [timeLeft, isPlaying]); 

    return (
        <audio id="beep" preload="auto" src="/audio/153210__freezeman__beep4.wav"></audio>
    );
}

export default BeepAudio;