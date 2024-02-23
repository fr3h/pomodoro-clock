import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlay, resetTimer } from './timerControlActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRotate } from '@fortawesome/free-solid-svg-icons';
import './TimerControlStyle.scss'

const TimerControl = () => {
    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.isPlaying);
    const sessionLength = useSelector(state => state.sessionLength);

    const handleTogglePlayClick = () => {
        dispatch(togglePlay());
    };

    const handleResetTimerClick = () => {
        dispatch(resetTimer(sessionLength * 60));
    };

    return (
        <div id='timerControlContainer' className='d-flex justify-content-evenly'>
            <FontAwesomeIcon id='start_stop' icon={isPlaying ? faPause : faPlay} size="3x" onClick={handleTogglePlayClick} className='control-button' />
            <FontAwesomeIcon id='reset' icon={faRotate} size="3x" onClick={handleResetTimerClick} className='control-button' />
        </div>
    );
};

export default TimerControl;