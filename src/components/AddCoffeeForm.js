import React, { useState } from 'react';

function AddCoffeeForm(props) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [roast, setRoast] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedCoffee, setSelectedCoffee] = useState('');

  const handleCoffeeSelection = (event) => {
    setSelectedCoffee(event.target.value);
  };

  const handleAddNewCoffee = (event) => {
    event.preventDefault();
    const newCoffee = {
      name: name,
      origin: origin,
      price: price,
      roast: roast,
      poundsLeft: quantity * 130 // Assuming each sack has 130 pounds
    };
    props.onAddCoffee(newCoffee);
    setName('');
    setOrigin('');
    setPrice('');
    setRoast('');
    setQuantity(1);
  };

  const handleAddToExistingStock = (event) => {
    event.preventDefault();
    props.onAddStock(selectedCoffee, quantity);
    setSelectedCoffee('');
    setQuantity(1);
  };

  return (
    <div>
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
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
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

export default AddCoffeeForm;
