import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products');
    }
  }, []); // useCallback ensures the function is stable

  // Fetch suppliers from API
  const fetchSuppliers = useCallback(async () => {
    try {
      const response = await fetch('/api/suppliers');
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
      setError('Failed to fetch suppliers');
    }
  }, []); // useCallback ensures the function is stable

  // Fetch Products and Suppliers initially when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchProducts();
        await fetchSuppliers();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchProducts, fetchSuppliers]); // Include fetchProducts and fetchSuppliers as dependencies

  // Add a new product
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Update a product
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Delete a product
  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  // Add a new supplier
  const addSupplier = (newSupplier) => {
    setSuppliers((prevSuppliers) => [...prevSuppliers, newSupplier]);
  };

  // Update a supplier
  const updateSupplier = (updatedSupplier) => {
    setSuppliers((prevSuppliers) =>
      prevSuppliers.map((supplier) =>
        supplier.id === updatedSupplier.id ? updatedSupplier : supplier
      )
    );
  };

  // Delete a supplier
  const deleteSupplier = (supplierId) => {
    setSuppliers((prevSuppliers) => prevSuppliers.filter((supplier) => supplier.id !== supplierId));
  };

  return (
    <DataContext.Provider
      value={{
        products,
        suppliers,
        addProduct,
        updateProduct,
        deleteProduct,
        addSupplier,
        updateSupplier,
        deleteSupplier,
        fetchProducts,
        fetchSuppliers,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data context
export const useData = () => useContext(DataContext);
