import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://alex-studio643-default-rtdb.asia-southeast1.firebasedatabase.app/';

const TablePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetching the data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/Bookings.json`);
        const fetchedData = response.data;
        
        // Converting the object data to an array of objects
        const tableData = fetchedData ? Object.keys(fetchedData).map(key => ({
          id: key,
          ...fetchedData[key]
        })) : [];
        
        setData(tableData);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-page-container">
      <h1 className="page-title">Booking Information</h1>
      
      {isLoading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Table for displaying data */}
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.service}</td>
                <td>{entry.date}</td>
                <td>{entry.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
