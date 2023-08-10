import React from 'react';

function CoffeeItem(props) {
  return (
    <li>
      <h3>{props.name}</h3>
      <p>Origin: {props.origin}</p>
      <p>Price: ${props.price}</p>
      <p>Roast: {props.roast}</p>
    </li>
  );
}

export default CoffeeItem;
