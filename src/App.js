import React, { useState } from 'react';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import AddCoffeeForm from './components/AddCoffeeForm';
import Footer from './components/Footer';

function App() {
  const [coffees, setCoffees] = useState([
    { name: 'Espresso', origin: 'Italy', price: '$10', roast: 'dark', poundsLeft: 130 },
    { name: 'Americano', origin: 'USA', price: '$8', roast: 'medium', poundsLeft: 130 },
    { name: 'Latte', origin: 'France', price: '$12', roast: 'light', poundsLeft: 130 },
    { name: 'Cortado', origin: 'Spain', price: '$9', roast: 'medium-dark', poundsLeft: 130 },
    { name: 'Flat White', origin: 'Australia', price: '$11', roast: 'medium', poundsLeft: 130 },
    { name: 'Café Cubano', origin: 'Cuba', price: '$7', roast: 'dark', poundsLeft: 130 },
    { name: 'Turkish Coffee', origin: 'Turkey', price: '$13', roast: 'dark', poundsLeft: 130 },
    { name: 'Café de Olla', origin: 'Mexico', price: '$6', roast: 'medium', poundsLeft: 130 },
    { name: 'Ethiopian Buna', origin: 'Ethiopia', price: '$14', roast: 'light', poundsLeft: 130 },
    { name: 'Brazilian Cafezinho', origin: 'Brazil', price: '$5', roast: 'medium-dark', poundsLeft: 130 }
  ]);

  const handleAddOrUpdateCoffee = (newCoffee, quantity) => {
    const existingCoffeeIndex = coffees.findIndex(c => c.name === newCoffee.name);

    if (existingCoffeeIndex !== -1) {
      // Update existing coffee stock
      const updatedCoffees = [...coffees];
      updatedCoffees[existingCoffeeIndex].poundsLeft += 130 * quantity;
      setCoffees(updatedCoffees);
    } else {
      // Add new coffee type
      newCoffee.poundsLeft = 130 * quantity;
      setCoffees(prevCoffees => [...prevCoffees, newCoffee]);
    }
  };

  return (
    <div className="App">
      <Header />
      <CoffeeList coffees={coffees} />
      <AddCoffeeForm onAddOrUpdateCoffee={handleAddOrUpdateCoffee} coffees={coffees} />
      <Footer />
    </div>
  );
}

export default App;
