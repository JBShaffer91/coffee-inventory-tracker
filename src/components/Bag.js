import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Bag.css';

function Bag(props) {
  const handleOrderClick = () => {
    props.onOrder();
  };

  const handleIncreaseQuantity = (item) => {
    if (item.quantity < item.poundsLeft) {
      props.onUpdateItem(item.id, item.quantity + 1);
    } else {
      alert(`Sorry, we don't have enough stock for ${item.name}.`);
    }
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      props.onUpdateItem(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="bag-container">
      <h3>Your Bag</h3>
      <ul>
        {props.bagItems.map((item, index) => (
          <li key={index}>
            <span>{item.name} - {item.quantity} lbs</span>
            <button onClick={() => handleIncreaseQuantity(item)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item)}>-</button>
            <button onClick={() => props.onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleOrderClick}>Order</button>
    </div>
  );
}

Bag.propTypes = {
  bagItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.string,
    price: PropTypes.string,
    roast: PropTypes.string,
    poundsLeft: PropTypes.number,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  onUpdateItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onOrder: PropTypes.func.isRequired
};

export default Bag;
