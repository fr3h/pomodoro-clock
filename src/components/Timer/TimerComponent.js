import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode, updateTimeLeft } from './timerActions';
import './TimerStyle.scss';

const Timer = () => {
    const dispatch = useDispatch();
    const sessionLength = useSelector(state => state.sessionLength);
    const breakLength = useSelector(state => state.breakLength);
    const timeLeft = useSelector(state => state.timeLeft);
    const isSession = useSelector(state => state.isSession);
    const isPlaying = useSelector(state => state.isPlaying);

    useEffect(() => {
        const timer = setInterval(() => {
            if (isPlaying) {
                if (timeLeft <= 0) {
                    dispatch(toggleMode(!isSession));
                    dispatch(updateTimeLeft((isSession ? breakLength : sessionLength) * 60));
                } else {
                    dispatch(updateTimeLeft(timeLeft - 1));
                }
            }
        }, 1000);
    
        return () => clearInterval(timer);
    }, [dispatch, sessionLength, breakLength, isSession, isPlaying, timeLeft]);
    
    const formatTimeLeft = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='timer p-4'>
            <div className={timeLeft < 60 ? 'text-danger' : ''}>
                <div id='timer-label' className='text-center fs-3'>{isSession ? 'Session' : 'Break'}</div>
                <div id='time-left'>{formatTimeLeft()}</div>
            </div>
        </div>
    );
}

export default Timer;