import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);


  return (
    <div className="container my-5">
      <div className='text-center my-5'>
      
        <h1>{num}</h1>
        <button class="btn btn-outline-info m-3" onClick={() => setNum(num + 1)}>increment</button>
        <button class="btn btn-outline-danger" onClick={() => setNum(num - 1)}disabled ={num === 0}>dicrement</button>
      </div>
      </div>
    
  );
}

export default App;
