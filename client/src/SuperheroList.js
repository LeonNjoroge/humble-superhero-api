import React from 'react';

function SuperheroList({ superheroes }) {
  return (
    <ul>
      {superheroes.map((hero, index) => (
        <li key={index}>
          <strong>{hero.name}</strong> - {hero.superpower} (Humility Score: {hero.humilityScore})
        </li>
      ))}
    </ul>
  );
}

export default SuperheroList;
