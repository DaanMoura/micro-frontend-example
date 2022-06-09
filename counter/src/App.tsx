import React from 'react';
import './App.css';

import { Button } from '@daanmoura/concrete-ui'

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>
        Counter
      </h1>

      <Button onClick={handleClick}>
        Hit me
      </Button>

      <p>
        You hit me <span>{count}</span> times
      </p>
    </div>
  );
}

export default App;
