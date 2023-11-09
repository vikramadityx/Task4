import './App.css';
import React, { useState } from 'react';

function App() {
  // State to store the user input (date of birth) and age
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [displayAge, setDisplayAge] = useState(false); // Added state for displaying age

  // Function to handle user input change for date of birth
  const handleInputChange = (event) => {
    const dateOfBirth = event.target.value;
    setDob(dateOfBirth);
  };

  // Function to handle the "Calculate Age" button click
  const calculateAge = () => {
    // Calculate age here (similar logic as in handleInputChange)
    if (dob) {
      const dobDate = new Date(dob);
      const currentDate = new Date();

      const ageInMilliseconds = currentDate - dobDate;
      const ageDate = new Date(ageInMilliseconds);

      const years = ageDate.getUTCFullYear() - 1970;
      const months = ageDate.getUTCMonth();
      const days = ageDate.getUTCDate() - 1;

      setAge(`${years} years, ${months} months, ${days} days`);
      setDisplayAge(true); // Set displayAge to true after calculating the age
    } else {
      setAge('');
      setDisplayAge(false); // Reset displayAge if no date of birth is entered
    }
  };

  return (
    <div className="App" style={{ backgroundColor: 'red !important' }}>
      <header className="App-header">
        <div>
          <label>
            <h1>Age Calculator</h1>
            <b>Enter your date of birth</b>
            <div><br /></div>
            <div>
              <input
                type="date"
                value={dob}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={calculateAge}
              >
                Calculate Age
              </button>
            </div>
          </label>
        </div>

        <div className="AgeBox">
          {displayAge && age !== '' ? (
            <h3>You are {age}</h3>
          ) : (
            <h3>Please enter your date of birth and click "Calculate Age"</h3>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
