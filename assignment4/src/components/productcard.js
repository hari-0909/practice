import React,{useState} from 'react';

const ProductCard = ({ data }) => {
  const [showFull, setShowFull] = useState(false);
  const { description } = data;
  const isLong = description.length > 100;
  return (
    <div className="card">
      <img src={data.thumbnail} alt={data.title} />
      <h2>{data.title}</h2>
      <p className="product-description">
        {showFull ? description : description.slice(0, 100)}
        {isLong && !showFull && '...'}
        {isLong && (
          <span onClick={() => setShowFull(!showFull)} className="toggle-link"
            style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}>
            {showFull ? '...show less' : 'more'}
          </span>
        )}
      </p>
      <p><b>Price:</b> ${data.price}</p>
      <p><b>Rating:</b> {data.rating}</p>
      <p><b>Stock:</b> {data.stock}</p>
    </div>
  );
};

export default ProductCard;
