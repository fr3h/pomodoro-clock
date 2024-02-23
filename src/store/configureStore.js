import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default function configureAppStore(initialState = {
    sessionLength: 25,
    breakLength: 5,
    isPlaying: false,
    timeLeft: 25*60,
    isSession: true
}) {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}