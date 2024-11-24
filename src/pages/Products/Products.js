// ProductsPage.js
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { FaSearch, FaSync, FaSort } from 'react-icons/fa';
import { useData } from '../../context/DataContext';
import './ProductsPage.css';

const ProductsPage = () => {
  const { products, addProduct, updateProduct, deleteProduct, fetchProducts } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  const toggleSortOrder = () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

  return (
    <div className="products-page">
      <h1>Products Management</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search">
          <FaSearch />
        </button>
        <button className="btn-refresh" onClick={fetchProducts}>
          <FaSync />
        </button>
        <button className="btn-sort" onClick={toggleSortOrder}>
          <FaSort />
        </button>
      </div>

      <div className="products-content">
        <div className="product-form-container">
          <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
          <ProductForm
            onAddProduct={addProduct}
            onUpdateProduct={updateProduct}
            editingProduct={editingProduct}
            setEditingProduct={setEditingProduct}
          />
        </div>

        <div className="product-list-container">
          <h2>Product List</h2>
          <ProductList
            products={sortedProducts}
            onEditProduct={setEditingProduct}
            onDeleteProduct={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
