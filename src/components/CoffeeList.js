import React from 'react';
import CoffeeItem from './CoffeeItem';

function CoffeeList(props) {
  return (
    <div>
      <h2>Available Coffees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Origin</th>
            <th>Price</th>
            <th>Roast</th>
            <th>Quantity (lbs)</th>
          </tr>
        </thead>
        <tbody>
          {props.coffees.map((coffee, index) => {
            return (
              <CoffeeItem 
                key={index}
                name={coffee.name}
                origin={coffee.origin}
                price={coffee.price}
                roast={coffee.roast}
                quantity={coffee.poundsLeft}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoffeeList;
