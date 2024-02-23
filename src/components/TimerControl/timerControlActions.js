export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const RESET_TIMER = 'RESET_TIMER';

export const togglePlay = () => ({
    type: TOGGLE_PLAY
});

export const resetTimer = (sessionLength) => ({
    type: RESET_TIMER,
    sessionLength
});