import React, { useState } from 'react';

function CoffeeModal(props) {
  const { coffee, onClose, onDelete, onEdit } = props;

  // Initialize the local state with the coffee passed as a prop
  const [editedCoffee, setEditedCoffee] = useState({ ...coffee });

  // Handle the save action
  const handleSave = () => {
    onEdit(editedCoffee);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Edit Coffee Details</h2>
        
        <label>Name:</label>
        <input type="text" value={editedCoffee.name} onChange={e => setEditedCoffee({ ...editedCoffee, name: e.target.value })} />

        <label>Origin:</label>
        <input type="text" value={editedCoffee.origin} onChange={e => setEditedCoffee({ ...editedCoffee, origin: e.target.value })} />

        <label>Price:</label>
        <input type="text" value={editedCoffee.price} onChange={e => setEditedCoffee({ ...editedCoffee, price: e.target.value })} />

        <label>Roast:</label>
        <input type="text" value={editedCoffee.roast} onChange={e => setEditedCoffee({ ...editedCoffee, roast: e.target.value })} />

        <label>Harvest Date:</label>
        <input type="text" value={editedCoffee.harvestDate} onChange={e => setEditedCoffee({ ...editedCoffee, harvestDate: e.target.value })} />

        <label>Roast Date:</label>
        <input type="text" value={editedCoffee.roastDate} onChange={e => setEditedCoffee({ ...editedCoffee, roastDate: e.target.value })} />

        <button onClick={handleSave}>Save</button>
        <button onClick={() => onDelete(coffee)}>Delete</button>
      </div>
    </div>
  );
}

export default CoffeeModal;
