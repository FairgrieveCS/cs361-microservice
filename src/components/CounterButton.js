import React from 'react';

// Define the API URL
const API_URL = 'http://localhost:3000';

// Function to increment the counter
const incrementCounter = async () => {
  const response = await fetch(`${API_URL}/counter/increment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: 'user123' }),
  });

  return response.json();
};

// Function to get the current counter value
const getCounterValue = async () => {
  const response = await fetch(`${API_URL}/counter/user123`);
  return response.json();
};

// Function to reset the counter and update the user's balance
const resetCounter = async () => {
  const response = await fetch(`${API_URL}/counter/reset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: 'user123' }),
  });

  return response.json();
};

// Function to handle button click
const handleClick = async () => {
  const incrementResponse = await incrementCounter();
  console.log('Increment response:', incrementResponse);

  const currentValueResponse = await getCounterValue();
  console.log('Current counter value:', currentValueResponse);

  const resetResponse = await resetCounter();
  console.log('Reset response:', resetResponse);
};

// CounterButton component
const CounterButton = () => {
  return (
    <button className="counter-button" onClick={handleClick}>
      Collect Coins
    </button>
  );
};

export default CounterButton;

