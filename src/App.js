// App.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './App.css';

function App() {
  // Initialize the state for challenge progress (storing completed days)
  const [completedDays, setCompletedDays] = useState(new Set());

  // Function to load completed days from localStorage
  useEffect(() => {
    const savedCompletedDays = JSON.parse(localStorage.getItem('completedDays'));
    if (savedCompletedDays) {
      setCompletedDays(new Set(savedCompletedDays));
    }
  }, []);

  // Function to handle marking a day as completed
  const markDayCompleted = (date) => {
    const newCompletedDays = new Set(completedDays);
    const dateString = date.toDateString(); // Convert date to string for easier comparison
    if (newCompletedDays.has(dateString)) {
      newCompletedDays.delete(dateString); // Unmark if already marked
    } else {
      newCompletedDays.add(dateString); // Mark the day
    }
    setCompletedDays(newCompletedDays);

    // Save the updated completed days in localStorage
    localStorage.setItem('completedDays', JSON.stringify(Array.from(newCompletedDays)));
  };

  // Custom tile class for marking completed days
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toDateString();
      return completedDays.has(dateString) ? 'completed' : null;
    }
    return null;
  };

  return (
    <div className="App">
      <h1>30-Day Challenge Calendar</h1>
      <p>Mark each day as you complete your challenge!</p>
      <Calendar
        onClickDay={markDayCompleted} // Mark day when clicked
        tileClassName={tileClassName} // Add custom styles for completed days
      />
      <p>Days Completed: {completedDays.size}</p>
    </div>
  );
}

export default App;
