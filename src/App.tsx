import { useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import ViewPetition from './features/Petition/Petition';


function App() {
  const [id, setId] = useState('');
  return (
    <>
    <Search onSearch={setId}/>
    {
      id === '' ?
      (<div> Please enter a valid petition id, (as found on <a target='_blank' href='https://petition.parliament.uk/'>https://petition.parliament.uk/</a> ) </div>)
      :
      <ViewPetition id={id} />
    }
    </>
  )
}

export default App;
