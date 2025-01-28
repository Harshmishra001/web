const express = require("express");
const cors = require("cors");

const app = express();
const port = 3007;

// Middleware
app.use(cors());
app.use(express.json());

// Mock notification data
const notificationsData = {
  network: 10,
  jobs: 5,
  messaging: 3,
  notifications: 2
};

// Endpoint to get notifications data
app.get("/notification", (req, res) => {
  // Simulate a delay for fetching data (e.g., from a database)
  setTimeout(() => {
    res.json(notificationsData);
  }, 1000);  // Simulate a 1-second delay
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
