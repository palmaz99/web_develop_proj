const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the /api/v1/weather route
app.get('/api/v1/weather', (req, res) => {
  const weatherData = {
    Temp: 90.5,
    Unit: 'fahrenheit',
    Cloudy: false,
    PrecipitationChance: 0
  };

  res.json(weatherData);
});

// Define the /submit-form route
app.post('/submit-form', (req, res) => {
  const formData = req.body; // Access the submitted form data here

  // Process the form data as needed
  // ...

  // Send a response back to the client
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
