import { useState } from 'react'
import Counter from './components/Counter';
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
          <Counter count={valueFromChild} />
        </div>
        <Submission />
      </div>
    </>
  )
}

export default App
