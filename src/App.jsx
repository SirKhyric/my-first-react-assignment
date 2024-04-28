import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import { Header } from './Components/Header/Header';
import { CharacterRatings } from './Components/CharacterRatings/CharacterRatings';
import { CharacterCards } from './Components/CharacterCards/CharacterCards';
import data from './Constant/fma-data'


function App() {
  return (
    <>
      <Header/>
      <CharacterRatings characters={data}/>
      <CharacterCards characters={data}/>
    </>
  )
}

export default App;
