// Import modules and app
const request = require('supertest');
const app = require("./server");

// setup the tests
describe('POST /superheroes', () => {
    it('should successfully add a superheores with valid data', async () => {
        const response = await request(app)
            .post('/superheroes')
            .send({
                name: 'Spiderman',
                superpower: "Shooting webs",
                humilityScore: 7
            });
        
        expect(response.status).toBe(201);
        expect(response.body).toEqual({message: 'Superhero added successfully!'});
    });
    it('should return 400 if humilityScore is not between 1 and 10', async () => {
        const response = await request(app)
            .post('/superheroes')
            .send({
                name: 'Spiderman',
                superpower: 'Web Shooting',
                humilityScore: 11
            });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Humility score must be between 1 and 10.' });
    });

    it('should return 400 if required fields are missing', async () => {
        const response = await request(app)
            .post('/superheroes')
            .send({
                name: 'Spiderman',
                superpower: 'Web Shooting'
            });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({error: 'Invalid input. Name, Superpower and humilityScore are required.'});
    });

});
