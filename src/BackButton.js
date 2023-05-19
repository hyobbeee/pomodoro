import React from 'react';

export default function BackButton(props) {
  return (
    <div className='flex justify-center bg-[#ffffff26] rounded-lg w-48	mx-auto mt-5'>
      <button {...props} className='flex flex-wrap items-center text-2xl p-2 gap-x-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
        </svg>
       설정 완료
      </button>
    </div>
  );
}

