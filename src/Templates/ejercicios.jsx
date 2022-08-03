import React from 'react'
import { useEffect, useState } from 'react';

export const ejercicios = () => {

  const [text,setText] = useState("");

  const people = [
    {name:"Edwin", age: 90},
    {name:"Alejandro", age: 690},
    {name:"Juapa", age: 190},
    {name:"Sebas", age: 490},
    {name:"Lu", age: 790},
    {name:"Carlos", age: 390},
  ]
  const [counter,setCounter] = useState(0);
  const [ styleTitle, setStyleTitle] = useState("class1");
  
   
    useEffect(() => {
      counter >= 10 ? setStyleTitle("class2") : setStyleTitle("class1");
    },([counter]))

  

  const [names, setNames] = useState([]);

  const handleNames = () => setNames(people);

  onst tweet = useRef(null);
  const [arrayTweet,setArrayTweet] = useState([])

  const [clockState,setClockState] = useState("");

  setInterval(() => {
    const actuallyTime = new Date();
    setClockState(actuallyTime.toLocaleTimeString())
  },1000);



    function saveTweet(){
      setArrayTweet([...arrayTweet,tweet.current.value])
      tweet.current.value = ""
      tweet.current.placeholder = "Ingresa tu tweet..."
      console.log(arrayTweet);
    }

  return (
      <div className="App">
        <h1>{clockState}</h1>
        <h1>Tweet</h1>
        <textarea ref={tweet} placeholder='Ingresa tu tweet...'></textarea> <br></br>
        <button onClick={saveTweet}>Send</button>
        {arrayTweet.map((Element,position) => <p key={position}>{Element}</p>)}
      </div>



  return (
    <div>
      <h1 className={styleTitle}>Cambiar Estilos</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter+1)}>Sumar</button>
      <button onClick={() => setCounter(counter-1)}>Restar</button> <br></br>

      <input onChange={(event) => setText(event.target.value) } placeholder="Ingrese un texto" />
      <p>Su nuevo texto es: {text}</p>
        < button onClick={handleNames}>Listar</button>
      <ul>
        {names.map((namePerson,position) => <li position={position}>{namePerson.name}</li>)}
      </ul>
    </div>
  )
}
