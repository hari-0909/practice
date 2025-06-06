import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import ProductCard from './components/productcard';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import ProductDetail from './components/productdetail';
const App = () => {
  const [products,setProducts]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const productsPerPage=8;
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=194&skip=0')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);
  const totalPages=Math.ceil(products.length/productsPerPage);
  const start=(currentPage-1)*productsPerPage;
  const end=start+productsPerPage;
  const currentProducts=products.slice(start,end);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
              <div className="products-container">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
              <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span style={{ margin: '0 1rem' }}>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
