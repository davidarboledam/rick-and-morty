import {useEffect, useRef, useState} from 'react'
import './App.css'
import useFetch from '../hooks/useFetch';
import LocationCard from '../components/LocationCard';
import ResidentCard from './components/ResidentCard';

function App() {

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3185141084.
  const randomId = Math.floor(Math.random() * 126)+1;
  const [inputValue, setInputValue] = useState(randomId); 
  const [location, getLocation, isLoading, hasError] = useFetch();

  useEffect(() => {
     const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
     getLocation(url);
  }, [inputValue]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase())
    textInput.current.value = "";

  }

  return (
    <div className="app">
      {
        isLoading ?
          <h2>Loading...</h2>
          :
          <>
            <h1>Rick and Morty</h1>
            <form onSubmit={handleSubmit}>
              <input ref={textInput} type="number" />
              <button>Search</button>
            </form>
              {
                hasError ?
                  <h2> ❌Hey! you must provide an id from 1 to 126 😶</h2>
                  :
                  <>
                  <LocationCard
                    info={location} 
                    />
                  <div className="app__container">
                    {
                      location?.residents.map((character) => (
                      <ResidentCard 
                      key={character} 
                      info={character} 
                      />
                      ))
                    }
                  </div>
                  </>
              }
        </>
      }
    </div>
  )
}

export default App;
