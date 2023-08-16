import React, { useState } from 'react';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import AddCoffeeForm from './components/AddCoffeeForm';
import Bag from './components/Bag';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [coffees, setCoffees] = useState([
    { id:1, name: 'Espresso', origin: 'Italy', price: '$10', roast: 'Dark', poundsLeft: 130 },
    { id:2, name: 'Americano', origin: 'USA', price: '$8', roast: 'Medium', poundsLeft: 130 },
    { id:3, name: 'Latte', origin: 'France', price: '$12', roast: 'Light', poundsLeft: 130 },
    { id:4, name: 'Cortado', origin: 'Spain', price: '$9', roast: 'Medium', poundsLeft: 130 },
    { id:5, name: 'Flat White', origin: 'Australia', price: '$11', roast: 'Medium', poundsLeft: 130 },
    { id:6, name: 'Café Cubano', origin: 'Cuba', price: '$7', roast: 'Dark', poundsLeft: 130 },
    { id:7, name: 'Turkish Coffee', origin: 'Turkey', price: '$13', roast: 'Dark', poundsLeft: 130 },
    { id:8, name: 'Café de Olla', origin: 'Mexico', price: '$6', roast: 'Medium', poundsLeft: 130 },
    { id:9, name: 'Ethiopian Buna', origin: 'Ethiopia', price: '$14', roast: 'Light', poundsLeft: 130 },
    { id:10, name: 'Brazilian Cafezinho', origin: 'Brazil', price: '$5', roast: 'Medium', poundsLeft: 130 }
  ]);

  const handleDeleteCoffee = (coffeeToDelete) => {
    setCoffees(prevCoffees => prevCoffees.filter(coffee => coffee.name !== coffeeToDelete.name));
  };

  const handleEditCoffee = (editedCoffee) => {
    setCoffees(prevCoffees => {
      const updatedCoffees = [...prevCoffees];
      const index = updatedCoffees.findIndex(coffee => coffee.id === editedCoffee.id);
      if (index !== -1) {
        updatedCoffees[index] = {...updatedCoffees[index], ...editedCoffee};
      }
      return updatedCoffees;
    });
  };  

  const handleAddOrUpdateCoffee = (newCoffee, quantity) => {
    const existingCoffeeIndex = coffees.findIndex(c => c.name === newCoffee.name);
  
    if (existingCoffeeIndex !== -1) {
      const updatedCoffees = [...coffees];
      updatedCoffees[existingCoffeeIndex].poundsLeft += 130 * quantity;
      setCoffees(updatedCoffees);
    } else {
      const newCoffeeId = Math.max(...coffees.map(c => c.id)) + 1;
      newCoffee.id = newCoffeeId;
      newCoffee.poundsLeft = 130 * quantity;
      setCoffees(prevCoffees => [...prevCoffees, newCoffee]);
    }
  };  

  const [bag, setBag] = useState([]);

  const handleAddToBag = (coffeeToAdd) => {
    setBag(prevBag => {
      const existingItem = prevBag.find(item => item.id === coffeeToAdd.id);
      if (existingItem) {
        return prevBag.map(item => 
          item.id === coffeeToAdd.id ? {...item, quantity: item.quantity + 1} : item
        );
      } else {
        return [...prevBag, {...coffeeToAdd, quantity: 1}];
      }
    });
  };

  const handleUpdateBagItem = (coffeeId, newQuantity) => {
    setBag(prevBag => 
      prevBag.map(item => 
        item.id === coffeeId ? {...item, quantity: newQuantity} : item
      )
    );
  };

  const handleRemoveFromBag = (coffeeId) => {
    setBag(prevBag => prevBag.filter(item => item.id !== coffeeId));
  };

  const handleOrder = () => {
    let isOrderValid = true;
    let outOfStockItems = [];
  
    bag.forEach(item => {
      const coffee = coffees.find(c => c.id === item.id);
      if (item.quantity > coffee.poundsLeft) {
        isOrderValid = false;
        outOfStockItems.push(coffee.name);
      }
    });
  
    if (isOrderValid) {
      setBag(prevBag => {
        const updatedCoffees = [...coffees];
        prevBag.forEach(item => {
          const coffeeIndex = updatedCoffees.findIndex(c => c.id === item.id);
          if (coffeeIndex !== -1) {
            updatedCoffees[coffeeIndex].poundsLeft = Math.max(0, updatedCoffees[coffeeIndex].poundsLeft - item.quantity);
          }
        });
        setCoffees(updatedCoffees);
        return [];
      });
    } else {
      alert(`Sorry, we don't have enough stock for the following items: ${outOfStockItems.join(', ')}`);
    }
  };    

  const validCoffees = coffees.filter(coffee => coffee.origin && coffee.price && coffee.roast);

  return (
    <div className="App">
      <Header />
      <Bag bagItems={bag} onUpdateItem={handleUpdateBagItem} onRemoveItem={handleRemoveFromBag} onOrder={handleOrder} />
      <CoffeeList coffees={validCoffees} onAddToBag={handleAddToBag} onDeleteCoffee={handleDeleteCoffee} onEditCoffee={handleEditCoffee} />
      <AddCoffeeForm onAddOrUpdateCoffee={handleAddOrUpdateCoffee} coffees={coffees} />
      <Footer />
    </div>
  );
}

export default App;