import React from 'react';
import './App.css';

const CounterApp = React.lazy(() => import('app1/CounterApp'));
const NotepadApp = React.lazy(() => import('app2/NotepadApp'));

function App() {
  return (
    <>
      <header>
        <h1>Base App</h1>
      </header>
      <main>
        <CounterApp />
        <NotepadApp />
      </main>
      <footer>
          <p>made by @daanmoura</p>
      </footer>
    </>
  );
}

export default App;
