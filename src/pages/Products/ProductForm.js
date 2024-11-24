// src/Components/ProductForm/ProductForm.js

import React, { useState, useEffect } from 'react';
import './ProductForm.css';

const ProductForm = ({ onAddProduct, onUpdateProduct, editingProduct, setEditingProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: '' // Add image field
  });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) || '' : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({
          ...product,
          image: reader.result, // Use base64 URL for the image
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      onUpdateProduct(product);
      setEditingProduct(null);
    } else {
      onAddProduct(product);
    }
    setProduct({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      image: '' // Reset image field
    });
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setProduct({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      image: '' // Reset image field
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {product.image && (
          <div className="image-preview">
            <img src={product.image} alt="Product Preview" />
          </div>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
        {editingProduct && (
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
