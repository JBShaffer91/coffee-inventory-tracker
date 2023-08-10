import React, { useState } from 'react';

function AddCoffeeForm(props) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [price, setPrice] = useState('');
  const [roast, setRoast] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCoffee = {
      name: name,
      origin: origin,
      price: price,
      roast: roast,
      poundsLeft: 130
    };
    props.onAddCoffee(newCoffee);
    setName('');
    setOrigin('');
    setPrice('');
    setRoast('');
  };

  return (
    <div>
      <h2>Add New Coffee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
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
        <button type="submit">Add Coffee</button>
      </form>
    </div>
  );
}

export default AddCoffeeForm;
