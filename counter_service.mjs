import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Set up Express app and middleware
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize data storage and coins generation rate
const counterData = new Map();
const coinsPerSecond = 1; // Change to desired number

// Route for incrementing counter
app.post('/counter/increment', (req, res) => {
  const userId = req.body.userId;
  const currentTime = Date.now();

  // Check if user data exists in counterData
  if (counterData.has(userId)) {
    const userData = counterData.get(userId);
    // Calculate coins generated since last update
    const timeElapsed = (currentTime - userData.lastUpdated) / 1000;
    userData.count += timeElapsed * coinsPerSecond;
    userData.lastUpdated = currentTime;
  } else {
    // If user data does not exist, create a new entry
    counterData.set(userId, { count: 0, balance: 0, lastUpdated: currentTime });
  }

  res.json({ userId: userId, count: counterData.get(userId).count });
});

// Route to get the current counter and balance for a user
app.get('/counter/:userId', (req, res) => {
  const userId = req.params.userId;

  if (!counterData.has(userId)) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  res.json({ userId, count: counterData.get(userId).count, balance: counterData.get(userId).balance });
});

// Route to reset the counter and update the user's balance
app.post('/counter/reset', (req, res) => {
  const userId = req.body.userId;

  if (!counterData.has(userId)) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  const userData = counterData.get(userId);
  const previousValue = userData.count;
  // Add current counter value to the user's balance
  userData.balance += userData.count;
  // Reset the counter
  userData.count = 0;
  userData.lastUpdated = Date.now();
  res.json({ userId, previousValue, balance: userData.balance });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Counter microservice listening on port ${PORT}...`);
});
