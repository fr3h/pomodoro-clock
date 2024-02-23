export const TOGGLE_MODE = 'TOGGLE_MODE';
export const UPDATE_TIME_LEFT = 'UPDATE_TIME_LEFT';

export const toggleMode = () => ({
    type: TOGGLE_MODE
});

export const updateTimeLeft = (timeLeft) => ({
    type: UPDATE_TIME_LEFT,
    timeLeft
});
