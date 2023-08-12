import React, { useState } from 'react';
import CoffeeItem from './CoffeeItem';
import CoffeeModal from './CoffeeModal';

function CoffeeList(props) {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const handleCoffeeClick = (coffee) => {
    setSelectedCoffee(coffee);
  };

  const handleCloseModal = () => {
    setSelectedCoffee(null);
  };

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
                key={coffee.id}
                name={coffee.name}
                origin={coffee.origin}
                price={coffee.price}
                roast={coffee.roast}
                quantity={coffee.poundsLeft}
                onClick={() => handleCoffeeClick(coffee)}
              />
            );
          })}
        </tbody>
      </table>
      {selectedCoffee && 
        <CoffeeModal 
          coffee={selectedCoffee} 
          onClose={handleCloseModal}
          onDelete={props.onDeleteCoffee}
          onEdit={props.onEditCoffee}
        />
      }
    </div>
  );
}

export default CoffeeList;
