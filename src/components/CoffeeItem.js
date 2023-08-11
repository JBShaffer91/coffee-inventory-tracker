import React from 'react';

function CoffeeItem(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.origin}</td>
      <td>{props.price}</td>
      <td>{props.roast}</td>
      <td>{props.quantity}</td>
    </tr>
  );
}

export default CoffeeItem;