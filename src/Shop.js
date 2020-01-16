import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
      const data = await fetch(
          'https://www.eventbriteapi.com/v3/categories/?token=RGZSQ3RSRKJUFHU2CXYW&locale=es_ES'      
      );

      const items = await data.json();
      console.log(items.categories);
      setItems(items.categories);

  };

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map(item => (
        <h1 key={item.id}>
           <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
