import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CoffeeItem.css';

function CoffeeItem(props) {
  const handleAddToBagClick = (event) => {
    event.stopPropagation();
    props.onAddToBag();
  };

  return (
    <tr onClick={props.onClick}>
      <td>{props.name}</td>
      <td>{props.origin}</td>
      <td>{props.price}</td>
      <td>{props.roast}</td>
      <td>
        {props.quantity}
        {props.quantity <= 10 && props.quantity > 0 && <span className="almost-gone">(Almost Gone)</span>}
        {props.quantity === 0 && <span className="out-of-stock">(Out of Stock)</span>}
      </td>
      <td>
        <button onClick={handleAddToBagClick}>Add to Bag</button>
      </td>
    </tr>
  );
}

CoffeeItem.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onAddToBag: PropTypes.func.isRequired
};

export default CoffeeItem;
