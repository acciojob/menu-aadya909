import React, { useState } from 'react';
import Menu from './Menu';
import '../styles/styles.css';

const menuData = [
  {
    id: 1,
    name: 'Pancakes',
    category: 'Breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$5.99'
  },
  {
    id: 2,
    name: 'Burger',
    category: 'Lunch',
    image: 'https://via.placeholder.com/150',
    price: '$8.99'
  },
  {
    id: 3,
    name: 'Milkshake',
    category: 'Shakes',
    image: 'https://via.placeholder.com/150',
    price: '$4.50'
  },
  {
    id: 4,
    name: 'Omelette',
    category: 'Breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$6.99'
  },
  {
    id: 5,
    name: 'Grilled Cheese',
    category: 'Lunch',
    image: 'https://via.placeholder.com/150',
    price: '$7.25'
  },
  {
    id: 6,
    name: 'Chocolate Shake',
    category: 'Shakes',
    image: 'https://via.placeholder.com/150',
    price: '$5.25'
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleFilter = (category) => {
    setActiveCategory(category);
  };

  const filteredItems =
    activeCategory === 'All'
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="buttons">
        <button id="filter-btn-0" onClick={() => handleFilter('All')}>All</button>
        <button id="filter-btn-1" onClick={() => handleFilter('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter('Shakes')}>Shakes</button>
      </div>
      <Menu items={filteredItems} />
    </div>
  );
}

export default App;
