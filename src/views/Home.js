import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <button>
        Vous avez cliqué {counter} fois
      </button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};


export default Home;
