import React, { useState, useEffect } from 'react';
import './SupplierForm.css';

const SupplierForm = ({ onAddSupplier, onUpdateSupplier, editingSupplier, setEditingSupplier }) => {
  const [supplierData, setSupplierData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    profileImage: null,
  });

  useEffect(() => {
    if (editingSupplier) {
      setSupplierData(editingSupplier);
    } else {
      setSupplierData({ name: '', email: '', phone: '', category: '', profileImage: null });
    }
  }, [editingSupplier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    setSupplierData((prevData) => ({
      ...prevData,
      profileImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSupplier) {
      onUpdateSupplier(supplierData);
    } else {
      onAddSupplier(supplierData);
    }
    setSupplierData({ name: '', email: '', phone: '', category: '', profileImage: null });
    setEditingSupplier(null);
  };

  const handleCancelEdit = () => {
    setEditingSupplier(null);
    setSupplierData({ name: '', email: '', phone: '', category: '', profileImage: null });
  };

  return (
    <form className="supplier-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={supplierData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={supplierData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={supplierData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={supplierData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Profile Image</label>
        <input type="file" onChange={handleImageUpload} />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {editingSupplier ? 'Update Supplier' : 'Add Supplier'}
        </button>
        {editingSupplier && (
          <button type="button" className="btn-cancel" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default SupplierForm;
