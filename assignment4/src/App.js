import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import ProductCard from './components/productcard';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=194&skip=0')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
