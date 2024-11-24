import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { useData } from '../../context/DataContext'; // Ensure the correct hook is used
import { FaBox, FaDollarSign, FaChartPie, FaUsers } from 'react-icons/fa';
import './DashboardPage.css';

// Register necessary elements with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DashboardPage = () => {
  const { products = [], suppliers = [] } = useData(); // Ensure default values if undefined

  // Calculate total products, total stock, and total suppliers
  const totalProducts = products.length;
  const totalStock = products.reduce((acc, product) => acc + (product.stock || 0), 0);
  const totalSuppliers = suppliers.length;

  // Prepare data for the "Stock by Category" pie chart
  const stockByCategoryData = {
    labels: Object.keys(
      products.reduce((acc, product) => {
        if (product.category) {
          acc[product.category] = (acc[product.category] || 0) + (product.stock || 0);
        }
        return acc;
      }, {})
    ),
    datasets: [
      {
        label: 'Stock by Category',
        data: Object.values(
          products.reduce((acc, product) => {
            if (product.category) {
              acc[product.category] = (acc[product.category] || 0) + (product.stock || 0);
            }
            return acc;
          }, {})
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the sales bar chart
  const salesData = {
    labels: products.map((product) => product.name || 'Unknown'),
    datasets: [
      {
        label: 'Stock Levels',
        data: products.map((product) => product.stock || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Format the price in a readable currency format
  const formatPrice = (price) => `₹${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

  // Calculate the total stock value
  const totalStockValue = products.reduce(
    (acc, product) => acc + (product.price || 0) * (product.stock || 0),
    0
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      {/* Dashboard Cards Section */}
      <div className="dashboard-cards">
        <div className="card card-total-products">
          <FaBox className="card-icon" />
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div className="card card-total-stock">
          <FaChartPie className="card-icon" />
          <h3>Total Stock</h3>
          <p>{totalStock}</p>
        </div>
        <div className="card card-total-stock-value">
          <FaDollarSign className="card-icon" />
          <h3>Total Stock Value</h3>
          <p>{formatPrice(totalStockValue)}</p>
        </div>
        <div className="card card-total-suppliers">
          <FaUsers className="card-icon" />
          <h3>Total Suppliers</h3>
          <p>{totalSuppliers}</p>
        </div>
      </div>

      {/* Dashboard Charts Section */}
      <div className="dashboard-charts">
        <div className="chart-section">
          <h3>Stock Overview by Category</h3>
          <div className="chart-container">
            <Pie data={stockByCategoryData} />
          </div>
        </div>
        <div className="chart-section">
          <h3>Sales Overview</h3>
          <div className="chart-container">
            <Bar data={salesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
