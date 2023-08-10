import React, { useState } from 'react';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import AddCoffeeForm from './components/AddCoffeeForm';
import Footer from './components/Footer';

function App() {
  const [coffees, setCoffees] = useState([]);

  const handleAddCoffee = (newCoffee) => {
    setCoffees(prevCoffees => [...prevCoffees, newCoffee]);
  };

  return (
    <div className="App">
      <Header />
      <CoffeeList coffees={coffees} />
      <AddCoffeeForm onAddCoffee={handleAddCoffee} />
      <Footer />
    </div>
  );
}

export default App;
