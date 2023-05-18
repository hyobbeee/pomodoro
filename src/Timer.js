import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './Playbutton';
import PauseButton from './PauseButton';
import SettingButton from './SettingButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  const settingsInfo = useContext(SettingsContext);
  
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('break') // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {

    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
      
      setMode(nextMode);
      modeRef.current = nextMode;
  
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    initTimer();
    
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        switchMode();
      }

      tick();
    }, 1000);
    
    return () => clearInterval(interval);
  }, [settingsInfo]) // setInterval 함수내에서 상태를 변경할 경우 useRef가 필요함?
  

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);    
  }

  const totalSeconds = mode === 'work' 
    ? settingsInfo.workMinutes * 60 
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);
  
  const minutes = Math.floor(secondsLeft / 60); // 소수점인 경우 내림
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <>
      <CircularProgressbar 
        value={percentage} 
        text={minutes + ':' + seconds} 
        styles={buildStyles({
        textColor: '#fff',
        pathColor: mode === 'work' ? red : green,
        trailColor: 'rgba(255, 255, 255, .2)',
      })}/>
      <div className='flex justify-center mt-5 gap-x-2'>
        {isPaused 
          ? <Playbutton onClick={() => { setIsPaused(false); isPausedRef.current = false; }}/> 
          : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }}/>}
      </div>
      <div className='flex justify-center bg-[#ffffff26] rounded-lg w-48	mx-auto mt-5'>
        <SettingButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </>
  );
}

export default Timer;