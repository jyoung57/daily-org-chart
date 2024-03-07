import React from 'react';
import { useState } from 'react';
import "../styles/Header.css";

export default function Header() {

  // function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(prevMode => !prevMode);
  // };
  return (
<>
    <header>
      <h1>Daily Org Chart</h1>
      <h2>Helping you stay on track, day by day!</h2>
    </header>

    {/* <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h1>Hello, World!</h1>
      <p>This is a sample text.</p>
    </div> */}

</>
   );
  }
// }
