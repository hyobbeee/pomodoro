import './App.css';
import Timer from './Timer';
import Setting from './Setting';
import { useState } from 'react';

function App() {
  const [showSettings, setShowSettings] = useState(true);

  return (
    <main className='pt-12 max-w-xs	mx-auto'>

      {showSettings ? <Setting /> : <Timer />}
    </main>
  );
}

export default App;
