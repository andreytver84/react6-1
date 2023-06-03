import './App.css';
import SetWatchesForm from './SetWatchesForm';
import { useState } from 'react';
import Watch from './Watch';

const INITIAL_LIST_DATA = [];

function App() {
  const [watchData, setWatchData] = useState(INITIAL_LIST_DATA);
  const saveWatchDataHandler = (inputWatchData) => {
    setWatchData(prevWatchData => [inputWatchData, ...prevWatchData]);
  }
  const removeItem = (item) => {
    setWatchData(watchData.filter(a => a !== item)); // удаление записи
  }

  return (
    <div className="App">
      <SetWatchesForm onSaveWatchData = {saveWatchDataHandler} />
      <div className='List' >
        {watchData.map((item, i) => <Watch onRemoveItem={removeItem} key={i} watch={item} />)}
      </div>
    </div>
  );
}

export default App;
