// SuppliersPage.js
import React, { useState } from 'react';
import SupplierForm from './SupplierForm';
import SupplierList from './SupplierList';
import { FaSearch, FaSync, FaSort } from 'react-icons/fa';
import { useData } from '../../context/DataContext';
import './SuppliersPage.css';

const SuppliersPage = () => {
  const { suppliers, addSupplier, updateSupplier, deleteSupplier, fetchSuppliers } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingSupplier, setEditingSupplier] = useState(null);

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSuppliers = filteredSuppliers.sort((a, b) => {
    return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  const toggleSortOrder = () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

  return (
    <div className="suppliers-page">
      <h1>Suppliers Management</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Suppliers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search">
          <FaSearch />
        </button>
        <button className="btn-refresh" onClick={fetchSuppliers}>
          <FaSync />
        </button>
        <button className="btn-sort" onClick={toggleSortOrder}>
          <FaSort />
        </button>
      </div>

      <div className="suppliers-content">
        <div className="supplier-form-container">
          <h2>{editingSupplier ? 'Edit Supplier' : 'Add New Supplier'}</h2>
          <SupplierForm
            onAddSupplier={addSupplier}
            onUpdateSupplier={updateSupplier}
            editingSupplier={editingSupplier}
            setEditingSupplier={setEditingSupplier}
          />
        </div>

        <div className="supplier-list-container">
          <h2>Supplier List</h2>
          <SupplierList
            suppliers={sortedSuppliers}
            onEditSupplier={setEditingSupplier}
            onDeleteSupplier={deleteSupplier}
          />
        </div>
      </div>
    </div>
  );
};

export default SuppliersPage;
