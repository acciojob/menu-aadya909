import React from 'react';

function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.image} alt={item.name} className="menu-img" />
          <div className="menu-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
