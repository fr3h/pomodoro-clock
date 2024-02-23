import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAttributeLength } from './lengthControlActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
import './LengthControlStyle.scss'

const LengthControl = ({ timerAttribute }) => {
    const dispatch = useDispatch();
    const length = useSelector(state => timerAttribute === 'session' ? state.sessionLength : timerAttribute === 'break' ? state.breakLength : '');
    const isPlaying = useSelector(state => state.isPlaying);

    const timerAttributeStr = String(timerAttribute);

    const handleDecrementClick = () => {
        if (!isPlaying && length > 1)
            dispatch(updateAttributeLength(timerAttribute, length-1));
    };

    const handleIncrementClick = () => {
        if (!isPlaying && length < 60)
            dispatch(updateAttributeLength(timerAttribute, length+1));
    };

    return (
        <div className='length-control'>
            <div className='d-flex justify-content-center'> 
                <div id={`${timerAttribute}-label`} className='fs-2'>
                    {timerAttributeStr.charAt(0).toUpperCase() + timerAttributeStr.slice(1)} Length
                </div>
            </div>
            <div className='d-flex justify-content-evenly align-items-center'>
                <FontAwesomeIcon id={`${timerAttribute}-decrement`} icon={faSquareCaretDown} size="2x" onClick={handleDecrementClick} className='control-button' />
                <div id={`${timerAttribute}-length`} className='fs-2 text-center'>
                    {length}
                </div>
                <FontAwesomeIcon id={`${timerAttribute}-increment`} icon={faSquareCaretUp} size="2x" onClick={handleIncrementClick} className='control-button' />
            </div>
        </div>
    );
};

export default LengthControl;