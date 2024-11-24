// src/Components/ProductList/ProductList.js

import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onEditProduct, onDeleteProduct }) => {
  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return isNaN(numericPrice) ? '₹0.00' : `₹${numericPrice.toFixed(2)}`;
  };

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            {product.image && (
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
            )}
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: {formatPrice(product.price)}</p>
              <p>Stock: {product.stock}</p>
              <p>Description: {product.description}</p>
            </div>
            <div className="product-actions">
              <button className="btn-edit" onClick={() => onEditProduct(product)}>Edit</button>
              <button className="btn-delete" onClick={() => onDeleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
