import React from 'react';
import ReactSlider from 'react-slider';

export default function Setting() {
  
  return (
    <div>
      <label className='block mb-2'>공부한 시간 : </label>
      <ReactSlider 
        className={'slider h-10 border-2 border-red rounded-[20px] mb-6'} 
        thumbClassName={'thumb w-9 h-9 rounded-[20px] bg-red cursor-pointer'}
        trackClassName={'track'}
        value={45}
        min={1}
        max={120}
      />
      <label className='block mb-2'>휴식 시간 : </label>
      <ReactSlider 
        className={'slider h-10 border-2 border-green rounded-[20px]'} 
        thumbClassName={'thumb w-9 h-9 rounded-[20px] bg-green cursor-pointer'}
        trackClassName={'track'}
        value={45}
        min={1}
        max={120}
      />
    </div>
  );
}

