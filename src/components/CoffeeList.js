import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CoffeeItem from './CoffeeItem';
import CoffeeModal from './CoffeeModal';
import '../styles/CoffeeList.css';

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
                quantity={coffee.poundsLeft || 0}
                onClick={() => handleCoffeeClick(coffee)}
                onAddToBag={() => props.onAddToBag(coffee)}
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

CoffeeList.propTypes = {
  coffees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    roast: PropTypes.string.isRequired,
    poundsLeft: PropTypes.number.isRequired
  })).isRequired,
  onAddToBag: PropTypes.func.isRequired,
  onDeleteCoffee: PropTypes.func.isRequired,
  onEditCoffee: PropTypes.func.isRequired
};

export default CoffeeList;
