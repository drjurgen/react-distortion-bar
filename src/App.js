import './App.css';
import React, {useState, useEffect} from 'react';
import BarCointainer from './components/BarCointainer'
import {get} from './modules/rest'


function App() {
  const [queue, setQueue] = useState([]);
  // console.log(queue);

  useEffect(() => {
    function fetchQueue() {
      get(updateQueue);
      setTimeout(fetchQueue, 5000);
    }

    const queueData = [];

    function updateQueue(data) {
      data.inQueue = Number(data.inQueue);
      queueData.push(data);
      if (queueData.length > 10) {
        queueData.shift();
      }
      setQueue([...queueData]);
    }

    fetchQueue()
  }, []);
    

  return (
    <div className="App">
        <BarCointainer queue={queue}/>
    </div>
  );
}

export default App;
