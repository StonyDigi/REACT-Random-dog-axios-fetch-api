import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dog from './components/Dog';

function App() {

const [dog, setDog] = useState("");

useEffect(() => {
  
  //alapállapot
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(res => setDog(res.data.message));

}, [])

//gombnyomásra lekér egy újabb képet

const getRandomDog = () => {

  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(res => setDog(res.data.message));
  
  document.getElementById('dogContainer').innerHTML = `<img src='${dog}' />`;

}

console.log(dog)
  return (
    <>

      <div className='result'>
        <h1>React-Random Api</h1>

        <Dog id='dogContainer' click={getRandomDog} />
        
        </div>
      
    </>
  );
}

export default App;
