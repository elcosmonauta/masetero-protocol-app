import React, { useState, useEffect } from 'react';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import ProtocolForm from './components/ProtocolForm';

function App() {
  const [theme, setTheme] = useState('night');

  const toggleTheme = () => {
    setTheme(prev => prev === 'night' ? 'day' : 'night');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'day' ? 'light' : 'dark');
  }, [theme]);

  return (
    <div className="App">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ProtocolForm />
    </div>
  );
}

export default App;
