import React from 'react';
import { useState } from 'react';
import localStorageKullan from './localStorageKullan';


const useDarkMode = () => {
    const [darkMode, setDarkMode] = localStorageKullan('darkMode',false,
            
            localStorage.getItem('darkMode') === 'true'
            ? true
            : false,
    );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
}

export default useDarkMode;