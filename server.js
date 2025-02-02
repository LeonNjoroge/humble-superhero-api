// Importing the dependancies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT  = 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3001',  // Allow only frontend on port 3001
  }));
  
app.use(bodyParser.json());


// In memory database
const superheroes = [];

// Routes

// Post  - Add new Superhero
app.post('/superheroes', (req, res) => {
    const {name, superpower, humilityScore} = req.body;
    console.log(req.body);

    // Input validation
    if(!name || !superpower || typeof humilityScore !== 'number'){
        return res.status(400).json({error: 'Invalid input. Name, Superpower and humilityScore are required.'});
    }

    if (humilityScore < 1 || humilityScore > 10) {
        return res.status(400).json({error:'Humility score must be between 1 and 10.'});
    }

    // Add superhero to the list of heros
    superheroes.push({name, superpower, humilityScore});
    res.status(201).json({message: 'Superhero added successfully!'});
});

app.get('/superheroes', (req, res) => {
    // Logic to sort heroes by humilityScore in descending order
    const sortedSuperheroes = superheroes.sort((a,b) => b.humilityScore - a.humilityScore);
    res.json(sortedSuperheroes);
});

// Export the app for testing
module.exports = app;

// Start the server if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    });
}