const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define route for saving data
app.post('/api/save', (req, res) => {
  const newData = req.body;
  // Save newData to the JSON file or database
  // Example: You can use fs module to write to a JSON file
  // fs.writeFileSync('data.json', JSON.stringify(newData));
  
  // Send the saved data back as the response
  res.json(newData);
});

// Define route for fetching data
app.get('/api/data', (req, res) => {
  // Fetch the data from the JSON file or database
  // Example: You can use fs module to read from a JSON file
  // const jsonData = fs.readFileSync('data.json');
  // const data = JSON.parse(jsonData);

  // Send the fetched data back as the response
  res.json(data);
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
