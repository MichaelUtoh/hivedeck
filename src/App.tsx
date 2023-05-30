import { useState } from 'react'
// import './App.css'
import Counter from './components/Counter';
import Popup from './components/Popup';
import Quil from './components/Quil'
import Submission from './components/Submission';
import TopBar from './components/TopBar';

function App() {
  const [valueFromChild, setValueFromChild] = useState(0);
  const handleValueFromChild = (value: number) => {
    setValueFromChild(value);
  };

  return (
    <>
      <div>
        <div className='mx-auto wrapper'>
          <TopBar />
          <Quil onValueFromChild={handleValueFromChild} />
          <Popup />
          <Counter count={valueFromChild} />
        </div>
        <Submission />
      </div>
    </>
  )
}

export default App
