import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Rating:</b> {product.rating}</p>
      <p><b>Stock:</b> {product.stock}</p>
      <p><b>Brand:</b> {product.brand}</p>
      <p><b>Category:</b> {product.category}</p>
    </div>
  );
};

export default ProductDetail;