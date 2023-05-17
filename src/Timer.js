import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './Playbutton';
import PauseButton from './PauseButton';
import SettingButton from './SettingButton';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  return (
    <>
      <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
        textColor: '#fff',
        pathColor: red,
        trailColor: 'rgba(255, 255, 255, .2)',
      })}/>
      <div className='flex justify-center mt-5 gap-x-2'>
        <Playbutton />
        <PauseButton />
      </div>
      <div className='flex justify-center bg-[#ffffff26] rounded-lg w-48	mx-auto mt-3'>
        <SettingButton />
      </div>
    </>
  );
}

export default Timer;