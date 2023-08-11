import React, { useState } from 'react';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import AddCoffeeForm from './components/AddCoffeeForm';
import Footer from './components/Footer';

function App() {
  const [coffees, setCoffees] = useState([
    { name: 'Espresso', origin: 'Italy', price: '10', roast: 'dark', poundsLeft: 130 },
    { name: 'Americano', origin: 'USA', price: '8', roast: 'medium', poundsLeft: 130 },
    { name: 'Latte', origin: 'France', price: '12', roast: 'light', poundsLeft: 130 },
    { name: 'Cortado', origin: 'Spain', price: '9', roast: 'medium-dark', poundsLeft: 130 },
    { name: 'Flat White', origin: 'Australia', price: '11', roast: 'medium', poundsLeft: 130 },
    { name: 'Café Cubano', origin: 'Cuba', price: '7', roast: 'dark', poundsLeft: 130 },
    { name: 'Turkish Coffee', origin: 'Turkey', price: '13', roast: 'dark', poundsLeft: 130 },
    { name: 'Café de Olla', origin: 'Mexico', price: '6', roast: 'medium', poundsLeft: 130 },
    { name: 'Ethiopian Buna', origin: 'Ethiopia', price: '14', roast: 'light', poundsLeft: 130 },
    { name: 'Brazilian Cafezinho', origin: 'Brazil', price: '5', roast: 'medium-dark', poundsLeft: 130 }
  ]);

  const handleAddCoffee = (newCoffee, quantity) => {
    const existingCoffee = coffees.find(c => c.name === newCoffee.name);

    if (existingCoffee) {
      const updatedCoffees = coffees.map(c => {
        if (c.name === newCoffee.name) {
          return { ...c, poundsLeft: (c.poundsLeft || 130) + (130 * quantity) };
        }
        return c;
      });
      setCoffees(updatedCoffees);
    } else {
      newCoffee.poundsLeft = 130 * quantity;
      setCoffees(prevCoffees => [...prevCoffees, newCoffee]);
    }
  };

  const handleAddStock = (coffeeName, quantityToAdd) => {
    const updatedCoffees = coffees.map(coffee => {
      if (coffee.name === coffeeName) {
        return { ...coffee, poundsLeft: (coffee.poundsLeft || 130) + (130 * quantityToAdd) };
      }
      return coffee;
    });
    setCoffees(updatedCoffees);
  };

  return (
    <div className="App">
      <Header />
      <CoffeeList coffees={coffees} />
      <AddCoffeeForm onAddCoffee={handleAddCoffee} onAddStock={handleAddStock} coffees={coffees} />
      <Footer />
    </div>
  );
}

export default App;
