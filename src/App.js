import './App.css';
import Timer from './Timer';
import Setting from './Setting';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15); 

  return (
    <main className='pt-12 max-w-xs	mx-auto'>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Setting /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
