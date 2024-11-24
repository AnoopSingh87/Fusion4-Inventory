import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './SupplierList.css';

const SupplierList = ({ suppliers, onEditSupplier, onDeleteSupplier }) => {
  return (
    <div className="supplier-list">
      {suppliers.length > 0 ? (
        suppliers.map((supplier) => (
          <div key={supplier.id} className="supplier-item">
            <img
              src={supplier.profileImage ? URL.createObjectURL(supplier.profileImage) : '/default-avatar.png'}
              alt={`${supplier.name}'s profile`}
              className="supplier-profile-img"
            />
            <div className="supplier-details">
              <h3>{supplier.name}</h3>
              <p>Email: {supplier.email}</p>
              <p>Phone: {supplier.phone}</p>
              <p>Category: {supplier.category}</p>
            </div>
            <div className="supplier-actions">
              <button
                className="btn-edit"
                onClick={() => onEditSupplier(supplier)}
              >
                <FaEdit />
              </button>
              <button
                className="btn-delete"
                onClick={() => onDeleteSupplier(supplier.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No suppliers found.</p>
      )}
    </div>
  );
};

export default SupplierList;
