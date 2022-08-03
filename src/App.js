import { useEffect, useState } from 'react';
import './App.css';
import { Home } from './Components/Pages/Home/Home'

function App() {

  const [characters,setCharacters ] = useState([]);
  
  const URL = 'https://rickandmortyapi.com/api/character'

  function searchCharacter (e){
    if(e.target.value === ''){
      console.log(fetchData(URL)); 
      
    }else{
      const characterNew = (e.target.value);
      const NewURL= URL+'/?name='+characterNew;
      console.log(NewURL);
      return fetchData(NewURL)
    }
  }

  const fetchData = (api) =>{
    fetch(api)
    .then(response => response.json())
    .then(data => data.results ? setCharacters(data.results):console.log("No"))
  }

  useEffect(() =>{
    fetchData(URL);
  },[])

  return (
      <div className="App">
        <Home change={searchCharacter} characters={characters} />
      </div>
  );
}

export default App;