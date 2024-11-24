import React, { useState, useEffect } from 'react';
import './ReportsPage.css'; // Import CSS for styling
import formatCurrency from '../../FormatCurrency/formatCurrency'; // Correctly import formatCurrency
import { saveAs } from 'file-saver'; // For downloading files
import { useData } from '../../context/DataContext'; // Assuming the context is used for data fetching

const ReportsPage = () => {
  const { products, suppliers } = useData(); // Fetch data from your context
  const [selectedProduct, setSelectedProduct] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);

  // Fetch and update invoice data when the selected product changes
  useEffect(() => {
    if (selectedProduct) {
      const product = products.find(p => p.id === parseInt(selectedProduct));
      const supplier = suppliers.find(s => s.id === product?.supplierId);
      setInvoiceData({ ...product, supplierName: supplier ? supplier.name : 'Unknown' });
    }
  }, [products, suppliers, selectedProduct]);

  // Handle product selection
  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  // Generate invoice based on selected product and supplier details
  const generateInvoice = () => {
    if (!invoiceData) {
      return <p>No product selected or data available.</p>;
    }
    return (
      <div className="invoice-item" id="invoice">
        <h2>Invoice for {invoiceData.name}</h2>
        <p><strong>Price:</strong> {formatCurrency(invoiceData.price)}</p>
        <p><strong>Stock:</strong> {invoiceData.stock}</p>
        <p><strong>Category:</strong> {invoiceData.category}</p>
        <p><strong>Supplier:</strong> {invoiceData.supplierName}</p>
      </div>
    );
  };

  // Handle print functionality
  const handlePrint = () => {
    const invoice = document.getElementById('invoice');
    if (!invoice) {
      alert('Invoice not available for printing.');
      return;
    }
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = invoice.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to restore the original view
  };

  // Handle download functionality
  const handleDownload = () => {
    const invoice = document.getElementById('invoice');
    if (!invoice) {
      alert('Invoice not available for download.');
      return;
    }
    const invoiceHtml = invoice.outerHTML;
    const blob = new Blob([invoiceHtml], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'invoice.html');
  };

  return (
    <div className="reports-page">
      <h1>Invoice Generator</h1>
      <div className="reports-form">
        <label htmlFor="product-select">Select Product:</label>
        <select id="product-select" onChange={handleProductChange} value={selectedProduct}>
          <option value="">--Select a Product--</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </select>
      </div>
      <div className="invoice-container">
        {generateInvoice()}
      </div>
      <div className="invoice-actions">
        <button onClick={handlePrint} className="btn-print">Print Invoice</button>
        <button onClick={handleDownload} className="btn-download">Download Invoice</button>
      </div>
    </div>
  );
};

export default ReportsPage;
