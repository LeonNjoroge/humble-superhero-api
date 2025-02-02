import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import SuperheroList from './SuperheroList';
import "./App.css"

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');


  
  
  // Fetch superheroes on initial render
  useEffect(() => {
    fetchSuperheroes();
  }, []);

  // Fetch superheroes from the backend
  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/superheroes');
      setSuperheroes(response.data);
    } catch (error) {
      console.error('Error fetching superheroes:', error);
    }
  };

  // Add a new superhero
  const handleAddSuperhero = async (e) => {
    e.preventDefault();
    
    const newHero = {
      name,
      superpower,
      humilityScore: parseInt(humilityScore, 10),
    };

    try {
      await axios.post('http://localhost:3000/superheroes', newHero);
      fetchSuperheroes(); // Re-fetch the updated list
      setName('');
      setSuperpower('');
      setHumilityScore('');
    } catch (error) {
      console.error('Error adding superhero:', error);
    }
  };

  return (
    <div className='background'>
        <div className="container">
        <header className="app-header">
          <h1>Welcome to Humble Hero API</h1>
        </header>
        
        <form onSubmit={handleAddSuperhero}>
            <div>
            <label>Name   </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Superpower   </label>
            <input
                type="text"
                value={superpower}
                onChange={(e) => setSuperpower(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Humility Score (1-10)    </label>
            <input
                type="number"
                value={humilityScore}
                onChange={(e) => setHumilityScore(e.target.value)}
                min="1"
                max="10"
                required
            />
            </div>
            <button type="submit">Add Superhero</button>
        </form>

        <h2>Superhero List</h2>
            <Suspense fallback={<div>Loading superhero list...</div>}>
                <SuperheroList superheroes={superheroes} />
            </Suspense>
        </div>
    </div>    
  );
}

export default App;