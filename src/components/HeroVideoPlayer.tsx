// React
import { useEffect, useRef, useState } from 'react';
//Assets
import heroVideo from '../assets/images/hero_video.mp4';
// Components
import { PauseIcon, PlayIcon } from './SvgComponents';

export default function HeroVideoPlayer() {

    // Reference al video
    const videoRef = useRef<any>(null);
    // Stato che gestisce se il video è in pausa o in funzione
    const [isPlaying, setPlaying] = useState(false);
    // Stato che gestisce se il bottone è visibile o meno
    const [isButtonVisible, setButtonVisible] = useState(true);

    // Effetto per far partire il video o metterlo in pausa
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Funzione per gestire la visibilità del pulsante di play/pause
    const handleButtonClick = () => {
        setPlaying(!isPlaying);
        setButtonVisible(true);
    };

    // Mostra il pulsante quando l'utente fa hover sul contenitore video
    const handleMouseEnter = () => setButtonVisible(true);
    const handleMouseLeave = () => isPlaying && setButtonVisible(false);

    return (
        <div
            onTouchStart={handleMouseEnter}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='w-full md:w-3/4 h-auto flex items-center justify-center relative rounded-xl ring-4 ring-custom-borderRingColor dark:ring-dark-borderRingColor'>
            {isButtonVisible && (
                <button
                    aria-label='pulsante play'
                    onClick={handleButtonClick}
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 shadow-2xl absolute z-10 cursor-pointer">
                    <div className='w-12 h-12 flex items-center justify-center rounded-full bg-white'>
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </div>
                </button>
            )}
            <video ref={videoRef} src={heroVideo} typeof='video/mp4' className='rounded-xl' > <track kind="captions" /></video>
        </div>
    );
}
