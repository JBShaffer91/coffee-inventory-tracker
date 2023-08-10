import React from 'react';
import CoffeeItem from './CoffeeItem';

function CoffeeList(props) {
  return (
    <div>
      <h2>Available Coffees</h2>
      <ul>
        {props.coffees.map((coffee, index) => (
          <CoffeeItem 
            key={index}
            name={coffee.name}
            origin={coffee.origin}
            price={coffee.price}
            roast={coffee.roast}
          />
        ))}
      </ul>
    </div>
  );
}

export default CoffeeList;
