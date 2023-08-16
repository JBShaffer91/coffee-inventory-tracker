import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddCoffeeForm.css';

function AddCoffeeForm(props) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [roast, setRoast] = useState('light');
  const [quantity, setQuantity] = useState(1);
  const [selectedCoffee, setSelectedCoffee] = useState('');

  const handleCoffeeSelection = (event) => {
    setSelectedCoffee(event.target.value);
  };

  const handleAddNewCoffee = (event) => {
    event.preventDefault();

    if (!name || !origin || !price || !roast) {
    alert("Please fill out all the fields.");
    return;
    }

    const existingCoffee = props.coffees.find(c => c.name === name);
    if (existingCoffee) {
      alert("A coffee with this name already exists. Please choose a different name.");
      return;
    }

    const coffeeData = {
      name: name,
      origin: origin,
      price: price,
      roast: roast
    };
    props.onAddOrUpdateCoffee(coffeeData, quantity);
    setName('');
    setOrigin('');
    setPrice('');
    setRoast('light');
    setQuantity(1);
  };

  const handleAddToExistingStock = (event) => {
    event.preventDefault();
    const coffeeData = {
      name: selectedCoffee
    };
    props.onAddOrUpdateCoffee(coffeeData, quantity);
    setSelectedCoffee('');
    setQuantity(1);
  };

  return (
    <div className="add-coffee-container">
      <h2>Manage Coffee Inventory</h2>

      {/* Add a New Coffee Type */}
      <h3>Add New Coffee Type</h3>
      <form onSubmit={handleAddNewCoffee}>
        <input
          type="text"
          placeholder="Coffee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select value={roast} onChange={(e) => setRoast(e.target.value)}>
          <option value="light">light</option>
          <option value="medium">medium</option>
          <option value="dark">dark</option>
        </select>
        <input
          type="number"
          placeholder="Number of burlap sacks"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, e.target.value))}
          min="1"
        />
        <button type="submit">Add New Coffee Type</button>
      </form>

      {/* Add to Existing Coffee Stock */}
      <h3>Add to Existing Coffee Stock</h3>
      <form onSubmit={handleAddToExistingStock}>
        <select value={selectedCoffee} onChange={handleCoffeeSelection}>
          <option value="">Select an existing coffee type</option>
          {props.coffees && props.coffees.map((coffee, index) => (
            <option key={index} value={coffee.name}>{coffee.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Number of burlap sacks"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, e.target.value))}
          min="1"
        />
        <button type="submit">Add to Stock</button>
      </form>
    </div>
  );
}

AddCoffeeForm.propTypes = {
  onAddOrUpdateCoffee: PropTypes.func.isRequired,
  coffees: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

export default AddCoffeeForm;
