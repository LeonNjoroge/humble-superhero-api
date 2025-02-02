# Humble Superhero API

This project allows users to manage a list of superheroes, including their names, superpowers, and humility scores. The backend is an Express.js server, and the frontend is built with React. Users can add superheroes to the list and view them sorted by humility score.

## Features

- **Add Superheroes**: Users can add new superheroes by submitting their name, superpower, and humility score (between 1 and 10).
- **View Superheroes**: Superheroes are displayed in a list, sorted by their humility score in descending order.
- **Backend**: The backend is built with Express.js, using an in-memory array to store superheroes.
- **Frontend**: The frontend is a React app that uses Axios for API calls. It fetches and displays superheroes from the backend, and allows users to add new superheroes.


## Tech Stack

### Backend
- **Node.js**
- **Express**: Backend framework
- **CORS**: For handling cross-origin requests from the frontend.
- **body-parser**: To parse incoming request bodies.

### Frontend
- **React**: Front end framework
- **Axios**: For making HTTP requests to the backend.
- **React Suspense**: For lazy loading the superhero list.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. CLone the repository and Navigate to repository

First clone the repo then Navigate to the root directory and install dependancies
```bash
git clone https://github.com/yourusername/humble-superhero-api.git

cd humble-superhero-api

```
### 2. Install dependencies
Make sure you have **Node.js** and **npm** installed on your machine. 
Run the following command to install both **production** and **development** dependencies:

```bash
npm install
```

### 3. Start development enviornment
To run the API and React client in development, use this command
```bash
npm run dev
```
This will:
    - Start the Express server on http://localhost:3000
    - Serve the React application on http://localhost:3001


### 4. Start the production development
To build the project for production (with minification and optimizations), run:
```bash
npm run build
```

To run the API and React client in production, use this command
```bash
npm run start
```

### 5. Run Tests
You can run tests using Jest by using this command:
```bash
npm test
```


### 6. Other commands
You can run the server and client individually through these commands
```bash
npm run server
npm run client
```


## Team Player Attitude
Collaboration is key to improving and expanding this project. If working with a teammate, I would:
- Clearly document the code to make it easier for them to understand and contribute.
- Break the task down to frontend and backend so that the work is done faster
- Implement the functionality of accessing different external Apis to get more information about the super hero if he exist in that database
- Offer peer code reviews to ensure that the production code is working as expected
- Regularly communicate to update each other on progress oand solve complex problems together

## If I Had More Time
With additional time, I would:
- Enhance the UI/UX to improve user experience.
- Optimize the backend to allow for CRUD operations such as removing and editing the heros and their humility score
- Improve test coverage to ensure more reliable code.
- Implemenent user authentication and create a database to ensure that data is persistent across sessions

