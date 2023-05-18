import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

export default function Setting() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div>
      <label className='block mb-2'>공부 시간 : {settingsInfo.workMinutes}:00</label>
      <ReactSlider 
        className={'slider h-10 border-2 border-red rounded-[20px] mb-6'} 
        thumbClassName={'thumb w-9 h-9 rounded-[20px] bg-red cursor-pointer'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label className='block mb-2'>휴식 시간 : {settingsInfo.breakMinutes}:00</label>
      <ReactSlider 
        className={'slider h-10 border-2 border-green rounded-[20px]'} 
        thumbClassName={'thumb w-9 h-9 rounded-[20px] bg-green cursor-pointer'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
    </div>
  );
}

