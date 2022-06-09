import React from 'react';
import './App.css';

import RandomDogApp from './vue-components/randomDogApp';

const CounterApp = React.lazy(() => import('app1/CounterApp'));
const NotepadApp = React.lazy(() => import('app2/NotepadApp'));

function App() {
  return (
    <>
      <header>
        <h1>Base App</h1>
      </header>
      <main>
        <div className="col">
          <CounterApp />
          <NotepadApp />
        </div>
        <div className="col">
          <RandomDogApp />
        </div>
      </main>
      <footer>
          <p>made by @daanmoura</p>
      </footer>
    </>
  );
}

export default App;
