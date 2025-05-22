import React from 'react';

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.thumbnail} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p><b>Price:</b> ${data.price}</p>
      <p><b>Rating:</b> {data.rating}</p>
      <p><b>Stock:</b> {data.stock}</p>
    </div>
  );
};

export default ProductCard;
