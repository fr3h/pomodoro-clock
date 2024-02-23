import {
    UPDATE_SESSION_LENGTH,
    UPDATE_BREAK_LENGTH
} from '../components/LengthControl/lengthControlActions'

import {
    TOGGLE_MODE,
    UPDATE_TIME_LEFT
} from '../components/Timer/timerActions'

import {
    TOGGLE_PLAY,
    RESET_TIMER
} from '../components/TimerControl/timerControlActions'

const initialState = {
    sessionLength: 25,
    breakLength: 5,
    isPlaying: false,
    timeLeft: 25*60,
    isSession: true
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLAY:
            return {
                ...state,
                isPlaying: !state.isPlaying
            };
        case RESET_TIMER:
            return initialState;
        case TOGGLE_MODE:
            return {
                ...state,
                isSession: !state.isSession
            };
        case UPDATE_TIME_LEFT:
            return {
                ...state,
                timeLeft: action.timeLeft
            };
        case UPDATE_SESSION_LENGTH:
            return {
                ...state,
                sessionLength: action.sessionLength,
                timeLeft: state.isSession ? action.sessionLength*60 : state.timeLeft,
            };
        case UPDATE_BREAK_LENGTH:
            return {
                ...state,
                breakLength: action.breakLength,
                timeLeft: !state.isSession ? action.breakLength*60 : state.timeLeft,
            };
        default:
            return state;
    }
}

export default rootReducer;