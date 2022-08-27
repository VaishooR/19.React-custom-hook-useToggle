import * as React from 'react';
import './style.css';
import useToggle from './useToggle'


export default function App() {
  const [isvisible,toggle]=useToggle(true);

  return (
    <div>

      <button onClick={toggle}>  {isvisible?'Hide':'Show'}  </button>

      {isvisible && <h1>Hidden text</h1>}

    </div>
  );
}
