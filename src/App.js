import React from 'react';
import LengthControl from './components/LengthControl/LengthControlComponent';
import Timer from './components/Timer/TimerComponent';
import TimerControl from './components/TimerControl/TimerControlComponent';
import BeepAudio from './components/BeepAudio/BeepAudioComponent';
import './App.scss';

function App() {

  return (
    <div className="App d-flex justify-content-center align-items-center vh-100">
      <div className="clock-container">
        <div className='row'>
          <div className='col-12 d-flex justify-content-center mb-3'>
            <h1>Pomodoro Clock</h1>
          </div>
        </div>
        <div className='row my-3'>
          <div className='col-6 d-flex justify-content-center'>
            <LengthControl timerAttribute="break" />
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <LengthControl timerAttribute="session" />
          </div>
        </div>
        <div className='row my-4'>
          <div className='col-12 d-flex justify-content-center'>
            <Timer />
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 d-flex justify-content-center'>
            <TimerControl />
          </div>
        </div>
      </div>
      <BeepAudio />
    </div>
  );
}

export default App;
